import "prism-themes/themes/prism-dracula.css";
import "prismjs/plugins/command-line/prism-command-line.css";

import * as React from "react";

// eslint-disable-next-line import/prefer-default-export
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Inter var
    // eslint-disable-next-line react/jsx-filename-extension
    <link
      rel="preload"
      href="static/fonts/Inter-roman.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    // Alfa Slab One
    <link
      rel="preload"
      href="static/fonts/AlfaSlabOne-Regular.ttf"
      as="font"
      type="ttf"
      crossOrigin="anonymous"
      key="alfaFont"
    />,
  ]);
};

