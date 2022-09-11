function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const ageResults = async () => {
  try {
    const tinaAwait = await luckyDraw("tina");
    console.log(tinaAwait);
  } catch (err) {
    console.error(err);
  }
  try {
    const jorgeAwait = await luckyDraw("jorge");
    console.log(jorgeAwait);
  } catch (err) {
    console.error(err);
  }
  try {
    const julienAwait = await luckyDraw("julien");
    console.log(julienAwait);
  } catch (err) {
    console.error(err);
  }
};

// const ageResults = async () => {
//   try {
//     const results = await Promise.all([
//       await luckyDraw("tina"),
//       await luckyDraw("jorge"),
//       await luckyDraw("julien"),
//     ]);

//     console.log("results:", results);
//   } catch (err) {
//     console.error(err);
//   }
// };

ageResults();
