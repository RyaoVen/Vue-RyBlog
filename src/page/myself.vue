<script setup>

import MyselfTopCard from "@/components/myself-topCard.vue";
import Plan from "@/components/plan.vue";
import Studying from "@/components/studying.vue";
import AboutMe from "@/components/aboutMe.vue";
</script>

<template>
<myself-top-card/>
  <div class="Plan-Studying">
    <plan/>
    <studying/>
    <about-me/>
  </div>
</template>

<style scoped>
.Plan-Studying{
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  gap: min(3vw,4em);
}


</style>