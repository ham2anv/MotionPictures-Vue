import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPenToSquare, faCopy, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPenToSquare, faCopy, faTrashCan, faCirclePlus)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
