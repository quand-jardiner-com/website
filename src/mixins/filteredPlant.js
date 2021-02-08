import plants from "@/assets/plant";
const dateNow = new Date().getMonth() + 1;

export const filteredPlant ={
    filter(isSowing){
        const filterPlants = []
        plants.map(plant => {
            if(isSowing ? dateNow >= plant.start_sowing && dateNow <= plant.end_sowing : dateNow >= plant.start_harvest && dateNow <= plant.end_harvest){
                filterPlants.push(plant);
            }
        });
        return filterPlants;
    }
}