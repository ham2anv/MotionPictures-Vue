import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPenToSquare, faCopy, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faCirclePlus, faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

library.add(faPenToSquare, faCopy, faTrashCan, faCirclePlus, faXmark, faFloppyDisk)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
