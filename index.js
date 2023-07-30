const express = require("express")
const app = express();
const PORT = 8000

app.get("/posts", (req, res) => {
    const data = [
      {
        title: "gaynoob1",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt magnam modi doloribus voluptatibus fugit veritatis itaque tenetur non quae atque, maxime quod officiis vel, nulla repudiandae ipsum laboriosam, est minus.",
        image: "https://tpc.googlesyndication.com/simgad/13217190589223325630",
      },
      {
        title: "gaynoob2",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt magnam modi doloribus voluptatibus fugit veritatis itaque tenetur non quae atque, maxime quod officiis vel, nulla repudiandae ipsum laboriosam, est minus.",
        image: "https://tpc.googlesyndication.com/simgad/13217190589223325630",
      },
      {
        title: "gaynoob3",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt magnam modi doloribus voluptatibus fugit veritatis itaque tenetur non quae atque, maxime quod officiis vel, nulla repudiandae ipsum laboriosam, est minus.",
        image: "https://tpc.googlesyndication.com/simgad/13217190589223325630",
      },
      {
        title: "gaynoob4",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt magnam modi doloribus voluptatibus fugit veritatis itaque tenetur non quae atque, maxime quod officiis vel, nulla repudiandae ipsum laboriosam, est minus.",
        image: "https://tpc.googlesyndication.com/simgad/13217190589223325630",
      },
    ];
    res.send(JSON.stringify(data));
  });

app.listen(PORT , () => {
    console.log(`Server on http://localhost:${PORT}`);
})