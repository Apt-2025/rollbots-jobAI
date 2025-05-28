const API_BASE_URL = 'http://localhost:3000/api/chat';

class ChatService {
  constructor() {
    this.threadId = null;
  }

  async startChat() {
    try {
      const response = await fetch(`${API_BASE_URL}/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        this.threadId = data.data.threadId;
        return this.threadId;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error('Error starting chat:', error);
      throw error;
    }
  }

  async sendMessage(message) {
    if (!this.threadId) {
      await this.startChat();
    }

    try {
      const response = await fetch(`${API_BASE_URL}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          threadId: this.threadId,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        return data.data;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  async checkStatus(runId) {
    if (!this.threadId) {
      throw new Error('No active chat thread');
    }

    try {
      const response = await fetch(`${API_BASE_URL}/status/${this.threadId}/${runId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        return data.data;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error('Error checking status:', error);
      throw error;
    }
  }

  async getChatHistory() {
    if (!this.threadId) {
      throw new Error('No active chat thread');
    }

    try {
      const response = await fetch(`${API_BASE_URL}/history/${this.threadId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        return data.data.history;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error('Error getting chat history:', error);
      throw error;
    }
  }
}

export default new ChatService();
