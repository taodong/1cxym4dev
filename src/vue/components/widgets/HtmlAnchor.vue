<template>
  <a :href="`#${anchor}`" :class="['btn btn-link', customClass]" :style="customStyle">
    <i class="fas fa-bookmark" aria-hidden="true"></i>
    <span class="visually-hidden">{{ anchor }}</span>
  </a>
</template>

<script>
export default {
  name: "HtmlAnchor",
  props: {
    anchor: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: "",
    },
    customStyle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.btn-link {
  text-decoration: none;
  color: inherit;
  padding-top: 0;
}
.btn-link:hover {
  color: #0d6efd; /* Bootstrap primary color */
}
</style>