<template>
  <section class="container">
    <div>
      <app-logo/>
      <div class="hero">
        <div class="hero-head">
          <div class="title">YEAH
          </div>
        </div>
        <p>{{ $t('home.title') }}</p>

        <p class="is-link"><nuxt-link to="/about">about</nuxt-link></p>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    padding: 50px;
    text-align: center;
    a {
      color: red;
      font-weight: bold;
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      text-indent: 0.25em;
    }
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
