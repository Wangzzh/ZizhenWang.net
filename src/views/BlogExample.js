import React from "react";
import { useState } from "react";
import Blog from "./Blog"

const BlogExample = (props) => {
  // Markdown
  const [markdown, setMarkdown] = useState("Markdown file unavailable.");

  var markdownPath = require("./BlogExample.md");
  fetch(markdownPath)
    .then((res) => res.text())
    .then((text) => setMarkdown(text));

  return (
    <Blog markdown={markdown}/>
  );
}

export default BlogExample;