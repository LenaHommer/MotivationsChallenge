<template>
  <TheHomeLayout>
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <h3>Deine Profildaten</h3>
        </div>
        <div class="form row">
          <label for="anrede" class="form-label">Anrede</label>
          <select class="form-control" id="anrede">
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
          />
        </div>
        <div class="form row mt-2">
          <label for="vorname" class="form-label">Vorname</label>
          <input
            type="text"
            class="form-control"
            id="vorname"
            placeholder="Vorname"
          />
        </div>
        <div class="form row mt-2">
          <label for="geburtsdatum" class="form-label">Geburtsdatum</label>
          <input
            type="date"
            class="form-control"
            id="geburtsdatum"
            placeholder="Vorname"
          />
        </div>
        <div class="form row mt-2">
          <label for="ort" class="form-label">Ort</label>
          <input type="text" class="form-control" id="ort" placeholder="Ort" />
        </div>
        <div class="form row mt-2">
          <label for="plz" class="form-label">PLZ</label>
          <input type="text" class="form-control" id="plz" placeholder="PLZ" />
        </div>
        <div class="form row mt-2">
          <label for="adresse" class="form-label">Adresse</label>
          <input
            type="text"
            class="form-control"
            id="adresse"
            placeholder="Adresse"
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

export default {
  name: "ProfileSheet",
  components: {
    TheHomeLayout,
  },
  methods: {
    createProfile() {},
  },
};
</script>

<style scoped></style>
