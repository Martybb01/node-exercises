const { writeFile } = require("fs");

writeFile("./prova.txt", "Ho usato il metodo writeFile!", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Controlla il file prova.txt");
});
