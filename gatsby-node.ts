import * as path from "path";

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// @ts-ignore
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
};
// @ts-ignore
export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".png"], // Adjust these extensions according to your project needs
    },
  });
};
