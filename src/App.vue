<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div class='carousel-container'>
      <Flicking v-if="banners.data.images.length" :options="{ circular: true, renderOnlyVisible: true }">
        <img
          v-for="banner in banners.data.images"
          :key="banner.id"
          :src="banner.image.url"
          :alt="banner.image.alt"
          class="banner-image" />
      </Flicking>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import mockResponse from '@/components/mockBanners';
import HelloWorld from './components/HelloWorld.vue';
import { Flicking } from "@egjs/vue-flicking";


@Component({components: {HelloWorld, Flicking}})
export default class App extends Vue {
  banners = mockResponse;
}
</script>

<style>
@import '~@egjs/vue-flicking/dist/flicking.css';
@import '~@egjs/vue-flicking/dist/flicking-inline.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.carousel-container {
  margin-bottom: 10px;
}
.carousel-container img {
  width: 100%;
  border-radius: 9.5px;
  -webkit-user-drag: none;
}
</style>
