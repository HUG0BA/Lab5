export const chatBackground = document.createElement("div");

export const chatContainer = document.createElement("div");

export const chatHeader = document.createElement("h1");

export const chatArea = document.createElement("main");

export const chatInputContainer = document.createElement("div");

export const chatInputField = document.createElement("input");

export const chatInputButton = document.createElement("button");

export const chatBubbleTemplate = document.createElement("div");
chatBubbleTemplate.classList.add("chat-bubble");

export const chatBubbleUsername = document.createElement("h4");

export const chatBubbleMessage = document.createElement("p");

chatHeader.innerHTML = "NryWhite Chat";
chatInputButton.innerHTML = "Enviar";

document.body.appendChild(chatBackground);
chatBackground.appendChild(chatContainer);
chatContainer.appendChild(chatHeader);
chatContainer.appendChild(chatArea);
chatInputContainer.appendChild(chatInputField);
chatInputContainer.appendChild(chatInputButton);
chatContainer.appendChild(chatInputContainer);

function resizeLayout() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 768) {
        chatContainer.style.width = "100%";
    } else {
        chatContainer.style.width = "70%";
    }
}

resizeLayout();
window.addEventListener("resize", resizeLayout);
