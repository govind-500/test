<template>
  <div>
    <h1>country universities</h1>
    <b-container>
      <b-form-select v-model="value" :options="countries"></b-form-select>
      <b-button variant="danger" @click="func">submit</b-button>
      <!--<b-table :items="items" :fields="fields"></b-table>-->
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
      <b-row cols-md="7">
      <b-table id="my-table" :per-page="perPage" :current-page="currentPage" striped hover :items="items">
      <b-col ><p>university_name: {{ value.university_name }}</p></b-col>
      <b-col ><p>domains: {{ value.domains }}</p></b-col >
      <a :href="value.website_url" _target="blank">{{value.website_url }}</a>
      <b-col ><p>state_province: {{ value.state_province }}</p></b-col >
     </b-table>
     </b-row>
     </b-container>
     <b-container mt="5">
    <div class="row mt=3">
    <div class="col-md-3" v-for="value in items" :key="value.domains">
    <div class="p-2 alert alert-secondary">
    <h3>Country List</h3>
    <draggable class="list-group kanban-column" group="tasks">
    <!-- <div class="list-group-item" v-for="value in items" :key="value.domains" > -->
   <b-card id="sample2" class="mb-2">
   <b-card-text>university_name: {{ value.university_name }}
    </b-card-text>
    <p>domains: {{ value.domains }}</p>
    <a :href="value.website_url" _target="blank">{{value.website_url}}</a>
     <!-- <p @click="redirect(value.website_url)">
    website_url: {{ value.website_url }}</p> -->
     <p>state_province: {{ value.state_province }}</p>
    </b-card>
    <!-- </div> -->
    </draggable>
    </div>
   </div>
  <div class="col-md-3">
  <div class="p-2 alert alert-success">
   <h3>Country List2</h3>
  <draggable class="list-group kanban-column" :list="countries" id="sample" group="tasks">
  <div class="list-group-item" v-for="value in items" :key="value.domain"></div>
  </draggable>
   </div>
   </div>
   <div class="col-md-3">
   <div class="p-2 alert alert-primary">
   <h3>Country List3</h3>
   <draggable class="list-group kanban-column" :list="countries" id="sample" group="tasks">
   <div class="list-group-item" v-for="value in items" :key="value.domain"></div>
  </draggable>
   </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
const axios = require("axios").default;
const { getNames } = require("country-list");
import draggable from "vuedraggable";
export default {
  name: "QueS2",
  components: {
    draggable,
  },
  data() {
    return {
      perPage: 4,
      currentPage: 1,
      items: [],
      fields: [],
      value: "",
    };
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
    if (this.countries.length) this.value = this.countries[0].text;
  },
  methods: {
    async func() {
      let result = await axios.get("http://universities.hipolabs.com/search?country=" + this.value);
      let responce = await result.data;
      this.items = responce.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>
