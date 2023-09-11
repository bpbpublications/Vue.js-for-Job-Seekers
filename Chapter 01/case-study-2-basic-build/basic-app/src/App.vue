<template>
  <div class="container mx-auto">
    <header class="w-full">
      <PageHeader />
    </header>
    <div class="flex space-x-4">
      <div class="w-1/6">
        <SideMenu />
      </div>
      <div class="w-5/6">
        <PageContent />
      </div>
    </div>
    <footer class="w-full">
      <PageFooter />
    </footer>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import SideMenu from './components/SideMenu.vue'
import PageContent from './components/PageContent.vue'

export default {
  name: 'App',
  components: {
   PageHeader,
   PageFooter,
   SideMenu,
   PageContent
  }
}
</script>
