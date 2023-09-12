<template>
  <div>
    <div class="mb-4">
      <p class="mb-6 font-black text-xl">Data Collection Form</p>
    <label>
      <span class="font-semibold mr-2">Name</span>
      <input :value="name" name="name" class="border border-purple-200 rounded-2xl px-4 py-2" />
    </label>
    </div>
    <div>
    <label>
      <span class="font-semibold mr-2">Email</span>
      <input type="email" :value="email" name="email" class="border border-purple-200 rounded-2xl px-4 py-2" />
    </label>
    </div>
    <div class="flex pl-24">
    <button class="bg-purple-200 border rounded-lg border-purple-700 text-purple-700 px-4 py-2 mt-4" @click.prevent="submitChange">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  methods: {
    submitChange () {
      alert(`You're updating ${this.name} and ${this.email}`)
    }
  }
}
</script>
