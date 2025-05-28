import React, { useState, useEffect } from 'react';
import { Widget, addResponseMessage, addUserMessage, dropMessages } from 'react-chat-widget';
import chatService from '../../services/chatService';
import 'react-chat-widget/lib/styles.css';
import './chatwidget.css'; // Custom styles for the chat widget

const ConnectedChatWidget = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Add initial welcome message
    addResponseMessage('Welcome to RollBots! How can I help you today?');
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    setIsProcessing(true);
    
    try {
      // Send message to backend
      const response = await chatService.sendMessage(newMessage);
      
      if (response.runId) {
        // Poll for completion
        await pollForResponse(response.runId);
      } else if (response.response) {
        // Direct response
        addResponseMessage(response.response);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      addResponseMessage('Sorry, I encountered an error. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const pollForResponse = async (runId) => {
    const maxAttempts = 30; // 30 seconds timeout
    let attempts = 0;

    const poll = async () => {
      try {
        const status = await chatService.checkStatus(runId);
        
        if (status.status === 'completed' && status.response) {
          addResponseMessage(status.response);
          return;
        } else if (status.status === 'failed') {
          addResponseMessage('Sorry, I encountered an error processing your request.');
          return;
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(poll, 1000); // Poll every second
        } else {
          addResponseMessage('Sorry, the request timed out. Please try again.');
        }
      } catch (error) {
        console.error('Error polling status:', error);
        addResponseMessage('Sorry, I encountered an error. Please try again.');
      }
    };

    poll();
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Job Assistant"
      subtitle="Your Job Assistant"
      senderPlaceHolder="Type your question here..."
      showCloseButton={true}
      showTimeStamp={false}
      autofocus={false}
      profileAvatar="/logo.svg"
      titleAvatar="/logo.svg"
      emojis={false}
      showBadge={false}
    />
  );
};

export default ConnectedChatWidget;
