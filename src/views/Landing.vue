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
    <Div class="logos">
      <div class="logo">
        <RouterLink to="/home"><img src="../assets/DakkiiButton.png" class="logo" alt="logo" /></RouterLink>
      </div>
      <div class="logo">
        <a href="https://www.layziidakkii.com/home-daikizen"><img src="../assets/DaikizenButton.png" class="logo" alt="logo" /></a>
      </div>
    </Div>
  </div>
</template>

<script setup></script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.landingtext {
  border-top: solid thin;
  border-bottom: solid thin;
  border-color: white;
  margin-bottom: 15px;
  margin-top: 15px;
}

.content {
  display: flex;
  flex-direction: row;
  padding: 50px;
}
.div1 {
  margin: 25px;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 50%;
}
.div2 {
  margin: 25px;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 50%;
}
.logos {
  display: flex;
  flex-direction: row;
}
</style>
