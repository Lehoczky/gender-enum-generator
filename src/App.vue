<template>
  <div class="container" id="app">
    <h1 class="title">Gender Enum Generator</h1>

    <div class="card">
      <v-select
        v-model="selectedLanguage"
        :options="languages"
        :clearable="false"
        label="name"
        placeholder="Select a language..."
      ></v-select>

      <v-select
        v-if="selectedLanguage"
        v-model="selectedGroup"
        :options="genderGroups"
        :clearable="false"
        label="name"
      ></v-select>
    </div>

    <div v-if="selectedLanguage" class="card">
      <highlightjs :language="selectedLanguage.name" :code="code" />
    </div>
  </div>
</template>

<script>
import languages from "./languages";
import genderGroups from "./genders";

const initialGroup = genderGroups.find(x => x.name === "facebook");

export default {
  name: "App",
  data() {
    return {
      languages,
      genderGroups,
      selectedLanguage: null,
      selectedGroup: initialGroup,
    };
  },
  computed: {
    code() {
      return this.selectedLanguage
        ? this.selectedLanguage.generateCode(this.selectedGroup.genders)
        : null;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");
@import url("./assets/select-theme.css");

* {
  margin: 0;
}

body {
  background: #21252b;
  color: #cbcac8;
  font-family: "Roboto", sans-serif;
}

.container {
  width: min(600px, 95%);
  margin: auto;
}

.title {
  text-align: center;
  font-weight: 500;
  margin: 2rem 0;
}

.card {
  background: #282c34;
  box-shadow: 0px 0px 3px 0px black;
  border-radius: 2px;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>
