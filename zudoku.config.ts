import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  page: {
    pageTitle: "Keiza Capital Docs",
    logoUrl: "https://www.keizacapital.com.br/keiyza-capital-logo-white.png"
  },
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/introduction", "docs/authentication", "docs/example"],
      },
    ],
  },
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
