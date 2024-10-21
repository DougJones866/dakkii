<template>
<div class="content">
    <div class="div1">
      <!-- <div class="vid">
        <video autoplay muted loop id="myVideo">
          <source src="../assets/peri.mp4" type="video/mp4">
        </video>
      </div> -->
      <div class="comms">
        <h3>OPEN</h3>
        <h2>COMMISSIONS</h2>
        <p>Want something drawn? Commission me!</p>
      </div>
      <div class="btn">
        <button class="request">Submit Request</button>
      </div>
    </div>
    <div class="div2">
      <div class="btn">
        <button>Sign Up!</button>
      </div>
      
        <div class="newsletter">
          <h2>NEWSLETTER</h2>
          <h3>Subscribe to my newsletter to get updates about comics and stories!</h3>
        </div>
      
    </div>
    <div class="div3">
      <div class="title">
        <h2>SERIES</h2>
      </div>

      <div class="subtitle">
        <P>Exerience wholesome stories about self-improvement, love and intimacy - original and
          fan-made alike!</P>
      </div>
    </div>
    <div class="div4">
      <div class="title">
        <h2>STORIES</h2>
      </div>
      <div class="subtitle">
        <p>
          From the "intrusive 3 AM" drabbles to heartwarming and sensual short stories, read them
          all here!
        </p>
      </div>
    </div>
    <div class="div5">
      <div class="title">
        <h2>ARTWORK</h2>
      </div>
      <div class="subtitle">
        <p>View (most of) my artwork -past, present, and future!</p>
      </div>
    </div>
    <div class="div6">
      <div class="title">
        <h2>ANIMATION</h2>
      </div>
      <div class="subtitle">
        <p>Where i'll post my animations and animatics! I want to practive as much as I can!</p>
      </div>
    </div>
    <div class="div7">
      <div class="title">
        <h2>FANART</h2>
      </div>
      <div class="subtitle">
        <p>I love the fanart I get, I'll put my favorites here!</p>
      </div>
    </div>
    <div class="div8">
      <div class="title">
        <h2>MEET THE TEAM</h2>
      </div>
      <div class="subtitle">
        <p>Meet the talanted creators I work with to bring my art and comics to life!</p>
      </div>
    </div>
    <div class="div9">
      <h2>SEARCH</h2>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.content {
  margin-top: 100px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index:-1;
  /* background-color: red; */
}

.div2 {
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height:500px;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/newsletter.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
}

.div3 {
  grid-area: 3 / 1 / 4 / 2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/toph.jpeg');
  background-repeat: no-repeat;
  background-size: auto 100%;
}

.div4 {
  grid-area: 4 / 1 / 5 / 2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/Comfort.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
}

.div5 {
  grid-area: 5 / 1 / 6 / 2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/BlackKnighting2.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
}

.div6 {
  grid-area: 6 / 1 / 7 / 2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/fanart.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}

.div7 {
  grid-area: 7 / 1 / 8 / 2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.div8 {
  grid-area: 8 / 1 / 9 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.div9 {
  grid-area: 9 / 1 / 10 / 2;
  display: inline-flex;
}

.div1,
.div2,
.div3,
.div4,
.div5,
.div6,
.div7,
.div8,
.div9 {
  border: solid 5px black;
  border-right: none;
  border-left: none;
}

button {
  background-color: white;
  color: black;
  height: 100px;
  width: 200px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 150px;
}

.title {
  flex-grow: 1;
  margin: 20px;
  text-decoration: underline;
  font-size: 6rem;
  text-align: center;
}

.subtitle {
  flex-grow: 1;
  margin: 20px;
  text-align: center;
}

.subtitle p {
  margin: 0;
  /* Remove default margin */
}

.comms {
  flex-grow: 1;
  margin: 20px;
  text-align: center;
}

.comms h2 {
  font-size: 4rem;
}

.comms h3 {
  font-size: 2rem;
}

.btn {
  flex-grow: 1;
  margin: 20px;
  text-align: center;
  border: none;

  height: auto;
}



@media (min-width: 768px) {

  .div1,
  .div2,
  .div3,
  .div4,
  .div5,
  .div6,
  .div7,
  .div8,
  .div9 {
    background-size: 100% auto;
  }
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
    /* Change to a single column layout */
    grid-template-rows: auto;
    /* Auto sizing for rows */
    padding: 10px;
    /* Add some padding for better mobile spacing */
  }

  .div1,
  .div2,
  .div3,
  .div4,
  .div5,
  .div6,
  .div7,
  .div8,
  .div9 {
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .title {
    font-size: 2.5rem;
    /* Reduce font size for titles */
  }

  .subtitle {
    font-size: 1.2rem;
    /* Reduce font size for subtitles */
  }

  .comms h2 {
    font-size: 3rem;
    /* Adjust font size for the "COMMISSIONS" title */
  }

  .comms h3 {
    font-size: 1.6rem;
    /* Adjust font size for the "OPEN" subtitle */
  }

  .btn {
    margin-top: 20px;
    /* Add some margin for better spacing */
  }
}

.vid {
  z-index: -100;
  width: 100%;

  position: absolute;
}

.vid video {
  height: 100%;
  width: 100%;
  z-index: -100;
}

.comms,
.btn {
  z-index: 1;
  position: relative;
}

</style>