import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import dotenv from "dotenv";
// import dotenvExpand from "dotenv-expand";

// dotenv.config();
// const env = dotenvExpand(dotenv.config()).parsed;

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@helpers": path.resolve(__dirname, "./src/helpers"),
        "@containers": path.resolve(__dirname, "./src/containers"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },
    plugins: [react()],
    // define: {
    //   "process.env": env,
    // },
  };
});
