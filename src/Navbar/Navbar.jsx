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
function Navbar(props) {
  const { formatDoc } = props;
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [color, setColor] = useState("");

  const showCode = useRef();

  // props.handleColor(color);

  return (
    <div className="main__container">
      <div class="head">
        <input
          type="text"
          placeholder="Filename"
          // value={filename}
          onChange={(e) => props.setFilename(e.target.value)}
          id="filename"
        />
        <select onChange={(e) => props.handleFileChange(e.target.value)}>
          // ; this.selectedIndex=0"
          <option value="" selected="" hidden="" disabled="">
            File
          </option>
          <option value="new">New file</option>
          <option value="txt">Save as txt</option>
          <option value="pdf">Save as pdf</option>
        </select>
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
        <div class="color">
          <span>Color</span>
          <input
            type="color"
            onChange={(e) => formatDoc("foreColor", e.target.value)}
          />
        </div>
        <div class="color">
          <span>Background</span>
          <input
            type="color"
            onChange={(e) => formatDoc("backColor", e.target.value)}
          />
        </div>
      </div>

      <div className="Icons__container">
        <button title="undo">
          <UndoTwoToneIcon onClick={() => formatDoc("undo")} />
        </button>
        <button title="redo">
          <RedoTwoToneIcon onClick={() => formatDoc("redo")} />
        </button>
        <button title="bold">
          <FormatBoldTwoToneIcon onClick={() => formatDoc("bold")} />
        </button>
        <button title="italic">
          <FormatItalicTwoToneIcon onClick={() => formatDoc("italic")} />
        </button>
        <button title="underline">
          <FormatUnderlinedTwoToneIcon onClick={() => formatDoc("underline")} />
        </button>
        <button title="Align Right">
          <StrikethroughSTwoToneIcon
            onClick={() => formatDoc("strikeThrough")}
          />
        </button>
        <button title="Align Left">
          <FormatAlignLeftIcon onClick={() => formatDoc("justifyLeft")} />
        </button>
        <button title="Align center">
          <FormatAlignCenterIcon r onClick={() => formatDoc("justifyCenter")} />
        </button>
        <button title="">
          <FormatAlignRightIcon onClick={() => formatDoc("justifyRight")} />
        </button>
        <button title="align justify">
          <FormatAlignJustifyIcon onClick={() => formatDoc("justifyFull")} />
        </button>
        <button title="Numbered List">
          <FormatListNumberedIcon
            onClick={() => formatDoc("insertOrderedList")}
          />
        </button>
        <button title="Bullet List">
          <FormatListBulletedIcon
            onClick={() => formatDoc("insertUnorderedList")}
          />
        </button>
        <button title="Decrease Indent">
          <FormatIndentDecreaseOutlinedIcon
            onClick={() => formatDoc("outdent")}
          />
        </button>
        <button title="Increase Indent">
          <FormatIndentIncreaseOutlinedIcon
            onClick={() => formatDoc("indent")}
          />
        </button>
        <button title="add Image">
          <AddPhotoAlternateOutlinedIcon onClick={props.addImage} />
        </button>
        <button title="link">
          <AddLinkSharpIcon onClick={props.addLink} />
        </button>
        <button title="unlink">
          <LinkOffSharpIcon onClick={() => formatDoc("unlink")} />
        </button>
        <button title="look code">
          <CodeTwoToneIcon onClick={props.handleShowCodeClick} />
        </button>
        <button title="cancle formatting">
          <CancelTwoToneIcon onClick={() => formatDoc("removeFormat")} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
