<template>
  <div class="page">
    <v-container class="d-flex flex-column px-6 page">
      <v-row class="mt-5 mx-0">
        <v-col class="px-0" cols="7">
          <owllogo class="login-logo" height="89.88"></owllogo>
          <h1 class="enp-b f21 ma-0 ex-app-title">
            OWLEGERAM <span class="f14">App</span>
          </h1>
          <p class="enp-l f12 ma-0">Messanger & Service</p>
        </v-col>
        <v-col class="px-0" cols="5">
          <v-select
            outlined
            dense
            class="rounded-pill float-right mt-4 ml-8 country-select"
            label="ENG"
          ></v-select>
        </v-col>
      </v-row>

      <p v-if="mobileLogin" class="f19 confirm-number mt-16 mb-10" dir="ltr">
        Please confirm your country code and enter your phone number
      </p>
      <p v-else class="f19 confirm-number mt-16 mb-10" dir="ltr">
        Please Enter your Email or Login with Google Account
      </p>

      <v-text-field
        :label="mobileLogin ? 'Phone Number' : 'Email Account'"
        :placeholder="
          !mobileLogin ? 'Enter Email account ex, Gmail , yahoo' : ''
        "
        class="rounded-12 ex-phone-input"
        outlined
      ></v-text-field>

      <p class="text-center mb-7 f14">
        {{ mobileLogin ? 'Carrier SMS charge may apply' : '‎‎‎' }}
      </p>

      <nuxt-link to="/PhoneVerify">
        <v-btn
          color="primary"
          x-large
          block
          class="mb-7 f20 ex-primary-btn rounded-12 next-btn"
        >
          Next
        </v-btn>
      </nuxt-link>

      <p class="f14 my-2 text-center">Or</p>

      <v-row align="center" justify="space-around" class="mb-auto">
        <v-col cols="6">
          <v-btn block x-large class="f12 px-1 rounded-12 ex-secondary-btn">
            <v-icon class="mr-2">mdi-google</v-icon>
            Login with Google
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            v-if="mobileLogin"
            block
            x-large
            class="f12 px-1 rounded-12 ex-secondary-btn"
            @click="mobileLogin = false"
          >
            <v-icon class="mr-2">mdi-email</v-icon>
            Login with Email
          </v-btn>
          <v-btn
            v-else
            block
            x-large
            class="f12 px-1 rounded-12 ex-secondary-btn"
            @click="mobileLogin = true"
          >
            <v-icon class="mr-2">mdi-phone</v-icon>
            Login with Phone
          </v-btn>
        </v-col>
      </v-row>

      <CopyRight />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* var to check login with mobile or email */
      mobileLogin: true,
    }
  },
}
</script>

<style lang="sass">
.confirm-number
  line-height:23px

.ex-app-title
  // height:42px !important
  display: inline-block !important

.ex-phone-input
  max-height: 86px

.next-btn
  font-weight: 700 !important
</style>
