import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home(props) {
  const [filename, setFilename] = useState("untitled");
  const [contentEditable, setContentEditable] = useState(true);

  const [content, setContent] = useState("");

  function formatDoc(cmd, value = null) {
    if (value) {
      document.execCommand(cmd, false, value);
    } else {
      document.execCommand(cmd);
    }
  }
  function addLink() {
    const url = prompt("Insert url");
    formatDoc("createLink", url);
  }
  function addImage(url) {
    console.log("imageurl", url);
    formatDoc("insertImage", url);
  }

  const handleMouseEnter = () => {
    const links = document.querySelectorAll("#content a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        setContentEditable(false);
        link.setAttribute("target", "_blank");
      });
      link.addEventListener("mouseleave", () => {
        setContentEditable(true);
      });
    });
  };
  function handleFileChange(value) {
    console.log(value);
    if (value === "new") {
      setContent("");
      setFilename("untitled");
    } else if (value === "txt") {
      const blob = new Blob([content]);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${filename}.txt`;
      link.click();
    }
  }
  function handleContentChange(event) {
    setContent(event.target.innerHTML);
  }

  return (
    <div className="main_container">
      <Navbar
        className="navbar"
        addLink={addLink}
        addImage={addImage}
        formatDoc={formatDoc}
        setFilename={setFilename}
      />

      <div
        id="content"
        onMouseEnter={handleMouseEnter}
        contentEditable={contentEditable}
        onInput={handleContentChange}
        handleFileChange={handleFileChange}
      ></div>
    </div>
  );
}

export default Home;
