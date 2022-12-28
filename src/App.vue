<template>
    <h1 style="text-align: center">Motion Picture Data Management Application</h1>
    <div v-if="adding">
        <create-form @create="createComplete" />
    </div>
    <div v-else-if="editing">
        <edit-form :id="editPost.id" :name="editPost.name" :description="editPost.description" :year="editPost.year" @edit="editComplete" />
    </div>
    <div v-else-if="copying">
        <copy-form :id="editPost.id" :name="editPost.name" :description="editPost.description" :year="editPost.year" @copy="copyComplete" />
    </div>
    <div>
        <div class="full-right"><button class="btn" @click="toggle('adding')"><font-awesome-icon icon="fa-solid fa-circle-plus" /> Add</button></div>
        <movies-table @edit="(n) => edit(n)" @copy="(n) => copy(n)" :updateTime="updateTime" />
    </div>
</template>

<script>
import MoviesTable from './components/MoviesTable.vue'
import CreateForm from './components/CreateForm.vue'
import EditForm from './components/EditForm.vue'
import CopyForm from './components/CopyForm.vue'

export default {
    name: 'App',
    components: {
        MoviesTable,
        CreateForm,
        EditForm,
        CopyForm
    },
    data() {
        return {
            loading: false,
            adding: false,
            editing: false,
            editPost: null,
            copying: false,
            updateTime: null
        };
    },
    methods: {
        toggle(state) {
            this[state] = !this[state];
        },
        edit(movie) {
            this.editPost = movie;
            this.toggle('editing');
        },
        copy(movie) {
            this.editPost = movie;
            this.toggle('copying');
        },
        editComplete() {
            this.editPost = null;
            this.toggle('editing');
            this.updateTime = Date.now();
        },
        copyComplete() {
            this.editPost = null;
            this.toggle('copying');
            this.updateTime = Date.now();
        },
        createComplete() {
            this.toggle('adding');
            this.updateTime = Date.now();
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
