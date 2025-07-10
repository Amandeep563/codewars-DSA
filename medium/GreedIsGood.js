// Greed is Good
// Write a function score(dice) that calculates the total score for a dice game based on the following rules:
// - A set of three ones is 1000 points
// - A set of three numbers (other than ones) is worth 100 times the number (e.g., three fives is 500 points)
// - A one (that is not part of a set of three) is worth 100 points
// - A five (that is not part of a set of three) is worth 50 points
// - Everything else is worth 0 points

function score(dice) {
  const count = {};

  for (let die of dice) {
    count[die] = (count[die] || 0) + 1;
  }

  const tripleScore = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
  };

  const singleScore = {
    1: 100,
    5: 50,
  };

  let total = 0;

  for (let num in count) {
    const value = Number(num);
    const times = count[value];

    if (!(value in tripleScore) && !(value in singleScore)) continue;

    if (times >= 3) {
      total += tripleScore[value];

      const remaining = times - 3;

      if (singleScore[value]) {
        total += remaining * singleScore[value];
      }
    } else {
      if (singleScore[value]) {
        total += times * singleScore[value];
      }
    }
  }

  return total;
}
