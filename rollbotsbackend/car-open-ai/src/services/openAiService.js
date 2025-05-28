import OpenAI from "openai";
import "dotenv/config";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function createThread() {
  try {
    const thread = await openai.beta.threads.create();
    return thread;
  } catch (error) {
    throw new Error(`Failed to create thread: ${error.message}`);
  }
}

export async function sendMessage(threadId, message) {
  try {
    // Verify thread exists first
    try {
      await openai.beta.threads.retrieve(threadId);
    } catch (error) {
      throw new Error('Invalid or expired thread ID');
    }

    console.log(`Processing message for thread ${threadId}`);

    // Add message to thread
    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message
    });

    // Run the assistant
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: process.env.ASSISTANT_ID
    });

    console.log(`Created run ${run.id}`);

    // Start the run and return immediately
    return { threadId, runId: run.id, status: 'processing' };

  } catch (error) {
    throw new Error(`Failed to process message: ${error.message}`);
  }
}

export async function checkRunStatus(threadId, runId) {
  try {
    const runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    console.log(`Run status: ${runStatus.status}`);

    if (runStatus.status === "completed") {
      // Get messages after completion
      const messages = await openai.beta.threads.messages.list(threadId);
      const lastMessage = messages.data[0];

      if (lastMessage.role === "assistant") {
        return {
          status: 'completed',
          response: lastMessage.content[0].text.value
        };
      }
      
      throw new Error("No assistant response found");
    }

    if (runStatus.status === "failed") {
      console.error('Run failed:', runStatus.last_error);
      return {
        status: 'failed',
        error: runStatus.last_error
      };
    }

    if (runStatus.status === "expired") {
      return {
        status: 'failed',
        error: 'Assistant run expired'
      };
    }

    // For any other status (queued, in_progress, etc.)
    return {
      status: 'processing'
    };
    
  } catch (error) {
    throw new Error(`Failed to check run status: ${error.message}`);
  }
}

export async function getThreadHistory(threadId) {
  try {
    const messages = await openai.beta.threads.messages.list(threadId);
    return messages.data.map(msg => ({
      role: msg.role,
      content: msg.content[0].text.value
    }));
  } catch (error) {
    throw new Error(`Failed to get thread history: ${error.message}`);
  }
}
