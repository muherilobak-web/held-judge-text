import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The cloth hangs between two trees, swaying, and your body lies in its curve. " +
  "It presses along your back, and you give it all your weight. " +
  "Above, the leaves move. " +
  "The trees were old before you, and they hold you yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
