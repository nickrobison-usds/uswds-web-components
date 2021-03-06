import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "uswds-web-components",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme",
      dir: "docs",
      footer: ""
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
         "uswds/src/stylesheets/packages/_required.scss"
      ]
    })
  ],
  testing: {
    testPathIgnorePatterns: ["uswds/"]
  }
};
