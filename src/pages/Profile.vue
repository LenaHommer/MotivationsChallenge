<template>
<TheHomeLayout>
  <div class="container mt-4">
    <div class="row">
        <div class="col-12">
        <h3>Deine Profildaten</h3>
        </div>
        </div>
        <div class="form-group">
            <label for="anrede" class="form-label">Anrede</label>
            <select class="form-control" id="anrede" v-model="profile.anrede">
      <option>Frau</option>
      <option>Herr</option>
            </select>
        </div>
        <div class="form-group mt-2">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" v-model="profile.name">
        </div>
        <div class="form-group mt-2">
            <label for="vorname" class="form-label">Vorname</label>
            <input type="text" class="form-control" id="vorname" placeholder="Vorname" v-model="profile.vorname">
        </div>
        <div class="form-group mt-2">
            <label for="geburtsdatum" class="form-label">Geburtsdatum</label>
            <input type="date" class="form-control" id="geburtsdatum" placeholder="Vorname" v-model="profile.geburtsdatum">
        </div>
        <div class="form-group mt-2">
            <label for="ort" class="form-label">Ort</label>
            <input type="text" class="form-control" id="ort" placeholder="Ort" v-model="profile.ort">
        </div>
        <div class="form-group mt-2">
            <label for="plz" class="form-label">PLZ</label>
            <input type="text" class="form-control" id="plz" placeholder="PLZ" v-model="profile.plz">
        </div>
        <div class="form-group mt-2">
            <label for="adresse" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="adresse" placeholder="Adresse" v-model="profile.adresse">
        </div>
        <div class="col-3 mt-4">
        <div class="d-grid">
            <button class="btn bg-vue2" @click="submit">Speichern</button>
        </div>
        </div>
    
    </div>
</TheHomeLayout>

</template>

<script>
import TheHomeLayout from '../layouts/TheHomeLayout.vue';
import db from '../firebase';
//import { addDoc, collection } from "firebase/firestore"; 

export default {
    name: "Profile",
    components: {
        TheHomeLayout,
    },
    data() {
     return{
        profile: {
        anrede: null,
        name: null,
        vorname: null,
        geburtsdatum: null,
        ort: null,
        plz: null,
        adresse: null,
        }
     };
    },
    methods: {
        submit(){
        db.collection("cities").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
},
}
</script>

<style scoped>

</style>