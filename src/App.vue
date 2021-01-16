<template>
  <div class="container" id="app">
    <v-title>Gender Enum Generator</v-title>

    <v-card class="form-container">
      <div class="row">
        <label>Language:</label>
        <language-select v-model="selectedLanguage"></language-select>
      </div>

      <div v-if="selectedLanguage" class="row">
        <label>Genders:</label>
        <gender-select v-model="selectedGroup"></gender-select>
      </div>
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

const initialGroup = genderGroups.find(x => x.name === "Used by Facebook");

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

html {
  background: #21252b;
  color: #cbcac8;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

.container {
  width: 95%;
  margin: auto;
}

@media screen and (min-width: 580px) {
  .container {
    width: min(85%, 700px);
  }
}

.form-container .row {
  display: flex;
  align-items: center;
}

.form-container .row:not(:last-child) {
  margin-bottom: 20px;
}

.form-container .row .v-select {
  flex: 1;
}

.form-container label {
  width: 75px;
  text-align: end;
  padding-right: 10px;
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
