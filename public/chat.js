const socket = io();

let message = document.getElementById('message');
let username = document.getElementById('username');
let output = document.getElementById('output');
let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    socket.emit('chat:message',{
        message: message.value,
        username: username.value
    })
})

socket.on('chat:message',(data)=>{
    output.innerHTML += `<p>
        <strong>${data.username}: </strong>${data.message}
    </p><br/>`
})