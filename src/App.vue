<template>
    <h1 style="text-align: center">Motion Picture Data Management Application</h1>
    <div v-if="adding">
        <create-form @create="toggle('adding')" />
    </div>
    <div v-else>
        <div class="full-right"><button class="btn" @click="toggle('adding')"><font-awesome-icon icon="fa-solid fa-circle-plus" /> Add</button></div>
        <movies-table />
    </div>
</template>

<script>
import MoviesTable from './components/MoviesTable.vue'
import CreateForm from './components/CreateForm.vue'

export default {
    name: 'App',
    components: {
        MoviesTable,
        CreateForm
    },
    data() {
        return {
            loading: false,
            adding: false,
        };
    },
    methods: {
        toggle(state) {
            this[state] = !this[state];
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
    background-color: #088cff;
    color: white;
    font-weight: bold;
    padding-inline: 6px;
    padding-block: 4px 5px;
    border-radius: 5px;
    border-color: transparent;
    cursor: pointer;
}

.full-right {
    display: flex;
    justify-content: end
}
</style>
