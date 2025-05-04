/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "block-no-empty": true,
    "declaration-empty-line-before": false,
    "value-keyword-case": false,
    "color-function-notation": false,
    "alpha-value-notation": false,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": null,
    "lightness-notation": {
      string: "percentage" | "number",
    },
    "hue-degree-notation": {
      string: "angle" | "number",
    },
  },
};
