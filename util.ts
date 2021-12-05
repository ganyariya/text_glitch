const materials = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "[",
  "{",
  "]",
  "}",
  ";",
  "/",
  "\\",
  "?",
  ",",
  "<",
  ">",
];

const getRandomChar = (): string => {
  return materials[Math.floor(Math.random() * materials.length)];
};

const getElapsed = (start: Date, now: Date): number => {
  return now.getTime() - start.getTime();
};

export { getRandomChar, getElapsed };
