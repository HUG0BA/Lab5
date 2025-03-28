import {
    chatBackground,
    chatContainer,
    chatHeader,
    chatArea,
    chatInputContainer,
    chatInputField,
    chatInputButton,
} from "./html.js";

const style = document.createElement("style");
style.innerHTML = `
    .chat-bubble {
        margin: 16px 32px;
        color: white;
        background-color: #070c3a;
        padding: 16px;
        border-radius: 16px;
        border: solid 3px #6a6fff;
        box-shadow: 5px 5px 1px #6a6fff;
    }

    .chat-bubble h4 {
        font-family: sans-serif;
        margin: 0;
        color: white;
    }

    .chat-bubble p {
        font-family: sans-serif;
        margin: 8px 0 0 0;;
        color: white;
    }

`;
document.head.appendChild(style);

chatBackground.style.height = "100vh";
chatBackground.style.width = "100vw";
chatBackground.style.backgroundImage = "radial-gradient(#565bd6, #12124f)";
chatBackground.style.display = "flex";
chatBackground.style.justifyContent = "center";
chatBackground.style.alignItems = "center";
chatBackground.style.flexDirection = "column";

chatHeader.style.height = "10%";
chatHeader.style.margin = "0";
chatHeader.style.padding = "16px";
chatHeader.style.color = "white";
chatHeader.style.paddingBottom = "0px";
chatHeader.style.textAlign = "center";

chatArea.style.height = "450px";
chatArea.style.overflowY = "scroll";

chatInputContainer.style.height = "10%";
chatInputContainer.style.padding = "16px 32px";
chatInputContainer.style.display = "flex";
chatInputContainer.style.justifyContent = "flex-start";
chatInputContainer.style.alignItems = "center";
chatInputContainer.style.flexDirection = "row";

chatInputField.style.height = "70%";
chatInputField.style.width = "70%";
chatInputField.style.borderRadius = "16px";

chatInputButton.style.height = "75%";
chatInputButton.style.width = "20%";
chatInputButton.style.marginLeft = "4%";
chatInputButton.style.borderRadius = "16px";

chatContainer.style.backgroundColor = "#070c3a";
chatInputContainer.style.backgroundColor = "#070c3a";
