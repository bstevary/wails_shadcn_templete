import type { Config } from "tailwindcss";
import { brealPreset } from "./src/config/themePreset.ts";
const config = {
  presets: [brealPreset],
  content: ["./src/**/**/*.{ts,tsx}", "./public/index.html"],
} satisfies Config;
export default config;
