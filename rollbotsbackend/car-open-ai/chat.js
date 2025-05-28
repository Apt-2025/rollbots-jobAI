// src/chat.js
import "dotenv/config";
import OpenAI from "openai";
import readline from 'readline';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  try {
    // Create a new thread
    const thread = await openai.beta.threads.create();
    console.log("\nConnected to assistant! Type your message (or 'quit' to exit)");

    // Function to process user input
    const askQuestion = async () => {
      rl.question("\nYou: ", async (userInput) => {
        // Check if user wants to quit
        if (userInput.toLowerCase() === 'quit') {
          rl.close();
          return;
        }

        try {
          // Add the user's message to the thread
          await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: userInput
          });

          // Run the assistant
          const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: process.env.ASSISTANT_ID
          });

          // Check the run status and wait for completion
          let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
          
          while (runStatus.status !== "completed") {
            if (runStatus.status === "failed") {
              console.error("Assistant run failed:", runStatus.last_error);
              break;
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
          }

          // Get the assistant's messages
          const messages = await openai.beta.threads.messages.list(thread.id);
          const lastMessage = messages.data[0];

          // Display the assistant's response
          if (lastMessage.role === "assistant") {
            console.log("\nAssistant:", lastMessage.content[0].text.value);
          }

          // Continue the conversation
          askQuestion();
        } catch (error) {
          console.error("Error:", error.message);
          askQuestion();
        }
      });
    };

    // Start the conversation
    askQuestion();

  } catch (error) {
    console.error("Error:", error.message);
    rl.close();
  }
}

// Start the application
main();
