#!/usr/bin/env python3
"""
Quick test script to check if Gemini client connects and works
"""

import asyncio
import os
from app.ai.gemini_client import GeminiClient

async def test_gemini():
    """Test the Gemini client connection and basic functionality"""
    
    print("🧪 Testing Gemini Client...")
    print("=" * 50)
    
    # Check if API key is set
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("❌ GEMINI_API_KEY environment variable not set!")
        print("Please set it with: export GEMINI_API_KEY='your-api-key-here'")
        return False
    
    print(f"✅ API Key found: {api_key[:10]}...")
    
    try:
        # Initialize client
        print("🔄 Initializing Gemini client...")
        client = GeminiClient()
        print("✅ Client initialized successfully!")
        
        # Test basic prompt
        print("🔄 Testing basic prompt...")
        test_prompt = "Hello! Can you tell me a short joke?"
        response = await client.generate_response(test_prompt)
        
        print("✅ Response received!")
        print(f"📝 Response: {response}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    # Run the async test
    success = asyncio.run(test_gemini())
    
    if success:
        print("\n🎉 Gemini client test PASSED!")
    else:
        print("\n💥 Gemini client test FAILED!") 