const socket = new WebSocket('ws://localhost:3000');

// Connection opened
socket.addEventListener('open', () => {
  console.log('The socket connection is opened');
});

// Listen for messages
socket.addEventListener('message', ({data}: {data: string}) => {
  document.getElementById('indicator').innerText = data;
});