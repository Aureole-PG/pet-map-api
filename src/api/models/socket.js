class Sockets{
    constructor(io){
        this.io = io
        this.socketsEvents()
        Sockets.instance = this
    }
    socketsEvents(){
        this.io.on('connection', (socket) => {
            const owner_id = socket.handshake.query['owner_id']
            
            if ( owner_id === "undefined") {
                return socket.disconnect();
            }else{
                socket.join( owner_id );
                console.log("conectado  :", owner_id,typeof(owner_id ))
            }
            
            socket.on('disconnect', () => {
                console.log("desconectado :",owner_id)
            })
        });
    }
    getInstance(){
        if (!Sockets.instance) {
            Sockets.instance= new Sockets()
        }
        return Sockets.instance
    }
}

module.exports = Sockets