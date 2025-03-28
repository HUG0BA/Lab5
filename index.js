import {
    chatArea,
    chatInputField,
    chatInputButton,
    chatBubbleTemplate,
} from "./html.js";

const testMessages = [
    {
        id: 1,
        username: "ADMIN",
        message: "HELLO WORLD",
    },
    {
        id: 2,
        username: "Usuario",
        message: "Hola",
    },
    {
        id: 3,
        username: "Jose Ruiz",
        message: "Buenas noches",
    },
    {
        id: 4,
        username: "Fernando Hernandez",
        message: "Buenas noches",
    },
    {
        id: 5,
        username: "Fernando Hernandez",
        message: "Que dice jose ruiz?",
    },
    {
        id: 6,
        username: "Jose Ruiz",
        message: "Todo bien Fernando!",
    },
    {
        id: 7,
        username: "Fernando Hernandez",
        message: "Que me alegro!",
    },
    {
        id: 8,
        username: "Fernando Hernandez",
        message: "Cómo esta diana?",
    },
    {
        id: 1,
        username: "ADMIN",
        message: "HELLO WORLD",
    },
    {
        id: 2,
        username: "Usuario",
        message: "Hola",
    },
    {
        id: 3,
        username: "Jose Ruiz",
        message: "Buenas noches",
    },
    {
        id: 4,
        username: "Fernando Hernandez",
        message: "Buenas noches",
    },
    {
        id: 5,
        username: "Fernando Hernandez",
        message: "Que dice jose ruiz?",
    },
    {
        id: 6,
        username: "Jose Ruiz",
        message: "Todo bien Fernando!",
    },
    {
        id: 7,
        username: "Fernando Hernandez",
        message: "Que me alegro!",
    },
    {
        id: 8,
        username: "Fernando Hernandez",
        message: "Cómo esta diana?",
    },
    {
        id: 1,
        username: "ADMIN",
        message: "HELLO WORLD",
    },
    {
        id: 2,
        username: "Usuario",
        message: "Hola",
    },
    {
        id: 3,
        username: "Jose Ruiz",
        message: "Buenas noches",
    },
    {
        id: 4,
        username: "Fernando Hernandez",
        message: "Buenas noches",
    },
    {
        id: 5,
        username: "Fernando Hernandez",
        message: "Que dice jose ruiz?",
    },
    {
        id: 6,
        username: "Jose Ruiz",
        message: "Todo bien Fernando!",
    },
    {
        id: 7,
        username: "Fernando Hernandez",
        message: "Que me alegro!",
    },
    {
        id: 8,
        username: "Fernando Hernandez",
        message: "Cómo esta diana?",
    },
];

const API_URL = "https://chat.nrywhite.lat/chats";

function clearChat() {
    chatArea.innerHTML = "";
}

function displayChat(messages) {
    for (let value of messages) {
        const { username, message } = value;

        const h4 = document.createElement("h4");
        h4.innerHTML = `${username}`;

        const p = document.createElement("p");
        p.innerHTML = `${message}`;

        const messageBubble = chatBubbleTemplate.cloneNode();
        messageBubble.appendChild(h4);
        messageBubble.appendChild(p);
        chatArea.appendChild(messageBubble);
    }
}

async function getMessages() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            console.log("NO SE PUDO\n" + response);
            alert("Error al obtener mensajes");
            return undefined;
        }
        return response.json().value.reverse();
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

async function refreshChat() {
    try {
        const messages = await getMessages();
        console.log(messages);
        if (messages === undefined) {
            alert("Error");
            return;
        }
        clearChat();
        displayChat(messages);
    } catch (error) {
        alert("Error al obtener mensajes");
        console.log(error);
    }
}

async function postRequest(username, message) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, message }),
        });

        // Await the response and parse the JSON
        const data = await response.json();
        console.log("Message sent:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

function isInputEmpty() {
    return chatInputField.value.trim() === "";
}

chatInputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (isInputEmpty()) {
            alert("Input vacio");
            return;
        }
        postRequest(chatInputField.value);
        chatInputField.value = "";
    }
});

chatInputButton.addEventListener("click", function(event) {
    if (isInputEmpty()) {
        alert("Input vacio");
        return;
    }

    postRequest(chatInputField.value);
    chatInputField.value = "";
});

refreshChat();

setInterval(() => refreshChat, 5000);
