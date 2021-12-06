import { React } from "./deps.ts";
import { getRandomChar } from "./util.ts";
import type { GlitchOption } from "./type.ts";

const getGlitchedChar = (
  char: string,
  mutate: number,
  deleteMutate: number,
  addMutate: number
): string => {
  const r = Math.random();
  if (r <= mutate) return getRandomChar();
  if (r <= mutate + deleteMutate) return "";
  if (r <= mutate + deleteMutate + addMutate) {
    if (Math.random() <= mutate) return getRandomChar() + getRandomChar();
    else return char + char;
  }
  return char;
};

const getGlitchedText = (
  text: string,
  mutate: number,
  deleteMutate: number,
  addMutate: number
): string => {
  return [...new Array(text.length)]
    .map((_, j) => getGlitchedChar(text[j], mutate, deleteMutate, addMutate))
    .join("");
};

const defualtOption: GlitchOption = {
  updateInterval: 75,
  mutate: 0.05,
  deleteMutate: 0.005,
  addMutate: 0.005,
};

const useGlitch = (
  setupText = "",
  option?: Partial<GlitchOption>
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [text, setText] = React.useState(setupText);
  const [glitchedText, setGlitchedText] = React.useState("");

  const useOption: GlitchOption = { ...defualtOption, ...option };

  React.useEffect(() => {
    const clearId = setInterval(() => {
      setGlitchedText(
        getGlitchedText(
          text,
          useOption.mutate,
          useOption.deleteMutate,
          useOption.addMutate
        )
      );
    }, useOption.updateInterval);
    return () => clearInterval(clearId);
  }, [text, useOption]);

  return [glitchedText, setText];
};

export { useGlitch };
