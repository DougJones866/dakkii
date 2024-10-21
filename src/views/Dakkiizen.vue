<template>
    <div class="container">
      <div class="logo">
        <img src="../assets/dakkiizenlogo.png" />
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* The root container will take up the full viewport */
  .container {
      background-color: white; /* Override default background */
      width: 100vw;  /* Full width of the viewport */
      height: 100vh; /* Full height of the viewport */
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .logo img {
      width: 50%;
      height: auto;
  }
  </style>
  