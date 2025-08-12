<script setup>
import { ref, computed } from "vue";
import { useConfigStore } from "@/pinia/ConfigStore.js";
import QrcodeVue from "qrcode.vue";
import { nanoid } from 'nanoid'
import * as UNG from 'unique-names-generator';
//import UniqueNamesGenerator from "unique-names-generator/dist/unique-names-generator.constructor"; { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';


const config = useConfigStore();

let newNodeName = ref("");
let newNodeId = ref("");
const showAddNodeDialog = ref(false);
function runAddNodeDialog() {
  const numberDictionary = UNG.NumberDictionary.generate({ min: 0, max: 99 });
  newNodeId.value = nanoid();
  newNodeName.value = UNG.uniqueNamesGenerator({
    dictionaries: [UNG.adjectives, UNG.names, UNG.animals, UNG.colors, numberDictionary],
    length: 4,
    separator: "-",
    style: "capital"
  });
  showAddNodeDialog.value = true;
}

</script>

<template>

  <Dialog v-model:visible="showAddNodeDialog"
          modal
          :dismissableMask="true"
          header="Add Remote Node"
          :style="{ minWidth: '25rem' }">
    <div class="flex items-center gap-4 mb-4">
      <InputText autocomplete="off"
                 v-model="newNodeName"
                 aria-label="Name" />
    </div>

    <QrcodeVue :value="newNodeId"
               :size="200"
               level="H" />
               ({{ newNodeId }})


    <div class="flex justify-end gap-2">
      <Button type="button"
              icon="pi pi-refresh"
              severity="secondary"
              @click="runAddNodeDialog()"></Button>
      <Button type="button"
              icon="pi pi-times"
              severity="danger"
              @click="showAddNodeDialog = false"></Button>
      <Button type="button"
              icon="pi pi-save"
              @click="showAddNodeDialog = !config.addNode(newNodeId, newNodeName)"></Button>
    </div>
  </Dialog>

  <hr />
  <Button label="Add node"
          severity=""
          icon="pi pi-plus"
          @click="runAddNodeDialog()" />

  <hr />
  <samp>
    Name: {{ newNodeName }}
    ID: {{ newNodeId }}

  </samp>

  <DataTable :value="config.app.remoteNodes">
    <Column field="name"
            header="Name"></Column>
    <Column field="permissions"
            header="Permissions"></Column>
    <Column field="lastused"
            header="Last Used"></Column>
    <Column header="Action">
      <template #body="sp">
        <Button icon="pi pi-trash"
                aria-label="Remove"
                severity="danger"
                @click="config.removeNode(sp.data.id)"></Button>
      </template>
    </Column>
  </DataTable>
  <hr />
  <Button icon="pi pi-refresh"
          label="Reload Config"
          @click="config.load()"></Button>
  <Button icon="pi pi-save"
          label="Save Config"
          @click="config.save()"></Button>
  <hr />
  Config:
  <samp>{{ config }}</samp>
  <hr />
</template>
