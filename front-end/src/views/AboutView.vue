<template>
  <div class="about">
    <h1>We are the Developers</h1>
    <div class="about-container">
      <div class="about-card">
          <a href="https://www.linkedin.com/in/brandonvinhquangle/" target="_blank">
              <img class="card-image" src="https://media-exp1.licdn.com/dms/image/C5603AQELZVTUi7cE2g/profile-displayphoto-shrink_800_800/0/1619480533407?e=1649289600&v=beta&t=jYCIeBFX_FWYNTfzYQE8Id4w2SlPkIS1obq5fWNACOw">
          </a>
          <h2>Brandon Vinh Le</h2>
          <p>
              I am currently a student working towards a Bachelor of Science in Computer Science at Brigham Young University. 
              I come from a solid technical background with a strong interest in software development, testing, and business. 
              Currently, I work as a Software Engineer at Micro Focus and am searching for more opportunities in my field.
          </p>
      </div>
      <br>
      <div class="about-card">
          <a href="https://www.linkedin.com/in/joshua-higgins-913552222/" target="_blank">
              <img class="card-image" src="https://github.com/jwhiggs77/joshuawhiggins.com/blob/main/FC_20220108_0098.JPG?raw=true">
          </a>
          <h2>Josh Higgins</h2>
          <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*
primary: rgb(39, 92, 178)
secondary: rgb(114, 122, 131)
dark: rgb(34, 31, 32)
*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

h2 {
  color: rgb(39, 92, 178);
}

/*About section styles*/
.about-header {
    margin-top: 40px;
    text-align: center;
}

.about-container {
    margin-top: 30px;
    /* border: 2px solid red; */
}

.about-card {
    margin-top: 2000px;
    /* border: 2px solid blue; */
    max-width: 450px;
    margin: auto;
}

.about-card h2 {
    margin-top: 20px;
    text-align: center;
}

.about-card p {
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
}

.card-image {
    display: block;
    height: 200px;
    width: 200px;
    border-radius: 100%;
    margin-top: 60px;
    margin: auto;
    object-fit: cover;
}
</style>