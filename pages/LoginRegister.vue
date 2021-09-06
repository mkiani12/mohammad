<template>
  <v-container>
    <v-row align="center" justify="center" class="mt-5">
      <v-col cols="6">
        <owllogo class="login-logo"></owllogo>
        <h2 class="enp-b">OWLEGERAM <span class="f20">App</span></h2>
      </v-col>
      <v-col cols="6">
        <v-select
          outlined
          class="rounded-pill float-right mr-8 country-select"
          label="ENG"
        ></v-select>
      </v-col>
    </v-row>

    <p class="f19 confirm-number my-16 ml-6" dir="ltr">
      Please confirm your country code and enter your phone number
    </p>

    <v-text-field label="Phone Number" outlined></v-text-field>

    <p class="text-center f14">Carrier SMS charge may apply</p>

    <v-btn
      color="primary"
      x-large
      block
      class="mb-7 f20 ex-primary-btn rounded-ex next-btn"
    >
      Next
    </v-btn>

    <p class="f14 text-center">Or</p>

    <v-row align="center" justify="center" class="mb-auto">
      <v-col cols="6">
        <v-btn class="py-9">
          <v-icon class="mr-2">mdi-google</v-icon>
          Login with google
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn class="py-9">
          <v-icon class="mr-2">mdi-email</v-icon>
          Login with Email
        </v-btn>
      </v-col>
    </v-row>

    <CopyRight />
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="sass">
.country-select
  width:45%

.confirm-number
  line-height:23px

.next-btn
  font-weight: 700 !important

.login-logo
    width:65%
</style>
