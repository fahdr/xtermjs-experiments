
const socket = new WebSocket("ws://192.168.0.55:8765");
var attachAddon = new window.AttachAddon.AttachAddon(socket);
term.loadAddon(attachAddon);
socket.onopen = () => {
    console.log('WebSocket Client Connected');
};
socket.onclose = () => {
    console.log('WebSocket Client Closed');
};
var term = new window.Terminal({
    cursorBlink: true
});
term.open(document.getElementById('terminal'));
term._initialized = true;
socket.onmessage = (event) => {
    term.write(event.data);

}



function init() {
    if (term._initialized) {
        return;
    }

    term._initialized = true;

    term.prompt = () => {
        runCommand('\n');
    };
    setTimeout(() => {
        term.prompt();
    }, 300);

    term.onKey(keyObj => {
        runCommand(keyObj.key);
    });
}

function runCommand(command) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(command);
    } else {
        console.log('Cannot send data, WebSocket is in state:', socket.readyState);
    }
}

init();