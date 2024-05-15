import { defineConfig } from "drizzle-kit";

export default defineConfig({
  driver: "aws-data-api",
  dialect: "postgresql",
  dbCredentials: {
    database: "",
    secretArn: "",
    resourceArn: "",
  },
  schema: ["./src/schema/**/*.ts"],
  out: "./src/migrations",
});
