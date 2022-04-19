import React from "react";
import { useState } from "react";
import NavHeaderNotes from "../../../components/navigation/NavHeaderNotes";
import Blog from "../../../views/Blog";

const RotatingGlobe = (props) => {
  // Markdown
  const [markdown, setMarkdown] = useState("Markdown file unavailable.");

  var markdownPath = require("./RotatingGlobe.md");
  fetch(markdownPath)
    .then((res) => res.text())
    .then((text) => setMarkdown(text));

  return (
    <>
      <NavHeaderNotes/>
      <Blog 
        markdown={markdown}
        title="Rotating Globe"
        banner="/notes/soft/live2d/RotatingGlobe/globe.png"
      />
    </>
  );
}

export default RotatingGlobe;