var RoomAI = require('room_ai');

class Core {
    constructor(){
        // var room1 = new RoomAI;
        for(let room in Game.rooms) {
            let roomai = new RoomAI(Game.rooms[room]);
        }
    }
    listAll(){
        console.log(Game.rooms);
    }
}
module.exports = Core;