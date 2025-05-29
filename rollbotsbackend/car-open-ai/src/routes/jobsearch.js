import express from 'express';
import yaml from 'js-yaml';
import fs from 'fs';

const router = express.Router();

// Load YAML once at startup
const yamlData = yaml.load(fs.readFileSync('Asian_jobs.yaml', 'utf8'));

// Example endpoint for JobStreet Malaysia
router.get('/jobstreet-my/search', (req, res) => {
  try {
    const example = yamlData.paths['/jobstreet-my/search'].get.responses['200'].content['application/json'].example;
    res.json(example);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
        code: 'YAML_LOOKUP_FAILED'
      }
    });
  }
});

// You can add similar endpoints for other platforms...

export default router;