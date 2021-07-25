<template>
  <div class="report" :class="{ active }" :style="{ top: y, left: x }" @click="onClick">
      <img v-if="type === 'veiligheid'" alt="Melding" src="../assets/veiligheid.png">
      <img v-else-if="type === 'informatie'" alt="Melding" src="../assets/informatie.png">
      <img v-else alt="Melding" src="../assets/controle.png">
  </div>
</template>

<script>

export default {
  name: 'Report',
  props: {
    id: Number,
    location1: String,
    location2: String,
    type: String,
    status: String,
    prio: String,
    x: String,
    y: String,
    active: Boolean,
  },
  methods: {
    onClick: function () {
        this.$emit('reportClicked', {type: this.type, status: this.status, prio: this.prio, id: this.id});
    }
  }
}
</script>

<style scoped>
    .report{
        position: absolute;
        width:50px;
        height:50px;
        cursor: pointer;
    }

    .report.active{
        border-radius: 100%;
        background: white;
    }
</style>
