import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  // ✅ Ignore non-app code & build artifacts
  globalIgnores([
    "scripts/**",
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // ✅ Next.js recommended rule sets
  ...nextVitals,
  ...nextTs,
]);