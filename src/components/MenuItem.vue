<template>
  <div>
    <li>
      <RouterLink :to="link">{{ text }}</RouterLink>
    </li>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    text: {
      type: String,
      default: "Undefined",
    },
    link: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style scoped>
li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
