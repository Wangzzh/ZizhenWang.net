import React from "react";
import { useState } from "react";
import Blog from "../../../../views/Blog";

const ColorSpace = (props) => {
  // Markdown
  const [markdown, setMarkdown] = useState("Markdown file unavailable.");

  var markdownPath = require("./ColorSpace.md");
  fetch(markdownPath)
    .then((res) => res.text())
    .then((text) => setMarkdown(text));

  return (
    <Blog 
      markdown={markdown}
      title="Color Space"
      banner="/test_banner.png"
    />
  );
}

export default ColorSpace;