<template>
  <v-container>
    <v-btn class="ex-secondary-btn rounded-ex back-btn">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <div class="mt-15">
      <h1 class="enp-b f27">Enter The Active Code</h1>

      <p class="f26">
        +1 435-538-2611 <v-icon color="primary" class="f25">mdi-pencil</v-icon>
      </p>
      <p class="f18">We have sent you an SMS with the code</p>
    </div>

    <v-row align="center" justify="center" class="">
      <v-col cols="3">
        <v-text-field
          class="number-input mx-auto rounded-ex f28"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          class="number-input mx-auto rounded-ex f28"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          class="number-input mx-auto rounded-ex f28"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          class="number-input mx-auto rounded-ex f28"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>

    <p class="text-center f14 mt-10">Resend Code : 01 : 55</p>
    <v-btn
      color="primary"
      x-large
      block
      class="mb-7 f20 fw-bold ex-primary-btn rounded-ex"
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
  border: 1px solid #D9DCE3

.number-input
  width: 74px !important
  height: 74px !important

.number-input input
  text-align: center !important
</style>
