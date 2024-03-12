import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// PrimeVue Base
import PrimeVue from "primevue/config";

// PrimeVue Services
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

// PrimeVue Components
import AutoComplete from "primevue/autocomplete";
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
//import ConfirmPopup from "primevue/confirmpopup";
import ColumnGroup from "primevue/columngroup"; //optional for column grouping
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import InputSwitch from "primevue/inputswitch";
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import Listbox from "primevue/listbox";
import Menu from "primevue/menu";
import MultiSelect from "primevue/multiselect";
import ProgressBar from "primevue/progressbar";
import Row from "primevue/row"; //optional for row
import Sidebar from "primevue/sidebar";
import Skeleton from "primevue/skeleton";
import SplitButton from "primevue/splitbutton";
import TabMenu from "primevue/tabmenu";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import ToggleButton from "primevue/togglebutton";
import Toolbar from "primevue/toolbar";
import Tooltip from "primevue/tooltip";
import Tree from "primevue/tree";
import TreeTable from "primevue/treetable";
//import 'primevue/resources/themes/saga-blue/theme.css' //theme
//import 'primeflex/primeflex.css'
//import 'primevue/resources/primevue.min.css' //core css
//import 'primeicons/primeicons.css' //icons
import "@/assets/styles.scss";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  ripple: true,
  locale: {
    firstDayOfWeek: 1,
    dateFormat: "yy-mm-dd",
  },
});
app.use(ConfirmationService);
app.use(ToastService);
app.component("AutoComplete", AutoComplete);
app.component("Avatar", Avatar);
app.component("Button", Button);
app.component("Calendar", Calendar);
app.component("Checkbox", Checkbox);
app.component("Chip", Chip);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("ConfirmDialog", ConfirmDialog);
//app.component("ConfirmPopup", ConfirmPopup);
app.component("DataTable", DataTable);
app.component("Dialog", Dialog);
app.component("Divider", Divider);
app.component("Dropdown", Dropdown);
app.component("InputMask", InputMask);
app.component("InputSwitch", InputSwitch);
app.component("InputText", InputText);
app.component("Listbox", Listbox);
app.component("Menu", Menu);
app.component("MultiSelect", MultiSelect);
app.component("Row", Row);
app.component("ProgressBar", ProgressBar);
app.component("Sidebar", Sidebar);
app.component("Skeleton", Skeleton);
app.component("SplitButton", SplitButton);
app.component("TabMenu", TabMenu);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Textarea", Textarea);
app.component("Toast", Toast);
app.component("ToggleButton", ToggleButton);
app.component("Toolbar", Toolbar);
app.component("Tree", Tree);
app.component("TreeTable", TreeTable);

app.directive("tooltip", Tooltip);

app.mount("#app");
