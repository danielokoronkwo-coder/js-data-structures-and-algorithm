let express = require("express");
let app = express();

app.use(express.static("public"));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is live and listening to ${PORT}`);
});
