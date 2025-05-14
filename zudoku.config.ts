import type { ZudokuConfig } from "zudoku";
import { SwaggerPage } from "./src/swaggerPage"
import { createElement } from "react";

const config: ZudokuConfig = {
  page: {
    pageTitle: "Keiza Capital Docs",
    logoUrl: "https://www.keizacapital.com.br/keiyza-capital-logo-white.png"
  },
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
    { id: "swagger-api", label: "Swagger API Reference" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/introduction", "docs/authentication", "docs/webhooks", "docs/smartContracts"],
      },
    ],
  },
  customPages: [
    {
      path: "/swagger-api",
      element: createElement(SwaggerPage)
    }
  ],
  redirects: [{ from: "/", to: "/docs/introduction" }],
  apis: {
    type: "file",
    input: "./apis/openapi.json",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  }
};

export default config;
