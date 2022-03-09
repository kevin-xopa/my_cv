<template>
  <v-card
    class="card-template "
    rounded="lg"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-card
        elevation="8"
        class=" my-12 ml-16"
        width="450"
      >
        <v-img src="@/assets/UTP0009952_Kevin Ochoa Xop.jpg"></v-img>

        <v-row class="justify-center mb-2">
          <v-card-title class="text-center text-h3">Kevin Ochoa Xopa</v-card-title>
          <v-card-text class="text-center text-h6">
            Ing Desarrollo y Gestion de software
          </v-card-text>
          <v-card-text>
            <v-row
              align="center"
              justify="space-around"
            >
              <a
                href="https://github.com/kevin-xopa"
                target="_blank"
              >
                <v-icon>
                  {{icons.mdiGithub}}
                </v-icon>
              </a>
              <a
                href="https://gitlab.com/kevin-xopa"
                target="_blank"
              >
                <v-icon>
                  {{icons.mdiGitlab}}
                </v-icon>
              </a>
              <a
                href="https://twitter.com/XopaKevin"
                target="_blank"
              >
                <v-icon color="blue">
                  {{icons.mdiTwitter}}
                </v-icon>
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-ochoa-xopa-88a454219/"
                target="_blank"
              >
                <v-icon color="blue">
                  {{icons.mdiLinkedin}}
                </v-icon>
              </a>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
            >
              Descargar cv
            </v-btn>
            <v-btn
              color="deep-purple lighten-2"
              text
            >
              Contactarme
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
      <div class="my-12 mr-16 blue-grey lighten-3">
        <v-toolbar
          rounded
          prominent
          elevation="0"
          color="blue-grey lighten-3"
          dark
        >
          <v-card-title class="text-h4 black--text">Sobre mi</v-card-title>
        </v-toolbar>
        <v-row class="mr-16">
          <v-col cols="6">
            <v-card-text class="text-h6 text-justify">
              <div>Hola, soy Kevin Ochoa Xopa</div>
              Desarrollador de software, con experiencia en tecnologías como PHP, JS, C#, Python, Laravel y Vue.js.
              Apasionado por la tecnología, buscando sus ventajas para
              desarrollar de manera más precisa y fácil, buscando la
              mejora en los múltiples ambientes, con un sentido de intuición para la solución de problemas.
            </v-card-text>
          </v-col>
          <v-col cols="6">
            <div>Edad: 21 años</div>
            <div>Residencia: Mexico</div>
          </v-col>
          <v-col cols="6">
            <v-card-title>
              EDUCACIÓN
            </v-card-title>
            <div class="text-subtitle2">
              <div class="font-weight-bold">Universidad Tecnológica de Puebla</div>
              2018 – 2020
              <br>
              Técnico Superior Universitario en Tecnologías de la Información Área Desarrollo de Software Multiplataforma
            </div>
            <br><br>
            <div class="font-weight-bold">Universidad Tecnológica de Puebla</div>
            2020 - Presente
            <br>
            Ingeniería en Desarrollo y Gestión de Software
          </v-col>
          <v-col cols="6">
            <v-card-title>
              EXPERIENCIA LABORAL
            </v-card-title>
            <div class="text-subtitle2">
              <div class="font-weight-bold">
                Desarrollador de software
              </div>
              2021
              <div class="text-justify">
                Desarrollo de aplicación web para una pequeña empresa para la administración, venta de productos y gestión de ventas, trabajando en tecnologías Laravel y Vue.js
              </div>
            </div>
            <br><br>
            <div class="font-weight-bold">
              Impartición de curso de robótica
            </div>
            2021
            <div class="text-justify">
              Participación en curso de robótica, desarrollando programas para la solución de problemas con ayuda de los mismos, impartiendo asesorías alumnos de la Universidad Tecnológica de Puebla
            </div>

          </v-col>
        </v-row>

      </div>
    </div>
  </v-card>
</template>

<script>
import { mdiGithub, mdiTwitter, mdiLinkedin, mdiGitlab } from "@mdi/js";
export default {
  data: () => ({
    loading: false,
    selection: 1,
    icons: {
      mdiGithub,
      mdiTwitter,
      mdiLinkedin,
      mdiGitlab,
    },
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style lang="css" scoped>
.card-template {
  background-image: radial-gradient(
    circle at 36.32% -1.05%,
    #bde9ac 0,
    #ace6ac 10%,
    #98e3ad 20%,
    #82dfae 30%,
    #67dab0 40%,
    #42d4b3 50%,
    #00ceb7 60%,
    #00c8bd 70%,
    #00c3c4 80%,
    #00becd 90%,
    #00b9d5 100%
  );
}
</style>