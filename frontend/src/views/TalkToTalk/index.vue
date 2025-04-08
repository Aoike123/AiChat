<template>
  <div class="talk_to_talk">
    <div class="header"></div>
    <div class="body">
      <div class="nvabar"></div>
      <div class="main"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TalkToTalk',

  data() {
    return {
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style scoped>
.talk_to_talk {
  display: grid;
  grid-template-rows: 60px 1fr;
  width: 100%;
  height: 100vh;
  background-color: #5d4f4f;
}

.header {
  width: 100%;
  height: 60px;
  background: #970909;
}

.body {
  display: grid;
  grid-template-columns: 200px 1fr;
  background: #000;
}

.nvabar {

  background: #333;
}

.main {
  background: #1a1a1a;
}
</style>