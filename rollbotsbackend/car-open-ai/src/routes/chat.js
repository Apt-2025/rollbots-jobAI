import express from 'express';
import { createThread, sendMessage, getThreadHistory, checkRunStatus } from '../services/openAiService.js';

const router = express.Router();

// Create a new chat thread
router.post('/start', async (req, res) => {
  try {
    const thread = await createThread();
    res.json({
      success: true,
      data: { threadId: thread.id }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
        code: 'THREAD_CREATION_FAILED'
      }
    });
  }
});

// Send message to existing thread
router.post('/message', async (req, res) => {
  try {
    const { threadId, message } = req.body;
    
    if (!threadId || !message) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'threadId and message are required',
          code: 'INVALID_REQUEST'
        }
      });
    }

    const result = await sendMessage(threadId, message);
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
        code: 'MESSAGE_PROCESSING_FAILED'
      }
    });
  }
});

// Get chat history
// Check run status
router.get('/status/:threadId/:runId', async (req, res) => {
  try {
    const { threadId, runId } = req.params;
    const status = await checkRunStatus(threadId, runId);
    
    if (status.status === 'completed') {
      res.json({
        success: true,
        data: {
          status: status.status,
          response: status.response
        }
      });
    } else if (status.status === 'failed') {
      res.status(500).json({
        success: false,
        error: {
          message: status.error,
          code: 'RUN_FAILED'
        }
      });
    } else {
      res.json({
        success: true,
        data: {
          status: 'processing'
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
        code: 'STATUS_CHECK_FAILED'
      }
    });
  }
});

router.get('/history/:threadId', async (req, res) => {
  try {
    const { threadId } = req.params;
    const history = await getThreadHistory(threadId);
    res.json({
      success: true,
      data: { history }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
        code: 'HISTORY_RETRIEVAL_FAILED'
      }
    });
  }
});

export default router;
