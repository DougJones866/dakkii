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
      <div class="logo">
        <RouterLink to="/home"><img src="../assets/DakkiiButton.png" class="logo" alt="logo" /></RouterLink>
      </div>
      <div class="logo">
        <a href="https://www.layziidakkii.com/home-daikizen"><img src="../assets/DaikizenButton.png" class="logo" alt="logo" /></a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  
}

.logo img {
  width: 100%;
  height: auto;
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
