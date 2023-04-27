<template>
  <div>
    <div class="row">
      <div class="col-12 text-center">
        <h2>Jetzt registrieren</h2>
        <p>
          oder
          <a class="text-vue2" role="button" @click="changeComponent('login')"
            >melden Sie sich mit Ihrem Konto an.</a
          >
        </p>
      </div>
    </div>

    <div class="aler alert-danger col-md-12" v-if="error">
      {{ errorDisplayText }}
    </div>
    <VeeValidateForm
      @submit="submitData"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <div class="form-row">
        <div class="form-group col-md-4 offset-md-4">
          <label for="email"><strong>E-Mail-Adresse</strong></label>
          <Field
            as="input"
            name="email"
            type="email"
            class="form-control"
            id="email"
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-4 offset-md-4">
          <label for="password"><strong>Passwort</strong></label>
          <Field
            as="input"
            name="password"
            type="password"
            class="form-control"
            id="password"
          />
          <small class="text-danger" v-if="errors.password">{{
            errors.password
          }}</small>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-4 offset-md-4">
          <label for="confirmpassword"
            ><strong>Passwort wiederholen</strong></label
          >
          <Field
            as="input"
            name="confirmpassword"
            type="password"
            class="form-control"
            id="confirmpassword"
          />
          <small class="text-danger" v-if="errors.confirmPassword">{{
            errors.confirmPassword
          }}</small>
        </div>
      </div>

      <div class="form-row mt-3">
        <div class="form-group col-md-4 offset-md-4">
          <div class="d-grid">
            <button class="btn bg-vue2">
              <span v-if="!isLoading">Registrieren</span>
              <span v-else class="spinner-border spinner-border-small"></span>
            </button>
          </div>
        </div>
      </div>
    </VeeValidateForm>
  </div>
</template>

<script>
import { Form as VeeValidateForm, Field } from "vee-validate";
import * as yup from "yup";

export default {
  name: "RegisterSheet",
  components: {
    VeeValidateForm,
    Field,
  },
  emits: {
    "change-component": (payload) => {
      if (payload.componentName !== "login") {
        return false;
      }
      return true;
    },
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("E-mail Adresse wird benötigt.")
        .trim()
        .email("Das ist keine gültige E-Mail Adresse."),
      password: yup
        .string()
        .required("Ein Passwort wird benötigt.")
        .min(6, "Das Passwort muss mindestens 6 Zeichen lang sein."),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwörter stimmen nicht überein."),
    });
    return {
      schema,
      error: "",
      isLoading: false,
    };
  },
  computed: {
    errorDisplayText() {
      if (this.error) {
        if (this.error.includes("EMAIL_EXISTS")) {
          return "Die E-Mail Adresse existiert bereits";
        }
        return "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es noch einmal";
      }
      return "";
    },
  },
  methods: {
    submitData(values) {
      this.isLoading = true;
      this.error = "";
      this.$store
        .dispatch("signup", {
          email: values.email,
          password: values.password,
        })
        .then(() => {
          this.isLoading = false;
          this.changeComponent("login");
        })
        .catch((error) => {
          this.error = error.message;
          this.isLoading = false;
        });
    },
    changeComponent(componentName) {
      this.$emit("change-component", { componentName });
    },
  },
};
</script>

<style scoped></style>
