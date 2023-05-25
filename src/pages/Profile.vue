<template>
  <TheHomeLayout>
    <div class="container mt-4">
      <div class="row">
        <div class="mt-16 col-12">
          <h3>Deine Profildaten</h3>
        </div>
        <div class="form row">
          <label for="anrede" class="form-label">Anrede</label>
          
          <select class="form-control" id="anrede" v-model="anrede">
            <option>Frau</option>
            <option>Herr</option>
          </select>
        </div>
        <div class="form row mt-2">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
            v-model="name"
          />
        </div>
        <div class="form row mt-2">
          <label for="vorname" class="form-label">Vorname</label>
          <input
            type="text"
            class="form-control"
            id="vorname"
            placeholder="Vorname"
            v-model="vorname"
          />
        </div>
        <div class="form row mt-2">
          <label for="geburtsdatum" class="form-label">Geburtsdatum</label>
          <input
            type="date"
            class="form-control"
            id="geburtsdatum"
            placeholder="Vorname"
            v-model="geburtsdatum"
          />
        </div>
        <div class="form row mt-2">
          <label for="ort" class="form-label">Ort</label>
          <input type="text" class="form-control" id="ort" placeholder="Ort" v-model="ort"/>
        </div>
        <div class="form row mt-2">
          <label for="plz" class="form-label">PLZ</label>
          <input type="text" class="form-control" id="plz" placeholder="PLZ" v-model="plz"/>
        </div>
        <div class="form row mt-2">
          <label for="adresse" class="form-label">Adresse</label>
          <input
            type="text"
            class="form-control"
            id="adresse"
            placeholder="Adresse"
            v-model="adresse"
          />
        </div>
        <div class="col-3 mt-4">
          <div class="d-grid">
            <button class="btn bg-vue2" @click="createProfile()">
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  </TheHomeLayout>
</template>

<script>
import TheHomeLayout from "../layouts/TheHomeLayout.vue";
import { collection, addDoc } from "firebase/firestore"; 
import db from "../firebase";


export default {
  name: "ProfileSheet",
  components: {
    TheHomeLayout,
  },
  data() {
    return {
        anrede: "",
        name: "",
        vorname: "",
        geburtsdatum: "",
        ort: "",
        plz: "",
        adresse: "",
    };
  },
  methods: {
   async createProfile() {
    try {
      const docRef = await addDoc(collection(db, "profiles"), {
        anrede: this.anrede,
        name: this.name,
        vorname: this.vorname,
        geburtsdatum: this.geburtsdatum,
        ort: this.ort,
        plz: this.plz,
        adresse: this.adresse,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    this.anrede = "",
    this.name = "",
    this.vorname = "",
    this.geburtsdatum= "",
    this.ort="",
    this.plz="",
    this.adresse=""
    },
  },

};

</script>

<style scoped></style>
