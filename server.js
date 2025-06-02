// server.js
const express = require('express');
const bodyParser = require('body-parser');
const tool = require('./playwright-lite');

const app = express();
app.use(bodyParser.json());

app.post('/execute', async (req, res) => {
  const { toolName, args } = req.body;
  try {
    if (!tool[toolName]) {
      return res.status(400).send({ error: `Unknown tool: ${toolName}` });
    }
    const result = await tool[toolName](...args);
    res.send({ result });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MCP Server running on http://localhost:${PORT}`);
});