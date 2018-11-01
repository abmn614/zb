<template>
  <div class="home">
      <Swipe />
      <Grid /> 
      <List from="recommend" /> 
  </div>
</template>

<script>
// @ is an alias to /src
import Swipe from '@/components/Swipe.vue'
import Grid from '@/components/Grid.vue'
import List from '@/components/List.vue'

export default {
  name: 'home',
  components: {
      Swipe,
      Grid,
      List,
  }
}
</script>
