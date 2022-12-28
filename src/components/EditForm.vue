<template>
    <form action="api/MotionPictures" @submit="postForm">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" v-model.trim="editname" required maxlength="50" />
            <div>{{ 50 - editname.length }} characters remaining.</div>
            <div class="error">This field is required.</div>
        </div>
        <div>
            <label for="description">Description</label>
            <textarea name="description" id="description" v-model.trim="editdescription" placeholder="Description" maxlength="500"></textarea>
            <div class="description-feedback">{{ 500 - editdescription.length }} characters remaining.</div>
        </div>
        <div>
            <label for="year">Release Year (YYYY)</label>
            <input type="text" name="year" id="year" placeholder="Release Year" v-model.number="edityear" required pattern="\d{4,4}" />
            <div class="error">This field is required.</div>
        </div>
        <div>
            <button class="btn"><font-awesome-icon icon="fa-solid fa-floppy-disk" /> Save</button>
            <button class="btn cancel" type="button" @click="$emit('edit')"><font-awesome-icon icon="fa-solid fa-xmark" /> Cancel</button>
            <button class="btn cancel" type="button" @click="deleter"><font-awesome-icon icon="fa-regular fa-trash-can" /> Delete</button>
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

    .description-feedback {
        margin-block-end: 2em;
    }

    input ~ div, textarea ~ div {
        margin-block: 0.5em;
        font-size: 0.8rem;
    }

    input:invalid, textarea:invalid {
        outline: 1px solid red;
    }

    input ~ .error {
        opacity: 0;
    }

    input:invalid ~ .error {
        opacity: 1;
        color: red;
    }
</style>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: ['id','name','description','year'],
        data() {
            return {
                editname: this.name,
                editdescription: this.description,
                edityear: this.year
            }
        },
        methods: {
            async postForm(e) {
                e.preventDefault();

                let url = `api/MotionPictures/${this.id}`;

                let formData = {
                    name: this.name,
                    description: this.description,
                    year: this.year
                }
                console.log(JSON.stringify(formData));

                let fetchOptions = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formData),
                }

                let res = await fetch(url, fetchOptions);
                this.$emit('edit');
            },
            async deleter() {
                let url = `api/MotionPictures/${this.id}`;
                //alert(url);
                let fetchOptions = {
                    method: 'DELETE'
                }
                let res = await fetch(url, fetchOptions);
                this.$emit('edit');
            }
        }
    });
</script>