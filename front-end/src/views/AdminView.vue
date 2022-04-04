<template>
<div class="admin">
  <h1>The Admin Page</h1>
  <div class="heading">
    <div class="circle">1</div>
    <h2>Add an team</h2>
  </div>
  <div class="add">
    <div class="form">
      <input v-model="name" placeholder="Name">
      <input v-model="record" placeholder="Record">
      <input v-model="conference" placeholder="Conference">
      <input v-model="city" placeholder="City">
      <input v-model="state" placeholder="State">
      <p></p>
      <input type="file" name="photo" @change="fileChanged">
      <button @click="upload">Upload</button>
    </div>
    <div class="upload" v-if="addTeam">
      <h2 class="teamName">{{addTeam.name}}</h2>
      <p>{{addTeam.record}}</p>
      <img :src="addTeam.path" />
    </div>
  </div>
  <div class="heading">
    <div class="circle">2</div>
    <h2>Edit/Delete an Team</h2>
  </div>
  <div class="edit">
    <div class="form">
      <input v-model="findName" placeholder="Search">
      <div class="suggestions" v-if="suggestions.length > 0">
        <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectTeam(s)">{{s.name}}
        </div>
      </div>
    </div>
    <div class="upload" v-if="findTeam">
      <input v-model="findTeam.name">
      <input v-model="findTeam.record">
      <input v-model="findTeam.conference">
      <input v-model="findTeam.city">
      <input v-model="findTeam.state">
      <p></p>
      <img :src="findTeam.path" />
    </div>
    <div class="actions" v-if="findTeam">
      <button @click="deleteTeam(findTeam)">Delete</button>
      <button @click="editTeam(findTeam)">Edit</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AdminView',
  data() {
    return {
      name: "",
      record: "",
      conference: "",
      city: "",
      state: "",
      file: null,
      addTeam: null,
      teams: [],
      findName: "",
      findTeam: null,
    }
  },
  created() {
    this.getTeams();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/teams', {
          name: this.name,
          record: this.record,
          conference: this.conference,
          city: this.city,
          state: this.state,
          path: r1.data.path,
        });
        this.addTeam = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getTeams() {
      try {
        let response = await axios.get("/api/teams");
        this.teams = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectTeam(team) {
      this.findName = "";
      this.findTeam = team;
    },
    async deleteTeam(team) {
      try {
        await axios.delete("/api/teams/" + team._id);
        this.findTeam = null;
        this.getTeams();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editTeam(team) {
      try {
        await axios.put("/api/teams/" + team._id, {
          name: this.findTeam.name,
          record: this.findTeam.record,
          conference: this.findTeam.conference,
          city: this.findTeam.city,
          state: this.findTeam.state,
        });
        this.findName = null;
        this.getTeams();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    suggestions() {
      let teams = this.teams.filter(team => team.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return teams.sort((a, b) => a.name > b.name);
    }
  },
}
</script>

<style scoped>
.teamName {
  font-size: 1.3em;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  /* justify-content: center; */
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
  /* justify-content: center; */
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  text-align: center;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>