import { ref } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import * as path from "@tauri-apps/api/path";
import * as fs from "@tauri-apps/api/fs";

export const useConfigStore = defineStore("ConfigStore", {
  state: () => {
    return {
      menuNodes: ref({
        root: [],
      }),
      exceptionObject: {},
      exceptionDisplay: false,
      debug: "no data",
    };
  },
  actions: {
    async init() {
      try {
        const configFilename = import.meta.env.VITE_CONFIGFILE;
        const configFilepath = await path.resolveResource(
          "resources/" + configFilename
        );
        console.log("Config File:", configFilename, configFilepath);

        const configFound = await fs.exists(configFilepath);

        /// FIXME THE SCOPE NEEDS TO BE SET.
        if (configFound) {
          const configDocument = await fs.readTextFile(configFilepath);
          const config = await JSON.parse(configDocument);
          console.log("Loaded Config", config);
          return true;
        } else {
          console.log("No config file found.");
          return false;
        }
      } catch (err) {
        console.log("Init Error", err);
        return false;
      }
    },

    async save() {
      try {
        const configData = {
          timestamp: new Date().toISOString(),
          //providers: JSON.parse(JSON.stringify(this.providers)),
        };
        // configData.providers.map((o) => {
        //   delete o.id;
        //   delete o.live;
        //   delete o.vod;
        //   delete o.series;
        // });
        const configFilename = import.meta.env.VITE_CONFIGFILE;
        const configFilepath = await path.resolveResource(
          "resources/" + configFilename
        );
        const fp = await fs.writeTextFile(
          configFilepath,
          JSON.stringify(configData, null, 2)
        );
        console.log("Wrote Config", configFilepath);
        return true;
      } catch (err) {
        console.log("Save Error", err);
        return false;
      }
    },

    //getProviders() {
    //  try {
    //    return this.providers;
    //  } catch (err) {
    //    console.log("Exception:", err);
    //  }
    //},

    //async getCategories(providerId, section) {
    //  // @section = live|vod|series
    //  console.log("getCategories", providerId);
    //  const p = this.providers[providerId];
    //  const hn = p.hostname;
    //  const un = p.username;
    //  const pw = p.password;
    //  const url = `${hn}/player_api.php?username=${un}&password=${pw}&action=get_${section}_categories`;
    //  console.log("URL:", url);
    //  const res = await fetch(url);
    //  const dat = await res.json();
    //  console.log("Got Categories", dat);
    //  if (!p[section]) {
    //    p[section] = [];
    //  }
    //  dat.map((cat) => {
    //    cat.provider_id = providerId;
    //    cat.streams = null;
    //    p[section].push(cat);
    //  });
    //  return dat;
    //},

    //async getInfo(providerId, section, streamId) {
    //  // @section = vod|series
    //  console.log("getInfo", providerId, section, streamId);
    //  const p = this.providers[providerId];
    //  const hn = p.hostname;
    //  const un = p.username;
    //  const pw = p.password;
    //  const url = `${hn}/player_api.php?username=${un}&password=${pw}&action=get_${section}_info&${section}_id=${streamId}`;
    //  console.log("URL:", url);
    //  const res = await fetch(url);
    //  const dat = await res.json();
    //  console.log("Got Info", dat);
    //  // if (!p[section]) {
    //  //   p[section] = [];
    //  // }
    //  // dat.map((cat) => {
    //  //   cat.provider_id = providerId;
    //  //   cat.streams = null;
    //  //   p[section].push(cat);
    //  // });
    //  return dat;
    //},

    //  async getStreams(providerId, section, categoryId) {
    //    // @section = live|vod|series
    //    console.log("getStreams", providerId, section, categoryId);
    //    try {
    //      const p = this.providers[providerId];
    //      const hn = p.hostname;
    //      const un = p.username;
    //      const pw = p.password;
    //      const id = categoryId;

    //      const index = p[section].findIndex((o) => {
    //        return o.category_id == categoryId;
    //      });
    //      if (index < 0) {
    //        return false;
    //      }

    //      let action = "undefined_action";
    //      switch (section) {
    //        case "live":
    //          action = "get_live_streams";
    //          break;
    //        case "vod":
    //          action = "get_vod_streams";
    //          break;
    //        case "series":
    //          action = "get_series";
    //          break;
    //      }

    //      const url = `${hn}/player_api.php?username=${un}&password=${pw}&action=${action}&category_id=${id}`;
    //      console.log("URL:", url);
    //      const res = await fetch(url);
    //      const dat = await res.json();
    //      console.log(`Got ${section} Streams`, dat);
    //      p[section][index].streams = [];
    //      dat.map((stream) => {
    //        stream.provider_id = providerId;
    //        p[section][index].streams.push(stream);
    //      });
    //      return dat;
    //    } catch (err) {
    //      console.log("Exception:", err);
    //    }
    //  },

    //  error(e) {
    //    this.exceptionObject = e;
    //    this.exceptionDisplay = true;
    //  },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot));
}
