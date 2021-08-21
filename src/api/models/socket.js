
exports.socket = (io) =>{
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('new data',(msg)=>{
            console.log(msg)
            // this.data.push(msg)
            io.emit("update psotition",
            {state:true}
            )
        })
    })
}
