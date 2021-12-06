import React from "react";
import Logo from "~/components/logo.tsx";
import {
  useGlitch,
  useConstruct,
  GlitchOption,
  ConstructOption,
} from "https://raw.githubusercontent.com/ganyariya/text_glitch/main/mod.ts";

export default function Home() {
  const [constructOption, _] = React.useState<Partial<ConstructOption>>({
    updateInterval: 100,
  });
  const [glitchText, setGlitchText] = useGlitch("Text Glitch Library");
  const [constructText, setConstructText] = useConstruct(
    "Sample Aleph Project",
    constructOption
  );

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo">
        <Logo />
      </p>
      <h1 style={{ marginTop: "100px" }}>{glitchText}</h1>
      <br />
      <a href="https://github.com/ganyariya/text_glitch/blob/main/aleph/pages/index.tsx">
        <h1>{constructText}</h1>
      </a>
    </div>
  );
}
