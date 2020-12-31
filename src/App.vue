<template>
  <div class="container" id="app">
    <h1 class="title">Gender Enum Generator</h1>

    <div class="card">
      <select v-model="selectedLanguage">
        <option :value="null" disabled hidden>Select a language...</option>
        <option
          v-for="language in languages"
          :key="language.name"
          :value="language"
        >
          {{ language.name }}
        </option>
      </select>

      <select v-if="selectedLanguage" v-model="selectedGroupName">
        <option v-for="group in genderGroups" :key="group.name">
          {{ group.name }}
        </option>
      </select>
    </div>

    <div v-if="selectedLanguage" class="card">
      <highlightjs :language="selectedLanguage.name" :code="code" />
    </div>
  </div>
</template>

<script>
import languages from "./languages";
import genderGroups from "./genders";

export default {
  name: "App",
  data() {
    return {
      languages,
      genderGroups,
      selectedLanguage: null,
      selectedGroupName: "facebook",
    };
  },
  computed: {
    gendersForSelected() {
      return genderGroups.find(g => g.name === this.selectedGroupName).genders;
    },
    code() {
      return this.selectedLanguage
        ? this.selectedLanguage.generateCode(this.gendersForSelected)
        : null;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

* {
  margin: 0;
}

body {
  background: #21252b;
  color: #cbcac8;
  font-family: "Roboto", sans-serif;
}

.container {
  width: min(640px, 95%);
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
