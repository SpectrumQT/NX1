var RoomAI = require('room_ai');

class Core {
    constructor(){
        // var room1 = new RoomAI;
        for(let room of Game.rooms) {
            let roomai = new RoomAI;
            roomai.listAll();
        }
    }
    listAll(){
        console.log(Game.rooms);
    }
}
module.exports = Core;