<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop({default: 'Hello World'}) private msg!: string;
}
</script>

<style scoped lang="scss"></style>
