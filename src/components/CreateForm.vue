<template>
    <form method="post" action="api/MotionPictures" @submit="postForm">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" v-model.trim="name" required maxlength="50" />
            <div>This field is required. Maximum length: 50 characters.</div>
        </div>
        <div>
            <label for="description">Description</label>
            <textarea name="description" v-model.trim="description" placeholder="Description" maxlength="500"></textarea>
        </div>
        <div>
            <label for="year">Release Year</label>
            <input type="text" name="year" id="year" placeholder="Release Year" v-model.number="year" required pattern="\d{4,4}" />
            <div>This field is required. Must be exactly 4 digits.</div>
        </div>
        <div>
            <button class="btn">Save</button>
            <button class="btn cancel" type="button" @click="$emit('create')">Cancel</button>
        </div>
    </form>
</template>

<style>
    label {
        display: block;
        font-weight: bold;
        margin-block: 0.5em;
    }

    .btn {
        margin-block: 0.5em;
    }

    .cancel {
        background-color: red !important;
        margin-inline-start: 0.5em;
    }

    input:not(:valid), textarea:not(:valid) {
        outline: 1px solid red;
    }

    :valid + div {
        opacity: 0;
    }

    :where(input:not(:valid), textarea:not(:valid)) + div {
        color: red;
        margin-block: 0.5em;
        font-size: 0.8rem;
    }
</style>

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