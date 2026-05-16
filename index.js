const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());

// Sample data
let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
];

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Get all items
app.get("/items", (req, res) => res.json(items));

// Get item by id
app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// Create item
app.post("/items", (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Delete item
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(i => i.id !== id);
  res.json({ message: `Item ${id} deleted` });
});

// Export for Lambda
module.exports.handler = serverless(app);

// Local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}



