<template>
    <header>

        <div class='mHeader'>
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/logo.png" class="logo" alt="logo" />
                </router-link>
            </div>

            <button @click="toggleMenu" class="burger-menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav :class="{ 'active': isMenuOpen }">
            <ul>
                <li><a>Home</a></li>
                <li><a>Support</a></li>
                <li><a>Gallery</a></li>
                <li><a>Series</a></li>
                <li><a>Streaming</a></li>
                <li><a>Discord</a></li>
                <li><a>Newsletter</a></li>
                <li><a>Contact</a></li>
                <li><router-link to="/teams">Teams</router-link></li>
                <li><a>Links</a></li>
            </ul>
        </nav>

    </header>
</template>
<script>
export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
    
};
</script>
<style scoped>
a {
    color: white;
}

ul {
    list-style: none;

}

li {
    padding: 7px;

}

@media (max-width: 768px) {

    header {}

    .mHeader {
        /* position: fixed;
        top: 0;
        left: 0; */
        padding: 10px;
    }

    .logo {
        height: auto;
        width: 80%;

        margin: auto;

    }

    nav {
        margin-top: 100px;
        display: none;
        justify-content: center;
    align-items: center;
    text-align: center;
        


    }

    nav.active {
        display: block;
    }

    .burger-menu {
        position: fixed;
        top: 0;
        left: 0;
        display: block;
        background-color: transparent;
        border: none;
        cursor: pointer;

    }

    .burger-menu span {

        display: block;
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 5px;
    }


}

@media (min-width: 768px) {

    header {
        /* position: fixed;
        top: 0;
        left: 0; */
        width: 100%;
        z-index: 1000;
        /* Adjust as needed */
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;


    }

    .burger-menu {
        display: none;
    }

    nav {}

    .logo {
        height: 6em;
        width: auto;
        margin-left: 20px;


    }

    ul {
        display: inline-block;
        margin-right: 100px;
    }


    li {
        display: inline;
    }
}
</style>
