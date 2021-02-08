module.exports = [
    {
        name: "Ail",
        url: "Ail",
        start:{
            plant: "2",
            harvest: "7",
        },
        end:{
            plant: "3",
            harvest:"8",
        },
    },
    {
        name: "Artichaut",
        url: "Artichaut",
        start:{
            plant: "3",
            harvest: "7", // 1 an après
        },
        end:{
            plant: "4",
            harvest:"8",
        },
    },
    {
        name: "Asperge",
        url: "Asperge",
        start:{
            plant: "2",
            harvest: "5", // 3 ans après
        },
        end:{
            plant: "3",
            harvest:"6",
        },
    },
    {
        name: "Aubergine",
        url: "Aubergine",
        start:{
            sowing_cover: "1", // sous abri
            plant: "5",
            harvest: "7",
        },
        end:{
            sowing_cover: "3",
            plant: "5",
            harvest:"8",
        },
    },
    {
        name: "Betterave",
        url: "Betterave",
        start:{
            sowing_outside: "4", // dehors
            harvest: "8",
        },
        end:{
            sowing_outside: "7",
            harvest:"9",
        },
    },
    {
        name: "Brocoli", // A verifier
        url: "Brocoli",
        start:{
            sowing_outside: "5",
            plant: "5",
            harvest: "9",
        },
        end:{
            sowing_outside: "6",
            plant: "6",
            harvest:"10",
        },
    },
    {
        name: "Carotte",
        url: "Carotte",
        start:{
            sowing_outside: "4", // dehors
            sowing_cover: "2", // sous abri
            harvest: "6",
        },
        end:{
            sowing_outside: "5",
            sowing_cover: "3",
            harvest:"7",
        },
    },
    {
        name: "Chou fleur",
        url: "ChouxFleur",
        start:{
            sowing_outside: "4", // dehors
            sowing_cover: "2", // sous abri
            harvest: "8",
            plant: "5",
        },
        end:{
            sowing_cover: "3",
            sowing_outside: "5",
            plant: "6",
            harvest:"9",
        },
    },
    {
        name: "Citrouille", // A verifier
        url: "Citrouille",
        start:{
            sowing_outside: "4",
            plant: "5",
            harvest: "8",
        },
        end:{
            sowing_outside: "5",
            plant:"6",
            harvest:"10",
        },
    },
    {
        name: "Concombre",
        url: "Concombre",
        start:{
            sowing_cover: "6", // dehors
            sowing_outside: "2", // sous abri
            harvest: "7",
        },
        end:{
            sowing_cover: "6",
            sowing_outside: "3",
            harvest:"8",
        },
    },
    {
        name: "Cornichon",
        url: "Cornichon",
        start:{
            sowing_outside: "2", // sous abri
            sowing_cover: "6", // dehors
            harvest: "7",
        },
        end:{
            sowing_cover: "6",
            sowing_outside: "3",
            harvest:"8",
        },
    },
    {
        name: "Courgette",
        url: "Courgette",
        start:{
            sowing_cover: "4", // sous abri
            sowing_outside: "4", // dehors
            harvest: "8",
        },
        end:{
            sowing_outside: "5",
            sowing_cover : "5",
            harvest:"9",
        },
    },
    {
        name: "Epinard",
        url: "Epinard",
        start:{
            sowing_cover: "4", // sous abri
            harvest: "9",
        },
        end:{
            sowing_cover: "5",
            harvest:"10",
        },
    },
    {
        name: "Haricot",
        url: "Haricot",
        start:{
            sowing_outside: "5", // dehors
            harvest: "8",
        },
        end:{
            sowing_outside: "6",
            harvest:"9",
        },
    },
    {
        name: "Melon",
        url: "Melon",
        start:{
            sowing_outside: "3", // sous abri
            harvest: "8",
        },
        end:{
            sowing_outside: "4",
            harvest:"9",
        },
    },
    {
        name: "Navet",
        url: "Navet",
        start:{
            sowing_outside: "3", // dehors
            harvest: "6",
        },
        end:{
            sowing_outside: "6",
            harvest: "7",
        },
    },
    {
        name: "Oignon rouge",
        url: "OignonRouge",
        start:{
            sowing_cover: "3", // dehors
            harvest: "7",
        },
        end:{
            sowing_cover: "4",
            harvest:"8",
        },
    },
    {
        name: "Panais",
        url: "Panais",
        start:{
            sowing_outside: "3",
            harvest: "7",
        },
        end:{
            sowing_outside: "3",
            harvest:"7",
        },
    },
    {
        name: "Petit pois",
        url: "PetitPois",
        start:{
            sowing_outside: "2", // dehors
            harvest: "6",
        },
        end:{
            sowing_outside: "4",
            harvest:"7",
        },
    },
    {
        name: "Piment",
        url: "Piment",
        start:{
            sowing_cover: "1",
            plant: "5",
            harvest: "7",
        },
        end:{
            sowing_cover: "2",
            plant: "5",
            harvest:"9",
        },
    },
    {
        name: "Poireau",
        url: "Poireau",
        start:{
            sowing_outside: "4", // dehors
            sowing_cover: "3", // sous abri
            plant: "5",
            harvest: "9",
        },
        end:{
            sowing_outside: "5",
            sowing_cover: "3",
            plant: "6",
            harvest:"10",
        },
    },
    {
        name: "Poivron",
        url: "Poivron",
        start:{
            sowing: "4",
            plant:"5",
            harvest: "8",
        },
        end:{
            sowing: "5",
            plant:"6",
            harvest:"8",
        },
    },
    {
        name: "Pomme de terre",
        url: "pommeDeTerre",
        start:{
            plant: "5",
            sowing_outside: "4",
            harvest: "7",
        },
        end:{
            plant: "5",
            sowing_outside: "5",
            harvest:"8",
        },
    },
    {
        name: "Radis",
        url: "Radis",
        start:{
            sowing_outside: "2", // dehors
            sowing_cover: "3", // sous abri
            harvest: "3",
        },
        end:{
            sowing_outside: "3",
            sowing_cover: "7",
            harvest:"4",
        },
    },
    // {
    //     name: "Salade",
    //     url: "Salade",
    //     start:{
    //         sowing_outside: "2",
    //         harvest: "6",
    //     },
    //     end:{
    //         sowing_outside: "1",
    //         harvest:"9",
    //     },
    // },
    {
        name: "Tomate",
        url: "Tomate",
        start:{
            sowing_cover: "2", // sous abri
            plant: "5",
            harvest: "7",
        },
        end:{
            sowing_cover: "4",
            plant: "5",
            harvest:"8",
        },
    },
];