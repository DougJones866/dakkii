<template>
  <div class="container">
    <div class="landingtext">
      <div class="content">
        <div class="div1">
          <h2>
            DAKKII creates adult works that depict the importance of healthy sexual relationships.
            <span><strong>ALL Content is +18.</strong></span>
          </h2>
        </div>
        <div class="div2">
          <h2>
            DAIKIZEN creates stories and comics suitable for all ages, focusing mainly on action,
            adventure, and worldbuilding.
          </h2>
        </div>
      </div>
    </div>
    <div class="logos">
      <div class="logo" 
        @mouseover="setHoveredLogo('dakkii')"
        @mouseleave="setHoveredLogo('')"
        :class="{ highlighted: hoveredLogo === 'dakkii', dimmed: hoveredLogo && hoveredLogo !== 'dakkii' }">
        <RouterLink to="/home"><img src="../assets/DakkiiButton.png" class="logo" alt="Dakkii logo" /></RouterLink>
      </div>
      <div class="logo" 
        @mouseover="setHoveredLogo('daikizen')"
        @mouseleave="setHoveredLogo('')"
        :class="{ highlighted: hoveredLogo === 'daikizen', dimmed: hoveredLogo && hoveredLogo !== 'daikizen' }">
        <RouterLink to="/dakkiizen"><img src="../assets/DaikizenButton.png" class="logo" alt="Daikizen logo" /></RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const hoveredLogo = ref('');

const setHoveredLogo = (logo) => {
  hoveredLogo.value = logo;
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.landingtext {
  border-top: solid thin;
  border-bottom: solid thin;
  border-color: white;
  margin: 15px 0;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: row;
  padding: 20px;
}

.div1, .div2 {
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.logos {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.logo {
  margin: 10px;
  width: 100%;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.logo img {
  width: 100%;
  height: auto;
}

.highlighted img {
  transform: scale(1.1);
}

.dimmed img {
  opacity: 0.5;
}

/* Responsive design */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    padding: 10px;
  }

  .div1, .div2 {
    width: 100%;
    margin: 10px 0;
  }

  .logos {
    flex-direction: column;
  }

  .logo {
    margin: 10px 0;
    max-width: none; /* Remove the limit for mobile */
  }
}

@media (max-width: 480px) {
  .content {
    padding: 5px;
  }

  .div1, .div2 {
    margin: 5px 0;
  }

  h2 {
    font-size: 1.2rem;
  }

  .logo {
    margin: 5px 0;
  }
}
</style>
