import { React } from "./deps.ts";

const useGlitch = () => {
  const [text, setText] = React.useState("hello");
  return [text, setText];
};

export { useGlitch };
