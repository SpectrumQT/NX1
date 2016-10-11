class RoomAI {
    constructor(room){
        this.id = room.id;

        if(Memory[this.id].chains.length == 0){
            this.harvestChains = [];
        }else{
            this.harvestChains = Memory[this.id].chains;
        }

        this.activeSources = this.indexSources(room);
        this.activeStructures = this.indexStructures(room, [STRUCTURE_SPAWN, STRUCTURE_EXTENSION, STRUCTURE_TOWER]);

        if(Memory[this.id].chains.length == 0) {
            this.addHarvestChain(this.activeSources[0]);
        }

        for(let chain in Memory[this.id].chains) {
            if(chains.count < 1) {
                this.spawnCreep(Game.getObjectById(chains.chain[1]), chain);
            }

        }

        this.setMemory();

    }
    indexStructures(room, typesArray) {
        return room.find(FIND_STRUCTURES, { filter: (structure) => typesArray.find((element) => element == structure.structureType) });
    }
    indexSources(room) {
        return room.find(FIND_SOURCES);
    }
    indexCreeps(room) {
        return room.find(FIND_CREEPS);
    }
    addHarvestChain(source) {
        let target = source.pos.findClosestByPath(STRUCTURE_SPAWN, {filter: (structure) => structure.energy < structure.energyCapacity });
        this.harvestChains.push({ chain: [source.id, target.id], count: 0 });
    }
    setMemory() {
        Memory[this.id].chains = this.harvestChains;
    }
    spawnCreep(spawn, harvestChain) {
        if(!spawn.spawning&&canCreateCreep([WORK, CARRY, MOVE])){
            spawn.createCreep([WORK, CARRY, MOVE], null, {hc: harvestChain});
            Memory[this.id].chains[harvestChain].count++;
        }
    }
    listAll() {
        console.log(this.activeSources);
        console.log(this.activeStructures);
    }
}
module.exports = RoomAI;
