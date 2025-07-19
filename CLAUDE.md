# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Symptomfy is an AI-powered medical symptom screening application with a React/TypeScript frontend and Flask/Python backend. The application uses Google Gemini AI to generate dynamic medical questionnaires based on patient symptoms.

## Development Commands

### Frontend (client/)
```bash
npm run dev      # Start Vite dev server at http://localhost:5173
npm run build    # Run TypeScript check + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Backend (server/)
```bash
pipenv install        # Install dependencies
pipenv shell          # Activate virtual environment
alembic upgrade head  # Run database migrations
python -m app.main    # Start Flask server at http://localhost:5001
```

## Architecture Overview

### Frontend Architecture
- **State Management**: Redux Toolkit with feature-based slices in `/src/features/`
- **Routing**: React Router with protected routes in `/src/router/`
- **API Layer**: Axios with interceptors in `/src/api/`
- **UI Components**: shadcn/ui components in `/src/components/ui/`
- **Context**: ProfileContext for user profile data

### Backend Architecture
- **API Framework**: Flask with blueprints in `/app/routers/`
- **Database**: SQLAlchemy models in `/app/database/models.py`
- **Authentication**: JWT-based auth in `/app/auth/`
- **AI Integration**: Gemini client in `/app/ai/`
- **CRUD Operations**: Database operations in `/app/crud/`

### Key Features
1. **Body Area Selection**: Maps detailed body regions to general categories for symptom input
2. **AI Questionnaires**: Dynamic question generation using Gemini AI
3. **User Roles**: Separate profiles for patients, doctors, and admins
4. **Appointment System**: Booking management with calendar integration
5. **Mock Mode**: Development mode with mock responses when Gemini API is unavailable

## Redux State Structure

Currently implemented slices:
- `auth`: Authentication state and user data
- `bodySelector`: Selected body parts for symptoms
- `bookings`: Appointment management
- `history`: Patient medical history
- `profile`: User profile management (admin, doctor, patient)

## API Integration

- Frontend expects backend at `http://localhost:5001`
- All API endpoints prefixed with `/api/`
- Authentication uses JWT tokens stored in localStorage
- Session management through custom middleware

## Database Schema

Key models:
- `User`: Base user authentication
- `Patient`, `Doctor`, `Admin`: Role-specific profiles
- `Booking`: Appointment scheduling
- `Diagnosis`: AI-generated diagnoses
- `GeminiQuestions`: Dynamic questionnaire data

## Development Notes

1. **TypeScript Path Alias**: Use `@/` for imports from `src/`
2. **Protected Routes**: All routes except login/register require authentication
3. **Mock Responses**: Set `mock=true` in AI client for development without Gemini API
4. **Database Migrations**: Always run `alembic upgrade head` after model changes
5. **CORS**: Configured for local development, update for production

## Testing

Currently no automated testing framework is configured. Manual testing recommended for:
- Authentication flow
- Body area selection mapping
- AI questionnaire generation
- Appointment booking system