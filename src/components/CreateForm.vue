<template>
    <dialog open>
        <form method="post" action="api/MotionPictures" @submit="postForm">
            <div class="input-line">
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" v-model.trim="name" required maxlength="50" />
                    <div>{{ 50 - name.length }} characters remaining.</div>
                    <div class="error">This field is required.</div>
                </div>
                <div>
                    <label for="year">Release Year (YYYY)</label>
                    <input type="text" name="year" id="year" placeholder="Release Year" v-model.number="year" required pattern="\d{4,4}" />
                    <div class="error">This field is required.</div>
                </div>
            </div>
            <div>
                <label for="description">Description</label>
                <textarea name="description" id="description" v-model.trim="description" placeholder="Description" maxlength="500"></textarea>
                <div class="description-feedback">{{ 500 - description.length }} characters remaining.</div>
            </div>
            
            <div>
                <button class="btn"><font-awesome-icon icon="fa-solid fa-floppy-disk" /> Save</button>
                <button class="btn cancel" type="button" @click="canceler"><font-awesome-icon icon="fa-solid fa-xmark" /> Cancel</button>
            </div>
        </form>
    </dialog></template>

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

    .input-line {
        display: flex;
    }
    .input-line div:not(:first-child) {
        margin-inline-start: 1em;
    }
    textarea {
        width: 100%;
        height: 6em;
    }
</style>

<script>
    import { defineComponent } from 'vue';
    import {useToast} from 'vue-toast-notification';
    import 'vue-toast-notification/dist/theme-default.css';
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

                let fetchOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formData),
                }

                let res = await fetch(url, fetchOptions);
                const $toast = useToast();
                if (res.ok) {
                    const createSuccess = $toast.success("Entry created successfully.", { position: 'top-right' });
                } else {
                    const createFail = $toast.error("Entry was not created.", { position: 'top-right' });
                }
                this.$emit('create');
            },
            canceler() {
                const $toast = useToast();
                const cancelToast = $toast.info("New entry canceled.", { position: 'top-right' })
                this.$emit('create');
            }
        }
    });
</script>