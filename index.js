//npm install express dotenv body-parser
const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin , X-Requested-With, Content-Type, Accept , Authorization "
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    return res.status(200).json({});
  }
  next();
});

app.get("/getTasks", (req, res) => {
  let ti = setTimeout(() => {
    res.status(200).json({
      data: [
        {
          task: "task 1 description no one need to know what it is",
          type: 3,
        },
        {
          task: "task 2 description no one need to know what it is",
          type: 1,
        },
        {
          task: "task 3 description no one need to know what it is",
          type: 2,
        },
        {
          task: "task 4 description no one need to know what it is , just wait ",
          type: 4,
        },
        {
          task: "task 4 description no one need to know what it is , just wait ",
          type: 4,
        },
      ],
    });
  }, 3000);
});

app.get("/getCards", (req, res) => {
  return res.status(200).json({
    data: [
      {
        companyLogo: "/static/images/avatar/1.png",
        avatars: ["/static/images/avatar/1.png", "/static/images/avatar/1.png"],
        progress: 70,
        color: "#88a8f2",
      },
      {
        companyLogo: "/static/images/avatar/1.png",
        avatars: [
          "/static/images/avatar/1.png",
          "/static/images/avatar/1.png",
          "/static/images/avatar/1.png",
          "/static/images/avatar/1.png",
        ],
        progress: 40,
        color: "#f58484",
      },
    ],
  });
});

app.get("/getProjects", (req, res) => {
  let ti = setTimeout(() => {
    return res.status(200).json({
      data: [
        {
          image: "/static/images/avatar/1.png",
          name: "company 1",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "In Progress",
        },
        {
          image: "/static/images/avatar/1.png",
          name: "company 2",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "Open",
        },
        {
          image: "/static/images/avatar/1.png",
          name: "company 3",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "In Progress",
        },
        {
          image: "/static/images/avatar/1.png",
          name: "company 4",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "Open",
        },
        {
          image: "/static/images/avatar/1.png",
          name: "company 3",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "In Progress",
        },
        {
          image: "/static/images/avatar/1.png",
          name: "company 4",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "Open",
        },
      ],
    });
  }, 3500);
});

app.get("/getAppointments", (req, res) => {
  return res.status(200).json({
    data: [
      {
        start: 8.5,
        end: 9.5,
        dur: 60,
        top: 160,
        desc: "some description about appointment",
        color: "#88a8f2",
        borderColor: "#1b3164",
      }, //60 px for each hour
      {
        start: 12,
        end: 14,
        dur: 120,
        top: 365,
        desc: "some description about appointment",
        color: "#d677e2",
        color: "#e76f6f",
        borderColor: "#862484",
      },
    ],
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server running on PORT 5000");
});