import React from "react";
import { useState } from "react";
import Blog from "./Blog"

const Education = (props) => {
  // Markdown
  const [markdown, setMarkdown] = useState("Markdown file unavailable.");

  var markdownPath = require("./Education.md");
  fetch(markdownPath)
    .then((res) => res.text())
    .then((text) => setMarkdown(text));

  return (
    <Blog markdown={markdown}/>
  );
}

export default Education;