import { ref } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import * as path from "@tauri-apps/api/path";
import * as fs from "@tauri-apps/plugin-fs";

export const useConfigStore = defineStore("ConfigStore", {
  state: () => {
    return {
      menuNodes: ref({
        root: [],
      }),
      app: {
        defaultValidationLength: 365,
        remoteNodes: [],
      },
      exceptionObject: {},
      exceptionDisplay: false,
      debug: "no data",
    };
  },
  actions: {
    async init() {
      await this.load();
    },

    async load() {
      try {
        const cfgFile = import.meta.env.VITE_CONFIGFILE;
        let cfgPath = await path.appLocalDataDir();
        if (import.meta.env.DEV) {
          cfgPath = await path.resourceDir();
        }
        const cfgFull = await path.resolve(cfgPath, cfgFile);
        const configFound = await fs.exists(cfgPath);
        console.log("Config File:", cfgFull);

        if (configFound) {
          const configDocument = await fs.readTextFile(cfgFull);
          this.app = await JSON.parse(configDocument);
          console.log("Loaded Config", cfgFull);
          return true;
        } else {
          console.log("No config file found.");
          return false;
        }
      } catch (err) {
        console.log("Load Error", err);
        return false;
      }
    },

    async save() {
      try {
        const cfgData = this.app;
        cfgData.timestamp = new Date().toISOString();
        //providers: JSON.parse(JSON.stringify(this.providers)),

        const cfgFile = import.meta.env.VITE_CONFIGFILE;
        let cfgPath = await path.appLocalDataDir();
        if (import.meta.env.DEV) {
          cfgPath = await path.resourceDir();
        }
        const cfgFull = await path.resolve(cfgPath, cfgFile);
        const configFileFound = await fs.exists(cfgFull);
        const configPathFound = await fs.exists(cfgPath);
        console.log("Config File:", cfgFull);
        
        if (!configPathFound) {
          fs.mkdir(cfgPath, { baseDir: fs.BaseDirectory.AppLocalData });
        }
        const fp = await fs.writeTextFile(
          cfgFull,
          JSON.stringify(cfgData, null, 2)
        );
        console.log("Wrote Config", cfgFull);
        return true;
      } catch (err) {
        console.log("Save Error", err);
        return false;
      }
    },

    addNode(nodeId, nodeName) {
      if (!nodeName || !nodeId) {
        console.log("Invalid node data", nodeName, nodeId);
        return false;
      }

      const d1 = new Date();
      const validFrom = d1.toISOString();

      const d2 = new Date();
      d2.setDate(d1.getDate() + this.app.defaultValidationLength);
      const validTo = d2.toISOString();

      const newNode = {
        id: nodeId,
        name: nodeName,
        permissions: "lock",
        pubkey: null,
        lastused: null,
        validFrom: validFrom,
        validTo: validTo,
        active: true,
      };

      this.app.remoteNodes.push(newNode);
      console.log("Added new remote node:", newNode);
      return true;
    },

    removeNode(nodeId) {
      const index = this.app.remoteNodes.findIndex(
        (node) => node.id === nodeId
      );
      if (index !== -1) {
        this.remoteNodes.splice(index, 1);
        console.log("Removed remote node with ID:", nodeId);
        return true;
      } else {
        console.log("Node with ID not found:", nodeId);
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
