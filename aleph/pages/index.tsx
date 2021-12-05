import { useDeno } from "aleph/react";
import React from "react";
import Logo from "~/components/logo.tsx";
import {
  useGlitch,
  useConstruct,
  GlitchOption,
  ConstructOption,
} from "https://raw.githubusercontent.com/ganyariya/text_glitch/main/mod.ts";

export default function Home() {
  const version = useDeno(() => Deno.version.deno);

  const [constructOption, _] = React.useState<Partial<ConstructOption>>({
    updateInterval: 100,
  });
  const [glitchText, setGlitchText] = useGlitch();
  const [constructText, setConstructText] = useConstruct(constructOption);

  React.useEffect(() => {
    setConstructText("This is Construct Text.");
    setGlitchText("This is Glitch Text.");
  }, []);

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo">
        <Logo />
      </p>
      <h1>{version}</h1>
      <h1>{constructText}</h1>
      <h1>{glitchText}</h1>
    </div>
  );
}
