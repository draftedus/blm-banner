import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    format: "iife",
    file: "dist/blm.js",
  },
  plugins: [
    resolve({ browser: true }),
    typescript({ lib: ["esnext", "dom"], target: "es5" }),
  ],
};
