const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

// parse urlencoded request body
app.use(bodyParser.urlencoded({ extended: false }));

// parse json request body
app.use(bodyParser.json({ limit: '50mb' }));

**********************************************************

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
        companyLogo: "https://www.designevo.com/res/templates/thumb_small/yellow-circle-and-social-network.webp",
        avatars: ["https://mir-s3-cdn-cf.behance.net/projects/404/73c56092222591.Y3JvcCwxNzk4LDE0MDYsMTQ2LDA.jpg", "https://mir-s3-cdn-cf.behance.net/projects/404/73c56092222591.Y3JvcCwxNzk4LDE0MDYsMTQ2LDA.jpg"],
        progress: 70,
        color: "#88a8f2",
      },
      {
        companyLogo: "https://www.designevo.com/res/templates/thumb_small/yellow-circle-and-social-network.webp",
        avatars: [
          "https://mir-s3-cdn-cf.behance.net/projects/404/73c56092222591.Y3JvcCwxNzk4LDE0MDYsMTQ2LDA.jpg",
          "https://mir-s3-cdn-cf.behance.net/projects/404/73c56092222591.Y3JvcCwxNzk4LDE0MDYsMTQ2LDA.jpg",
          "https://mir-s3-cdn-cf.behance.net/projects/404/73c56092222591.Y3JvcCwxNzk4LDE0MDYsMTQ2LDA.jpg",
          "https://mir-s3-cdn-cf.behance.net/projects/404/73c56092222591.Y3JvcCwxNzk4LDE0MDYsMTQ2LDA.jpg",
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
          image: "https://www.designevo.com/res/templates/thumb_small/yellow-circle-and-social-network.webp",
          name: "company 1",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "In Progress",
        },
        {
          image: "https://www.designevo.com/res/templates/thumb_small/yellow-circle-and-social-network.webp",
          name: "company 2",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "Open",
        },
        {
          image: "https://www.designevo.com/res/templates/thumb_small/yellow-circle-and-social-network.webp",
          name: "company 3",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "In Progress",
        },
        {
          image: "https://www.designevo.com/res/templates/thumb_small/yellow-circle-and-social-network.webp",
          name: "company 4",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "Open",
        },
        {
          image: "https://www.designevo.com/res/templates/thumb_small/yellow-circle-and-social-network.webp",
          name: "company 3",
          created: "Thu, 26 Oct",
          reporter: "sleman",
          due: "Thu, 26 Oct",
          stats: "In Progress",
        },
        {
          image: "https://www.designevo.com/res/templates/thumb_small/yellow-circle-and-social-network.webp",
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
