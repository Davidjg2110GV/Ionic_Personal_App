/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "outline-variant": "#45464d",
        "on-surface": "#d4e4fa",
        "tertiary-fixed": "#d8e3fb",
        "tertiary-container": "#0c1829",
        "secondary": "#e9c349",
        "tertiary-fixed-dim": "#bcc7de",
        "on-background": "#d4e4fa",
        "on-primary-fixed": "#131b2e",
        "surface-container-low": "#0d1c2d",
        "surface-container-highest": "#273647",
        "on-secondary-fixed": "#241a00",
        "error-container": "#93000a",
        "on-tertiary-fixed": "#111c2d",
        "on-tertiary-container": "#768197",
        "secondary-container": "#af8d11",
        "surface-dim": "#051424",
        "on-secondary": "#3c2f00",
        "primary-container": "#0f172a",
        "primary-fixed-dim": "#bec6e0",
        "surface-container-lowest": "#010f1f",
        "surface-container-high": "#1c2b3c",
        "error": "#ffb4ab",
        "on-primary-container": "#798098",
        "inverse-on-surface": "#233143",
        "on-error-container": "#ffdad6",
        "surface-variant": "#273647",
        "on-tertiary": "#263143",
        "on-tertiary-fixed-variant": "#3c475a",
        "primary": "#bec6e0",
        "on-primary": "#283044",
        "on-secondary-fixed-variant": "#574500",
        "secondary-fixed": "#ffe088",
        "on-surface-variant": "#c6c6cd",
        "on-primary-fixed-variant": "#3f465c",
        "surface": "#051424",
        "outline": "#909097",
        "tertiary": "#bcc7de",
        "surface-tint": "#bec6e0",
        "surface-container": "#122131",
        "secondary-fixed-dim": "#e9c349",
        "primary-fixed": "#dae2fd",
        "surface-bright": "#2c3a4c",
        "inverse-surface": "#d4e4fa",
        "inverse-primary": "#565e74",
        "on-secondary-container": "#342800",
        "on-error": "#690005",
        "background": "#051424"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "stack-lg": "32px",
        "stack-md": "16px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "stack-sm": "8px",
        "section-padding": "120px",
        "container-max": "1280px"
      },
      "fontFamily": {
        "display-lg": ["Playfair Display", "serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "headline-md": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"]
      },
      "fontSize": {
        "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "300" }],
        "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "300" }],
        "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "display-lg-mobile": ["40px", { "lineHeight": "1.2", "fontWeight": "700" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
