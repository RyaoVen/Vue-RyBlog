<script setup>

import MyselfTopCard from "@/components/myself-topCard.vue";
import Plan from "@/components/plan.vue";
import Studying from "@/components/studying.vue";
import AboutMe from "@/components/aboutMe.vue";
</script>

<template>
<main>
  <myself-top-card/>
  <div class="Plan-Studying">
    <plan/>
    <studying/>
    <about-me/>
  </div>
</main>
</template>

<style scoped>
.Plan-Studying{
  margin-top: 75px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  gap: min(3vw,4em);
}
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

</style>