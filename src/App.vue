<template>
  <div id="app">
    <h1>Gender Enum Generator</h1>

    <select v-model="languageName">
      <option disabled value="">Please select one</option>
      <option v-for="language in languageNames" :key="language">
        {{ language }}
      </option>
    </select>

    <template v-if="selectedLanguage">
      <select v-model="genderGroupName">
        <option v-for="group in genderGroupNames" :key="group">
          {{ group }}
        </option>
      </select>

      <highlightjs :language="selectedLanguage.name" :code="code" />
    </template>
  </div>
</template>

<script>
import languages from "./languages";
import genderGroups from "./genders";

export default {
  name: "App",
  data() {
    return {
      languageName: "",
      genderGroupName: "facebook",
    };
  },
  computed: {
    languageNames() {
      return languages.map(l => l.name);
    },
    genderGroupNames() {
      return genderGroups.map(g => g.name);
    },
    selectedLanguage() {
      return languages.find(l => l.name === this.languageName);
    },
    gendersForSelected() {
      return genderGroups.find(g => g.name === this.genderGroupName).genders;
    },
    code() {
      return this.selectedLanguage
        ? this.selectedLanguage.generateCode(this.gendersForSelected)
        : null;
    },
  },
};
</script>

<style></style>
