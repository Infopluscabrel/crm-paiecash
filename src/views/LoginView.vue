<template>
   <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt="">
                  <span class="d-none d-lg-block">CRM Paiecash</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Se connecter a son compte</h5>
                    <p class="text-center small">Entrez vos paramètres de connexion</p>
                  </div>

                  <Form @submit="handleLogin" :validation-schema="schema" v-slot="{ values }" class="row g-3 needs-validation" novalidate id="userLogin">
                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Nom utilisateur</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend"><b>@</b></span>
                        <Field type="text" name="username" placeholder="Nom utilisateur" class="form-control" id="yourUsername"/>
                        <ErrorMessage name="username" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Mot de passe</label>
                      <Field type="password" name="password" class="form-control" placeholder="Mon mot de passe" id="yourPassword"/>
                      <ErrorMessage name="password" class="invalid-feedback"/>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <Field class="form-check-input" type="checkbox" name="remember" :value="true" id="rememberMe"/>
                        <label class="form-check-label" for="rememberMe">Se souvenir de moi</label>
                      </div>
                    </div>
                    <div class="col-12">
                        <div class="input-group has-validation">
                          <button class="btn btn-primary w-100" type="submit" id="">
                                Se connecter
                                <span v-show="loading" class="spinner-border spinner-border-sm spinner-responsive"></span>
                          </button>
                        </div>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Don't have account? <a href="pages-register.html">Devenir Distributeur</a></p>
                    </div>
                    <div class="form-group">
                      <div v-if="message" class="alert alert-danger" role="alert">
                        {{ message }}
                      </div>
                    </div>
                  </Form>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  </main><!-- End #main -->
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Veuillez spécifier votre nom d'utilisateur!"),
      password: yup.string().required("Veuillez spécifier votre mot de passe!"),
    });

    return {
      loading: false,
      message: "",
      seen: false,
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/home");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
       () => {
          this.$router.push({ name: "home"});
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style>
.spinner-responsive{
    float: right;
    margin-top: 5px;
  }
</style>