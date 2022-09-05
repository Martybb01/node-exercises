const figlet = require("figlet");

// console.log(figlet.fontsSync());

figlet.text(
  "Coding",
  {
    font: "Dr Pepper",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 90,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong");
      console.log(err);
      return;
    }
    console.log(data);
  }
);
