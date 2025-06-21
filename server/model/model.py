"""
Example: using the 'acharya-jyu/sapbert-pubmedbert-ddxplus-10k' checkpoint  
to get the top-k differential diagnoses from age/sex + evidence codes.
"""

import json
import torch
import torch.nn.functional as F
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
)

# ───────────────────────────────────────────────────────────
# 1.  Lookup tables ─ turn class indices into human names
# ───────────────────────────────────────────────────────────
with open("release_conditions.json") as f:
    CONDITIONS = json.load(f)

# Create a mapping from index to condition name
# The model outputs class indices, so we need to map them to condition names
condition_names = list(CONDITIONS.keys())
id2cond = {i: name for i, name in enumerate(condition_names)}

# ───────────────────────────────────────────────────────────
# 2.  Load tokenizer & model
# ───────────────────────────────────────────────────────────
MODEL_NAME = "acharya-jyu/sapbert-pubmedbert-ddxplus-10k"

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_NAME,
    trust_remote_code=True,   # repo's config uses "BertModel"
).eval()

# Optional: use GPU / Apple-silicon acceleration if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# ───────────────────────────────────────────────────────────
# 3.  Helper: build the space-separated DDXPlus "sentence"
# ───────────────────────────────────────────────────────────
def make_ddxplus_sentence(age: int, sex: str, codes: list[str]) -> str:
    """
    Example →  AGE_45 SEX_M E_91 E_77 E_89
    """
    return " ".join([f"AGE_{age}", f"SEX_{sex.upper()[0]}"] + codes)

# Demo input
txt = make_ddxplus_sentence(
    age=45,
    sex="M",
    codes=["E_91", "E_77", "E_89"],   # fever, cough, fatigue
)

# ───────────────────────────────────────────────────────────
# 4.  Tokenise & move tensors to correct device
# ───────────────────────────────────────────────────────────
inputs = tokenizer(txt, return_tensors="pt")
inputs = {k: v.to(device) for k, v in inputs.items()}

# ───────────────────────────────────────────────────────────
# 5.  Forward pass → softmax probabilities
# ───────────────────────────────────────────────────────────
with torch.no_grad():
    logits = model(**inputs).logits.squeeze(0)
    probs = F.softmax(logits, dim=-1)

print(f"Model output shape: {logits.shape}")
print(f"Number of conditions in JSON: {len(condition_names)}")
print(f"Probability distribution shape: {probs.shape}")

# ───────────────────────────────────────────────────────────
# 6.  Show top-k differential diagnoses
# ───────────────────────────────────────────────────────────
TOP_K = min(5, len(condition_names))  # Don't exceed the number of available conditions
print(f"Using TOP_K: {TOP_K}")

# Ensure we don't exceed the actual output size
TOP_K = min(TOP_K, probs.shape[0])
topk = torch.topk(probs, k=TOP_K)

for p, idx in zip(topk.values, topk.indices):
    diagnosis = id2cond[idx.item()]
    print(f"{diagnosis:<35} • {p.item():.2%}")
