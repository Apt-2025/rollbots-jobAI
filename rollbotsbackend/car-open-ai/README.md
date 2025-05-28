# Search Car Assistant API

A Node.js Express API that provides car search functionality using OpenAI's assistant API.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)
- OpenAI API Key
- OpenAI Assistant ID

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

This will install the required dependencies:
- express
- cors
- dotenv
- body-parser
- js-yaml
- openai

## Environment Setup

1. Create a `.env` file in the root directory
2. Add the following environment variables:
```env
OPENAI_API_KEY=your_openai_api_key
ASSISTANT_ID=your_assistant_id
```

> ⚠️ Never commit your `.env` file to version control!

## Running the Server

Start the server with:
```bash
node server.js
```

The server will start on port 3000 (default) or the port specified in your environment variables.
You should see the following output:
```
Server is running on http://localhost:3000
API endpoints:
- POST /api/chat/start - Create new chat thread
- POST /api/chat/message - Send message to thread
- GET /api/chat/history/:threadId - Get thread history
```

## API Endpoints

### 1. Create New Chat Thread
- **Endpoint**: `POST /api/chat/start`
- **Description**: Creates a new chat thread
- **Response**: Returns thread ID for subsequent messages

### 2. Send Message to Thread
- **Endpoint**: `POST /api/chat/message`
- **Description**: Sends a message to an existing chat thread
- **Request Body**:
  ```json
  {
    "threadId": "thread_xyz",
    "message": "Your message here"
  }
  ```

### 3. Get Thread History
- **Endpoint**: `GET /api/chat/history/:threadId`
- **Description**: Retrieves the chat history for a specific thread
- **Parameters**: 
  - `threadId`: The ID of the chat thread

## Error Handling

The API includes a global error handling middleware that will return errors in the following format:
```json
{
  "success": false,
  "error": {
    "message": "Error message",
    "code": "ERROR_CODE"
  }
}
```

Common error codes:
- `SERVER_ERROR`: Internal server error
