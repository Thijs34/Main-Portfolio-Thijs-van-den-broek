import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const privacyPaths = new Set([
  "/prove-it-privacy/",
  "/thirty-privacy/",
  "/cuberush-privacy/",
]);

const rewritePrivacyPath = (req) => {
  if (!req.url) return;
  const queryIndex = req.url.indexOf("?");
  const pathname = queryIndex === -1 ? req.url : req.url.slice(0, queryIndex);
  if (!privacyPaths.has(pathname)) return;
  const query = queryIndex === -1 ? "" : req.url.slice(queryIndex);
  req.url = `${pathname}index.html${query}`;
};

const privacyPolicyRoutes = () => ({
  name: "privacy-policy-routes",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      rewritePrivacyPath(req);
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      rewritePrivacyPath(req);
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
