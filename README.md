# 🦕 Text Glitch

[![deno.land](https://img.shields.io/badge/deno-%5E1.13.2-green?logo=deno)](https://deno.land)
[![LICENSE](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)
[![tag](https://img.shields.io/github/v/tag/ganyariya/vsexclude?sort=semver)](https://github.com/ganyariya/vsexclude/tags)

<p align="center">
  <img width="400" src="./aleph/public/glitch.gif">
</p>

Glitch Text Library for Deno & React!

### 🦕 Demo

[Sample Aleph Site](http://text-glitch.vercel.app/)

[Sample Aleph Project (Sample Code)](./aleph)

### 🦕 Specs

#### useGlitch

```ts
type GlitchOption = {
  updateInterval: number; // (ms)
  mutate: number; // (0.0~1.0) Profability mutaiting for each character
  deleteMutate: number; // (0.0~1.0) Probability deleting for each character
  addMutate: number; // (0.0~1.0) Probability adding for each character
};
```

#### useConstruct

```ts
type ConstructOption = {
  loop: boolean;
  loopInterval: number; // (ms) waiting time for next effect
  forwardInterval: number; // (ms) moving time to next character
  updateInterval: number; // (ms)
  mutateProbability: number; // (0.0~1.0) Profability mutaiting for each character
  mutateAfterConstructed: boolean; // Even after constructed, mutating?
  mutateAfterProbability: number; // (0.0~1.0) Profability mutaiting for each character after constructed
};
```

### 🦕 Extracted Code

```ts
function Sample() {
  const [glitchText, setGlitchText] = useGlitch("Text Glitch Library", {
    mutate: 0.2,
  });
  return <div>{glitchText}</div>;
}
```

### 🦕 Contribute

🦕🦕🦕 Welcome for your any PRs! 🦕🦕🦕

### 🦕 TODO

- [ ] implement other text effect
- [ ] deal with Node.js runtime (compile to js, jsx)
