<template>
    <form method="post" action="api/MotionPictures" @submit="postForm">
        <div>Name: <input type="text" name="name" placeholder="Name" v-model.trim="name" /></div>
        <textarea name="description" v-model.trim="description">Description</textarea>
        <div>Release Year: <input type="text" name="year" placeholder="Release Year" v-model.number="year" /></div>
        <div><button class="btn">Create</button></div>
    </form>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
            return {
                name: "",
                description: "",
                year: ""
            }
        },
        methods: {
            async postForm(e) {
                e.preventDefault();

                let form = e.target;
                let url = form.action;

                let formData = {
                    name: this.name,
                    description: this.description,
                    year: this.year
                }
                console.log(JSON.stringify(formData));

                let fetchOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formData),
                }

                let res = await fetch(url, fetchOptions);
                this.$emit('create');
            }
        }
    });
</script>