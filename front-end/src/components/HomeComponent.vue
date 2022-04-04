<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>
      Your ultimate guild to creating you very own March Madness bracket! Look at teams and their stats and then click here to create your 
      <a href="https://www.ncaa.com/march-madness-live/bracket" target="_blank" rel="noopener">March Madness Bracket</a>.
    </p>
    <h2>Last March Madness Winner</h2>
    <h3>Baylor University</h3>
    <img alt="Baylor University Logo" src="data:image/png;base64,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" style="height: 200px">
    <h2>Most Wins in the NCAA Tournament</h2>
    <h3>UCLA</h3>
    <p>With 11 national titles, UCLA has the record for the most NCAA Men's Division I Basketball</p>
    <img alt="UCLA logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/UCLA_Bruins_logo.svg/2560px-UCLA_Bruins_logo.svg.png" style="height: 200px">
    <h2>Who Do You Think Will Win This Year?</h2>
    <h3 v-if="this.$root.$data.chosenTeam.id === 0">Navigate to the Teams Page to pick a Predicted Winner</h3>
    <div v-else>
      <h3>You Picked: {{ predictedWinner }}</h3>
      <img id="chosenTeamImage" :src=this.$root.$data.chosenTeam.image>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  },
  data() {
    return {
      predictedWinner: this.$root.$data.chosenTeam.name
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
primary: rgb(39, 92, 178)
secondary: rgb(114, 122, 131)
dark: rgb(34, 31, 32)
*/

h2 {
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(39, 92, 178);
}

#chosenTeamImage {
  height: 200px;
}
</style>