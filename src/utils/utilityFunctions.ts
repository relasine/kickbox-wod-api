export const getRandomElement = (array: any[]): any => {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * array.length);
  // Use array destructuring to directly extract the random element
  const randomElement = array[randomIndex];
  return randomElement;
};
