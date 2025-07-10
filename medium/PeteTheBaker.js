// Pete the Baker
// Write a function cakes(recipe, available) that returns the maximum number of cakes Pete can bake (integer).
// Each cake requires the ingredients listed in the recipe object. The available object contains the quantities of ingredients Pete has.
// If Pete cannot bake any cakes, return 0.

function cakes(recipe, available) {
  let cakes = Infinity;

  for (let ingredients in recipe) {
    if (!available[ingredients]) {
      return 0;
    }
    const possibleCake = Math.floor(
      available[ingredients] / recipe[ingredients]
    );
    cakes = Math.min(cakes, possibleCake);
  }

  return cakes;
}
