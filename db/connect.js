const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://zuragagnidze50:fagLdp9gi1Ruk13G@taskmanagerexpress.ad4da.mongodb.net/task-manager?retryWrites=true&w=majority&appName=TaskManagerExpress";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("CONNECTED TO DATABASE..."))
  .catch((err) => console.log("ERROR: ", err));
