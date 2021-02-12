import plants from "@/assets/plant";
const dateNow = new Date().getMonth() + 1;

export const filteredPlant ={
    /**
     * @param {string} action
     * @returns {[]}
     */
    filter(action){
        const filterPlants = []
        plants.map(plant => {
            action === "outside" && dateNow >= plant.start.sowing_outside && dateNow <= plant.end.sowing_outside ? filterPlants.push(plant) : [];
            action === "cover" && dateNow >= plant.start.sowing_cover && dateNow <= plant.end.sowing_cover ? filterPlants.push(plant) : [];
            action === "plantation" && dateNow >= plant.start.plant && dateNow <= plant.end.plant ? filterPlants.push(plant) : [];
            action === "harvest" && dateNow >= plant.start.harvest && dateNow <= plant.end.harvest ? filterPlants.push(plant) : [];
        });
        return filterPlants;
    }
}