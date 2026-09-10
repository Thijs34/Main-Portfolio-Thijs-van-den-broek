import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const privacyPolicyRoutes = () => ({
  name: "privacy-policy-routes",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === "/prove-it-privacy/") req.url = "/prove-it-privacy/index.html";
      if (req.url === "/thirty-privacy/") req.url = "/thirty-privacy/index.html";
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === "/prove-it-privacy/") req.url = "/prove-it-privacy/index.html";
      if (req.url === "/thirty-privacy/") req.url = "/thirty-privacy/index.html";
      next();
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [privacyPolicyRoutes(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
