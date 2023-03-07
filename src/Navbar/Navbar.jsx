import React, { useState, useRef } from "react";
import "./Navbar.css";
// Icons
import RedoTwoToneIcon from "@mui/icons-material/RedoTwoTone";
import UndoTwoToneIcon from "@mui/icons-material/UndoTwoTone";
import FormatBoldTwoToneIcon from "@mui/icons-material/FormatBoldTwoTone";
import FormatItalicTwoToneIcon from "@mui/icons-material/FormatItalicTwoTone";
import FormatUnderlinedTwoToneIcon from "@mui/icons-material/FormatUnderlinedTwoTone";
import StrikethroughSTwoToneIcon from "@mui/icons-material/StrikethroughSTwoTone";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddLinkSharpIcon from "@mui/icons-material/AddLinkSharp";
import LinkOffSharpIcon from "@mui/icons-material/LinkOffSharp";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import FormatIndentDecreaseOutlinedIcon from "@mui/icons-material/FormatIndentDecreaseOutlined";
import FormatIndentIncreaseOutlinedIcon from "@mui/icons-material/FormatIndentIncreaseOutlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import BrushIcon from "@mui/icons-material/Brush";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
function Navbar(props) {
  const { formatDoc } = props;
  const { handleFileChange } = props;
  const [bgColor, setbgColor] = useState("#000");
  const [color, setColor] = useState("#000");
  const fontSize = { fontSize: "18px" };
  const backgroundRef = useRef();
  const colorRef = useRef();
  const getFileRef = useRef();
  function getColorRef() {
    colorRef.current.click();
  }
  function getBackgroundRef() {
    backgroundRef.current.click();
  }
  function handlePrint() {
    window.print();
  }
  function getFile() {
    getFileRef.current.click();
  }
  function addImage() {
    // const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      img.className = "UploadedImageStyling";
      img.contentEditable = false;
      const range = window.getSelection().getRangeAt(0);
      range.insertNode(img);
      range.collapse(false);
    };
    // };
  }
  return (
    <div className="navbar_container">
      <div className="toolkit">
        <div class="head">
          <button title="undo">
            <UndoTwoToneIcon
              style={fontSize}
              onClick={() => formatDoc("undo")}
            />
          </button>
          <button title="redo">
            <RedoTwoToneIcon
              style={fontSize}
              onClick={() => formatDoc("redo")}
            />
          </button>
          <button title="print">
            <PrintOutlinedIcon
              style={fontSize}
              onClick={() => window.print()}
            />
          </button>
          <select onChange={(e) => formatDoc("formatBlock", e.target.value)}>
            <option value="" selected="" hidden="" disabled="">
              Format
            </option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="h5">Heading 5</option>
            <option value="h6">Heading 6</option>
            <option value="p">Paragraph</option>
          </select>
          <select
            onChange={(e) => {
              formatDoc("fontSize", e.target.value);
            }}
          >
            <option value="" selected="" hidden="" disabled="">
              Font size
            </option>
            <option value="1">Extra small</option>
            <option value="2">Small</option>
            <option value="3">Regular</option>
            <option value="4">Medium</option>
            <option value="5">Large</option>
            <option value="6">Extra Large</option>
            <option value="7">Big</option>
          </select>
        </div>

        <div className="Icons__container ">
          <select onChange={(e) => formatDoc("fontname", e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="helvetica">helvetica</option>
            <option value="Consolas">Consolas</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Impact">Impact</option>
            <option value="MS Sans Serif">MS Sans Serif</option>
            <option value="Segoe UI">Segoe UI</option>
            <option value="Calibri">Calibri</option>
            <option value="Fixedsys">Fixedsys</option>
          </select>

          <button title="bold">
            <FormatBoldTwoToneIcon
              style={fontSize}
              onClick={() => formatDoc("bold")}
            />
          </button>
          <button title="italic">
            <FormatItalicTwoToneIcon
              style={fontSize}
              onClick={() => formatDoc("italic")}
            />
          </button>
          <button title="underline">
            <FormatUnderlinedTwoToneIcon
              style={fontSize}
              onClick={() => formatDoc("underline")}
            />
          </button>
          <button title="Align Right">
            <StrikethroughSTwoToneIcon
              style={fontSize}
              onClick={() => formatDoc("strikeThrough")}
            />
          </button>
          <button title="Align Left">
            <FormatAlignLeftIcon
              style={fontSize}
              onClick={() => formatDoc("justifyLeft")}
            />
          </button>
          <button title="Align center">
            <FormatAlignCenterIcon
              style={fontSize}
              onClick={() => formatDoc("justifyCenter")}
            />
          </button>
          <button title="">
            <FormatAlignRightIcon
              style={fontSize}
              onClick={() => formatDoc("justifyRight")}
            />
          </button>
          <button title="align justify">
            <FormatAlignJustifyIcon
              style={fontSize}
              onClick={() => formatDoc("justifyFull")}
            />
          </button>
          <button title="Numbered List">
            <FormatListNumberedIcon
              style={fontSize}
              onClick={() => formatDoc("insertOrderedList")}
            />
          </button>
          <button title="Bullet List">
            <FormatListBulletedIcon
              style={fontSize}
              onClick={() => formatDoc("insertUnorderedList")}
            />
          </button>
          <div class="color">
            <span>
              <BrushIcon
                onClick={getColorRef}
                style={{ color: `${color}`, fontSize: "18px" }}
              />
            </span>
            <input
              style={{ display: "none" }}
              ref={colorRef}
              type="color"
              onChange={(e) => {
                formatDoc("foreColor", e.target.value),
                  setColor(e.target.value);
              }}
            />
          </div>
          <div class="color">
            <span>
              <FormatColorFillIcon
                onClick={getBackgroundRef}
                style={{ color: `${bgColor}`, fontSize: "18px" }}
              />
            </span>
            <input
              style={{ display: "none" }}
              // hidden
              ref={backgroundRef}
              type="color"
              onChange={(e) => {
                formatDoc("backColor", e.target.value),
                  setbgColor(e.target.value);
              }}
            />
          </div>
          <button title="Decrease Indent">
            <FormatIndentDecreaseOutlinedIcon
              style={fontSize}
              onClick={() => formatDoc("outdent")}
            />
          </button>
          <button title="Increase Indent">
            <FormatIndentIncreaseOutlinedIcon
              style={fontSize}
              onClick={() => formatDoc("indent")}
            />
          </button>
          <button title="add Image">
            <AddPhotoAlternateOutlinedIcon style={fontSize} onClick={getFile} />
            <input type="file" ref={getFileRef} hidden onChange={addImage} />
          </button>
          <button title="link">
            <AddLinkSharpIcon style={fontSize} onClick={props.addLink} />
          </button>
          <button title="unlink">
            <LinkOffSharpIcon
              style={fontSize}
              onClick={() => formatDoc("unlink")}
            />
          </button>
          <button title="cancle formatting">
            <CancelTwoToneIcon
              style={fontSize}
              onClick={() => formatDoc("removeFormat")}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
