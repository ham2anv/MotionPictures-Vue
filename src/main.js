import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPenToSquare, faCopy, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faCirclePlus, faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css';

library.add(faPenToSquare, faCopy, faTrashCan, faCirclePlus, faXmark, faFloppyDisk)

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');

const $toast = useToast();