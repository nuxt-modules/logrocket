<template>
  <div>
    <p>Nuxt LogRocket</p>

    <button @click="captureMessage()">
      capture Message
    </button>

    <button @click="captureException()">
      capture Exception
    </button>
  </div>
</template>

<script lang="ts" setup>
const { $logRocket } = useNuxtApp()

function captureException () {
  $logRocket.captureException(new Error('error prototype: ' + Date.now()))
}

function captureMessage () {
  $logRocket.captureMessage('message prototype: ' + Date.now())
}

</script>
