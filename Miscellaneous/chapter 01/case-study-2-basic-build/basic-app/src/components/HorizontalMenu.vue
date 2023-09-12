<template>
  <nav class="list-none flex flex-row justify-between space-x-4">
    <li v-for="i in items" :key="i">{{i}}</li>
  </nav>
</template>

<script>
export default {
  name: 'HorizontalMenu',
  data () {
    return {
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ]
    }
  }
}
</script>
