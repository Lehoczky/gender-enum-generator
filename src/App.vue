<template>
  <div class="container" id="app">
    <v-title>Gender Enum Generator</v-title>

    <v-card>
      <language-select v-model="selectedLanguage"> </language-select>

      <gender-select
        v-if="selectedLanguage"
        v-model="selectedGroup"
      ></gender-select>
    </v-card>

    <v-card v-if="selectedLanguage" class="code-container">
      <highlightjs :language="selectedLanguage.name" :code="code" />
      <copy-button class="copy-btn" :text="code"></copy-button>
    </v-card>
  </div>
</template>

<script>
import genderGroups from "./genders";
import CopyButton from "./components/CopyButton.vue";
import GenderSelect from "./components/GenderSelect.vue";
import LanguageSelect from "./components/LanguageSelect.vue";
import VCard from "./components/VCard.vue";
import VTitle from "./components/VTitle.vue";

const initialGroup = genderGroups.find(x => x.name === "facebook");

export default {
  components: { CopyButton, GenderSelect, LanguageSelect, VCard, VTitle },
  name: "App",
  data() {
    return {
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
@import url("./assets/tooltip-theme.css");

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

.code-container {
  position: relative;
}

.copy-btn {
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
}
</style>
