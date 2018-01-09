import express from 'express';

const app = express();

app.listen(3000, _ => {
  console.log("server is starting...");
})