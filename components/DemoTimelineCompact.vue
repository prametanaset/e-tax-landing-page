<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  }>(),
  {
    rounded: 'md',
  },
)

const items = [
  {
    icon: 'solar:phone-rounded-bold-duotone',
    image: undefined,
    title: 'Call Danny at Colby\'s',
    description: 'Today - 11:30am',
  },
  {
    icon: undefined,
    image: '/img/avatars/3.svg',
    title: 'Meeting with Mike',
    description: 'Today - 01:00pm',
  },
  {
    icon: 'solar:chat-dots-bold-duotone',
    image: undefined,
    title: 'Answer Annie\'s messages',
    description: 'Today - 01:45pm',
  },
  {
    icon: undefined,
    image: '/img/avatars/16.svg',
    title: 'Meeting with Hermann',
    description: 'Today - 03:00pm',
  },
  {
    icon: 'solar:letter-bold-duotone',
    image: undefined,
    title: 'Send marketing campaign',
    description: 'Today - 03:30pm',
  },
  {
    icon: 'solar:suitcase-bold-duotone',
    image: undefined,
    title: 'Project review',
    description: 'Today - 04:30pm',
  },
  {
    icon: 'solar:file-bold-duotone',
    image: undefined,
    title: 'Write proposal for Andy',
    description: 'Today - 06:30pm',
  },
]
</script>

<template>
  <div>
    <!-- Item -->
    <div
      v-for="item in items"
      :key="item.title"
      class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:content-['']"
    >
      <div
        class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']"
        :class="[
          props.rounded === 'sm' ? 'rounded-md' : '',
          props.rounded === 'md' ? 'rounded-lg' : '',
          props.rounded === 'lg' ? 'rounded-xl' : '',
          props.rounded === 'full' ? 'rounded-full' : '',
        ]"
      >
        <Icon
          v-if="item.icon"
          :name="item.icon"
          class=""
        />
        <img
          v-if="item.image"
          :src="item.image"
          class="max-w-full object-cover shadow-xs dark:border-transparent"
          :class="[
            props.rounded === 'sm' ? 'rounded-md' : '',
            props.rounded === 'md' ? 'rounded-lg' : '',
            props.rounded === 'lg' ? 'rounded-xl' : '',
            props.rounded === 'full' ? 'rounded-full' : '',
          ]"
          :alt="item.title"
        >
      </div>
      <div class="ms-10">
        <h6
          class="font-heading text-muted-900 text-sm font-medium dark:text-white"
        >
          {{ item.title }}
        </h6>
        <p class="text-muted-400 font-sans text-xs">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
