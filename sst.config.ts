/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "turbo-nub",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const secret = new sst.Secret("MySecret");
    const test = new sst.aws.Function("Test", {
      handler: "packages/core/src/test.handler",
      url: true,
      link: [secret],
    });
    return {
      test: test.url,
    };
  },
});
