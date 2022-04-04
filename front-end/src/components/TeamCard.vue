<template>
<div class="wrapper">
  <div class="teams">
    <div class="team" v-for="team in teams" :key="team.id">
      <div class="image" @click="pickTeam(team)">
        <img :src="team.image">
      </div>
      <div class="name">
        <h2>{{team.name}}</h2>
      </div>
      <div class="info">
        <h3>{{team.record}}</h3>
        <p>{{team.conference}} - {{team.city}}, {{team.state}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    teams: Array
  },
  methods: {
    pickTeam(team) {
      console.log("Clicked team");
      console.log(team);
      this.$root.$data.chosenTeam = team;
      console.log(this.$root.$data.chosenTeam);
    }
  }
}
</script>

<style scoped>
img {
  height: 200px;
}

</style>
