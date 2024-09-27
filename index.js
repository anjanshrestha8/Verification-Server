const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());

app.get("/", (request,response) => {
  return response.send("Api is working.....");
});
app.post("/", (request, response) => {
  const code = request.body.code;
  if (code.length !== 6 || code[5] === "7") {
    return response.status(400).json({ message: "Validation error" });
  } else {
    return response.status(200).json({ message: "Successful" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running at :", PORT);
});
