<template>
  <div>
    <ul>
      <MenuItem :text="$translate('menu.home')" link="/" />
      <MenuItem text="About us" link="about-us" />
    </ul>
    <h1>{{ $translate("greetings.hello") }}</h1>
    <button type="button" @click.stop="switchLang">Switch Language</button>
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";
export default {
  components: {
    MenuItem,
  },
  methods: {
    switchLang() {
      if (window.localStorage.getItem("lang") == "ro") {
        window.localStorage.setItem("lang", "en");
      } else {
        window.localStorage.setItem("lang", "ro");
      }
      window.location.reload();
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
</style>
