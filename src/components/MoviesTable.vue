<template>
    <div class="post">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="post" class="content">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Release Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="movie in post" :key="movie.id">
                        <td style="text-align: center">{{ movie.name }}</td>
                        <td>{{ movie.description }}</td>
                        <td style="text-align: center">{{ movie.year }}</td>
                        <td>
                            <span @click="alerter" style="padding-inline:4px"><font-awesome-icon icon="fa-regular fa-pen-to-square" /> </span>
                            <span @click="copier(movie)" style="padding-inline:4px"><font-awesome-icon icon="fa-regular fa-copy" /> </span>
                            <span @click="deleter(movie.id)" style="color: red"><font-awesome-icon icon="fa-regular fa-trash-can" /></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        border-block: 2px solid black;
    }

    th {
        border-block-end: 2px solid #888;
        padding-block: 0.5em;
    }

    td {
        border-block-end: 1px solid #eee;
        padding-block: 0.5em;
    }

</style>

<script lang="js">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
            return {
                loading: false,
                post: null
            };
        },
        created() {
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData();
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                this.post = null;
                this.loading = true;

                fetch('https://localhost:5001/api/MotionPictures')
                    .then(r => r.json())
                    .then(json => {
                        this.post = json;
                        this.loading = false;
                        return;
                    });
            },
            alerter() {
                alert("testing");
            },
            async deleter(n) {
                let url = `api/MotionPictures/${n}`;
                let fetchOptions = {
                    method: 'DELETE'
                }
                let res = await fetch(url,fetchOptions);

                this.fetchData();
            },
            async copier(movie) {
                let url = 'api/MotionPictures';
                let movieData = {
                    name: movie.name,
                    description: movie.description,
                    year: movie.year
                }
                let fetchOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(movieData)
                }
                let res = await fetch(url,fetchOptions);

                this.fetchData();
            }
        },
    });
</script>