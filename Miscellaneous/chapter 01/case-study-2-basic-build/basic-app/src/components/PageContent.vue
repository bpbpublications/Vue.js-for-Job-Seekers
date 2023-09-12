<template>
  <div class="h-5/6 py-8 px-4">
    <ContentComponent>
      <div>Slot Content</div>
    </ContentComponent>
    <ContentComponent>
      <div>Slot Content</div>
    </ContentComponent>
    <FormComponent :name="formData.name" :email="formData.email" />
  </div>
</template>

<script>
import ContentComponent from './ContentComponent.vue'
import FormComponent from './FormComponent.vue'

export default {
  components: { 
    ContentComponent,
    FormComponent
  },
  name: 'PageContent',
  data () {
    return {
      formData: {
        name: 'name',
        email: 'name@email.test'
      }
    }
  }
}
</script>
