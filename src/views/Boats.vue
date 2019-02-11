<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-client-table :columns="columns" :data="data" :options="options">

    </v-client-table>
  </div>
</template>


<script>
import axios from 'axios'
    export default {
        data(){
            return{
            info: [],
            columns: [
                "name",
                "type",
                "port",
                "status",
                "length",
                "draft",
            ],
            data: [],
            options: {
                headings: {
                    name: "name",
                    type: "type",
                    port: "port",
                    status: "status",
                    length: "length",
                    draft: "draft",
                },
                sortable: ['name', 'status', 'port'],
                filterable: false,
                perPage: 100
            }
        }
      },
        methods: {
            getBoats(){
                axios
                    .get('https://boatpilot.me/boatgod/api/rest/boats')
                    .then(response => (this.data = response.data));
            }
        },
        mounted() {
            this.getBoats();
        }
    }



</script>
