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
      let lang =
        window.localStorage.getItem("lang") != null
          ? window.localStorage.getItem("lang")
          : "ro";
      if (lang === "ro") {
        window.localStorage.setItem("lang", "en");
        return;
      }
      window.localStorage.setItem("lang", "ro");
      location.reload();
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
</style>
