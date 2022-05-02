let express = require("express");
const bodyParser = require("body-parser");
let app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 8080;
app.listen(PORT, () => {
	console.log(`server is live and listening to ${PORT}`);
});
