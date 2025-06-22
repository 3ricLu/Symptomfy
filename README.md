# Symptify

An AI-powered symptom screening application that uses Gemini to provide dynamic medical questionnaires and recommendations.

## Features

- **Dynamic Question Generation**: Uses Google's Gemini AI to generate contextual follow-up questions based on user responses
- **Body Area Selection**: Interactive body selector for targeted symptom assessment
- **Intelligent Diagnosis**: AI-powered analysis providing diagnosis confidence levels and recommendations
- **Appointment Booking**: Integration with family doctor scheduling
- **Clinic Finder**: Locate nearby medical facilities

## Tech Stack

**Frontend:**

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

**Backend:**

- Flask (Python)
- SQLAlchemy + Alembic
- Google Gemini AI
- CORS enabled for frontend integration

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- Python 3.8+
- Pipenv (for Python dependency management)

### Backend Setup

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install Python dependencies:

   ```bash
   pipenv install
   pipenv shell
   ```

3. Set up environment variables:
   Create a `.env` file in the server directory:

   ```bash
   # Required for production
   GEMINI_API_KEY=your_gemini_api_key_here
   DATABASE_URL=sqlite:///./symptify.db

   # Optional: Use mock responses for development
   USE_GPT_MOCK=1
   ```

4. Run database migrations:

   ```bash
   alembic upgrade head
   ```

5. Start the Flask server:
   ```bash
   python -m app.main
   ```
   The server will run on `http://localhost:5001`

### Frontend Setup

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file:
   Create a `.env` file in the client directory:

   ```bash
   VITE_API_URL=http://localhost:5001
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The client will run on `http://localhost:5173`

## Development Mode

For development without a Gemini API key, set `USE_GPT_MOCK=1` in your server `.env` file. This will use predefined mock responses instead of calling the Gemini API.

## API Endpoints

### Questions API

- `POST /api/questions/generate`

  - Generate next question or final diagnosis
  - Body: `{ "answers": {}, "body_location": "head" }`
  - Returns: Question object or diagnosis result

- `GET /api/questions/status`
  - Get API status and available conditions

## Usage Flow

1. **Select Body Areas**: Choose areas of discomfort using the interactive body selector
2. **Answer Questions**: Respond to AI-generated questions tailored to your symptoms
3. **Receive Diagnosis**: Get AI analysis with confidence level and recommendations
4. **Take Action**: Follow self-care advice or book medical appointments

## Body Area Mapping

The frontend maps detailed body regions to general categories:

- `head`, `neck` → `head`
- `chest` → `chest`
- `abdomen`, `pelvis` → `abdomen`
- `back` → `back`
- `*arm*`, `*hand*` → `arms`
- `*thigh*`, `*shin*`, `*foot*` → `legs`

## TypeScript Interfaces

```typescript
interface GeminiQuestion {
  question: string;
  question_id: string;
  type: "yes/no" | "multiple_choice";
  options: string[];
  is_final: boolean;
  question_number: number;
  total_questions: number;
}

interface GeminiDiagnosis {
  diagnosis: string;
  confidence: "high" | "medium" | "low";
  recommendation: "self_care" | "see_doctor";
  advice: string;
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure TypeScript compilation passes: `tsc --strict`
5. Test the end-to-end flow
6. Submit a pull request

## License

MIT License
