import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    format: "iife",
    file: "dist/blm.js",
  },
  plugins: [
    commonjs({ transformMixedEsModules: true }),
    resolve({ browser: true }),
    typescript({ lib: ["esnext", "dom"], target: "es5" }),
  ],
};
