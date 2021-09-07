<template>
  <v-container class="d-flex flex-column px-6 page">
    <nuxt-link to="/">
      <v-btn class="ex-secondary-btn rounded-10 back-btn mt-12">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </nuxt-link>

    <div class="mt-15">
      <h1 class="enp-b f27 mt-4 mb-6">Enter The Active Code</h1>

      <p class="f26 mb-2">
        +1 435-538-2611 <v-icon color="primary" class="f25">mdi-pencil</v-icon>
      </p>
      <p class="f18">We have sent you an SMS with the code</p>
    </div>
    <div>
      <v-row
        id="number-input-row"
        align="center"
        justify="center"
        class="mx-0 mt-14"
      >
        <v-col cols="3">
          <v-text-field
            class="number-input mx-auto rounded-12 f28"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            class="number-input mx-auto rounded-12 f28"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            class="number-input mx-auto rounded-12 f28"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            class="number-input mx-auto rounded-12 f28"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-0">
          <p class="text-center f14 mb-14">Resend Code : 01 : 55</p>
        </v-col>
      </v-row>
    </div>

    <v-btn
      color="primary"
      x-large
      block
      class="mb-auto f20 fw-bold ex-primary-btn rounded-12"
    >
      Accept
    </v-btn>

    <CopyRight />
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="sass">
.back-btn
  border: 1px solid #D9DCE3 !important
  max-width:40px !important
  max-height:40px !important
  min-width: 0 !important

.number-input
  min-width: 75px !important
  max-width: 75px !important

.number-input .v-input__slot
  height: 75px !important

#number-input-row
  max-height: 190px !important

#number-input-row .col
  padding: 0

.number-input input
  text-align: center !important
</style>
