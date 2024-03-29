<template>
    <div class="maincontainer">
    <h2>MEET THE TEAM</h2>
    <div class="container">
        <div v-for="team in teams" :key="team.id" class="card">
            
            <div class="icon">
                <!-- Icon content -->
                <img :src="`../images/${team.img}`">
            </div>
            <h3>{{ team.name }}</h3>
            <p>{{ team.role }}</p>
            <button>Visit Profile</button>
        </div>
    </div>
    </div>
</template>

<script>
import { ref } from 'vue'; // Import the ref function from Vue

export default {
    setup() {


        // Define a reactive reference for the teams array
        const teams = ref([
            {
                id: 1,
                name: 'DAKKII',
                role: 'CEO | Creative Director | Art Lead',
                img: "dakkii.png"
            },
            {
                id: 2,
                name: 'SILVER',
                role: 'Writing Lead',
                img: "silver.jpg"
            },
            {
                id: 3,
                name: 'NINJO',
                role: 'Concept Artist | Writer',
                img: "ninjo.jpg"
            },
            {
                id: 4,
                name: 'SILENCIO',
                role: 'Artist | Writer',
                img: "silencio.png"
            },
            {
                id: 5,
                name: 'BFSN',
                role: 'Writer',
                img: "bfsn.jpg"
            },
        ]);

        // Expose the teams ref to the template
        return {
            teams,

        };
    }
}
</script>
<style scoped>
.maincontainer {
text-align: center;
margin-top: 100px;;
}
.maincontainer h2 {
    font-size: 5rem;
}

.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


}

.card {
    width: 80%;
    color: black;
    background-color: white;
    margin: 5px;
    text-align: center;
}

.icon img {
    height: 300px;
    width: 80%;
    padding: 10px;
    overflow: none;


}


@media (min-width: 768px) {
    .container {
        margin: 80px;
        flex-direction: row;
        flex-wrap: wrap;
        


    }
    .card {
        width: 20%;
        
    }
}

</style>