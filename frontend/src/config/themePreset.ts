import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { brealPlugin } from "./themePlugin";
export const brealPreset: Config = {
  content: [],
  darkMode: "class",
  plugins: [brealPlugin, animatePlugin],
} satisfies Config;
