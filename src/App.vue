<script setup>
// Initialize stuff
import { ref } from "vue";
import { useConfigStore } from "@/pinia/ConfigStore.js";
//import TopBar from "./components/TopBar.vue";

const config = useConfigStore();
const enabled = ref(0);
config.init().then((p1) => {
  console.log("Loaded Config:", config.app);
  enabled.value = true;
});

//const section = ref("live");
//async function changeSection(s) {
//  section.value = s.key;
//}
</script>

<template>
  <template v-if="enabled">
    <router-view />
    <!-- <div class="grid vertical-align-top">
            <div class="col-12">
              <TopBar @section="changeSection" />
            </div>
          </div>
          <div class="col-12 max-h-screen">
            <div class="grid vertical-align-top">
              <div class="col-2 max-h-screen overflow-scoll p-0 m-0 border-1">
                <ChannelListTree :section="section"
                                 :key="section" />
              </div>
              <div class="col p-0 m-0 border-1">
                <router-view />
              </div>
            </div>
          </div> -->
  </template>
  <p v-else>Loading config...</p>
</template>
