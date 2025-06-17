<script setup lang="ts">
useHead({
  title: 'My page',
})

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <BaseCard class="p-6 w-full max-w-md">
      <BaseHeading size="2xl">Hello Tairo!</BaseHeading>
      <BaseParagraph class="mb-4">{{ count }}</BaseParagraph>
      <BaseButton variant="primary" @click="count++">Click me</BaseButton>
    </BaseCard>
  </div>
</template>