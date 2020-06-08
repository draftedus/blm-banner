import devConfig from "./rollup.config";
import { uglify } from "rollup-plugin-uglify";

export default {
  ...devConfig,
  output: {
    format: "iife",
    file: "dist/blm.min.js",
  },
  plugins: [...devConfig.plugins, uglify()],
};
