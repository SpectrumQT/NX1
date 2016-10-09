class RoomAI {
    constructor(room){
        let activeSources = this.indexSources(room);
        let activeStructures = this.indexStructures(room, [STRUCTURE_SPAWN, STRUCTURE_EXTENSION, STRUCTURE_TOWER])
    }
    indexStructures(room, typesArray) {
        return room.find(FIND_STRUCTURES, { filter: (structure) => typesArray.find((element) => element == structure.structureType) });
    }
    indexSources(room) {
        return room.find(FIND_SOURCES);
    }
    listAll() {
        console.log(this.activeSources);
        console.log(this.activeStructures);
    }
}