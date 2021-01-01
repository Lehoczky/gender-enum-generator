<template>
  <div>
    <button ref="cpBtn" @click="doCopy">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import tippy from "tippy.js";

export default {
  props: {
    text: String,
  },
  data() {
    return {
      tooltip: null,
    };
  },
  mounted() {
    this.tooltip = this.initializeTooltip();
  },
  methods: {
    async doCopy() {
      try {
        await this.$copyText(this.text);
        this.tooltip.setContent("Copied!");
      } catch {
        this.tooltip.setContent("Failed to copy!");
      } finally {
        this.tooltip.show();
      }
    },
    initializeTooltip() {
      return tippy(this.$refs.cpBtn, {
        content: "",
        trigger: "manual",
        placement: "bottom",
        onShow(instance) {
          setTimeout(() => {
            instance.hide();
          }, 500);
        },
      });
    },
  },
};
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
}

button:focus {
  outline: none;
}

button svg {
  fill: #cbcac8;
}

button:hover svg {
  fill: white;
}
</style>