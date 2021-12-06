import { React } from "./deps.ts";
import { getRandomChar, getElapsed } from "./util.ts";
import type { ConstructOption } from "./type.ts";

const getConstructedChar = (
  char: string,
  isLeft: boolean,
  mutate: number
): string => {
  if (Math.random() <= mutate) return getRandomChar();
  if (isLeft) return char;
  else return getRandomChar();
};

const getConstructedText = (
  text: string,
  i: number,
  mutate: number
): string => {
  return [...new Array(text.length)]
    .map((_, j) => getConstructedChar(text[j], j < i, mutate))
    .join("");
};

const defualtOption: ConstructOption = {
  loop: true,
  loopInterval: 3000,
  forwardInterval: 250,
  updateInterval: 60,
  mutateProbability: 0.1,
  mutateAfterConstructed: true,
  mutateAfterProbability: 0.05,
};

const useConstruct = (
  setupText = "",
  option?: Partial<ConstructOption>
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [text, setText] = React.useState(setupText);
  const [constructed, setConstructed] = React.useState(false);
  const [constructedText, setConstructedText] = React.useState("");
  const [constructedDate, setConstructedDate] = React.useState(new Date());

  const useOption: ConstructOption = { ...defualtOption, ...option };

  React.useEffect(() => {
    const startDate = new Date();
    const clearId = setInterval(() => {
      if (constructed) {
        const elapsed = getElapsed(constructedDate, new Date());
        if (useOption.loop && useOption.loopInterval <= elapsed) {
          setConstructed(false);
          setConstructedText("");
        }
        if (useOption.mutateAfterConstructed) {
          setConstructedText(
            getConstructedText(
              text,
              text.length + 1,
              useOption.mutateAfterProbability
            )
          );
        }
        return;
      }

      const i = Math.floor(
        getElapsed(startDate, new Date()) / useOption.forwardInterval
      );
      setConstructedText(() => {
        if (text.length < i) {
          setConstructed(true);
          setConstructedDate(new Date());
          return text;
        }
        return getConstructedText(text, i, useOption.mutateProbability);
      });
    }, useOption.updateInterval);
    return () => clearInterval(clearId);
  }, [text, constructed, constructedDate, option]);

  return [constructedText, setText];
};

export { useConstruct };
