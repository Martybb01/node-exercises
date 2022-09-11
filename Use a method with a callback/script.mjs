import * as fs from "node:fs";

fs.writeFile("./prova.txt", "Ho usato il metodo writeFile!", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Controlla il file prova.txt");
});
