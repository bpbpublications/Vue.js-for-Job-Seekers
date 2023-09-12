<template>
  <div class="py-8 px-4 border-r border-gray-200">
    <nav class="list-none flex flex-col justify-between space-y-6">
      <li v-for="i in items" :key="i">{{ i }}</li>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data () {
    return {
      items: [
        'Main 1',
        'Main 2',
        'Main 3',
        'Main 4'
      ]
    }
  }
}
</script>
