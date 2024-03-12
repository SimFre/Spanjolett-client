
<script>
  import { ref } from 'vue';
  // import { useSiteStore } from "@/pinia/SiteStore.js";
  export default {
    //setup() {
    //  const SiteStore = useSiteStore();
    //  return { SiteStore };
    //},
    name: "TopBar",
    emits: ["section"],

    data() {
      return {
        items: null,
        active: null
      };
    },

    methods: {
      emitSection(tab) {
        this.$emit('section', this.items[tab.index]);
      }
    },

    mounted() {
      this.items = [
        {
          key: "ll",
          label: 'LL',
          icon: 'pi pi pi-globe',
          //command: this.emitSection('ll'),
          // to: '/ll'
        },
        {
          key: "vv",
          label: 'VV',
          icon: 'pi pi-eye',
          //command: this.emitSection('section', 'vv'),
          // to: '/vod',
          // disabled: true
        },
        {
          key: "ss",
          label: 'SS',
          icon: 'pi pi-video',
          //command: this.emitSection('ss'),
          // to: '/ss',
          // disabled: true
        },
        {
          key: "favorites",
          label: 'Favorites',
          icon: 'pi pi-heart',
          to: '/favorites',
          disabled: true
        },
        {
          key: "streamer",
          label: 'Streamer',
          icon: 'pi pi-truck',
          to: '/streamer'
        },
        {
          key: "settings",
          label: 'Settings',
          icon: 'pi pi-cog',
          to: '/settings'
        },
      ];
    }
  }
</script>

<template>
  <TabMenu :model="items"
           v-model:activeIndex="active"
           @tabChange="emitSection" />
</template>
