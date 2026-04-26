import nextVitals from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = [
  ...nextVitals,
  prettierConfig,
  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**"],
  },
];

export default eslintConfig;
