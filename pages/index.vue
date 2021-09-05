<template>
  <v-container class="text-center">
    <div class="mb-16">
      <owllogo class="mt-16"></owllogo>
      <h1>OWLEGRAM</h1>
      <p class="subtitle">Messanger & Service</p>
    </div>

    <div class="pa-19">
      <p class="privacy-policy">
        Read our <span class="primary--text">Privacy Policy</span>.Tap “Agree “
        to accept the <span class="primary--text">Terms of service</span>
      </p>
    </div>

    <v-btn color="primary">Agree</v-btn>

    <copy-right></copy-right>
  </v-container>
</template>
<script>
import CopyRight from '~/components/CopyRight.vue'
import owllogo from '~/components/owllogo.vue'
export default {
  components: { owllogo, CopyRight },
}
</script>
<style>
.subtitle {
  letter-spacing: 0.32em;
  font-size: 12px;
}
.privacy-policy {
  line-height: 41px;
  font-size: 17px;
}
</style>
