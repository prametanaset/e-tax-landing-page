<script setup lang="ts">
const currencies = [
  {
    id: 0,
    name: 'LTC',
    fullName: 'Litecoin',
    icon: 'cryptocurrency:ltc',
  },
  {
    id: 1,
    name: 'ETH',
    fullName: 'Ethereum',
    icon: 'cryptocurrency:eth',
  },
  {
    id: 2,
    name: 'BELA',
    fullName: 'Belacoin',
    icon: 'cryptocurrency:bela',
  },
  {
    id: 4,
    name: 'XBY',
    fullName: 'Xtrabytes',
    icon: 'cryptocurrency:xby',
  },
]
</script>

<template>
  <div class="mb-2 space-y-5">
    <div
      v-for="currency in currencies"
      :key="currency.id"
      class="flex items-center gap-3"
    >
      <div
        class="border-muted-200 dark:border-muted-700 flex size-10 items-center justify-center rounded-full border"
      >
        <Icon :name="currency.icon" class="text-muted-400 size-7" />
      </div>
      <div>
        <BaseHeading
          as="h4"
          size="xs"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>{{ currency.name }}</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-400">{{ currency.fullName }} token</span>
        </BaseParagraph>
      </div>
      <div class="ms-auto flex items-center">
        <BaseButton
          rounded="lg"
          variant="muted"
          size="icon-md"
          class="scale-75"
        >
          <Icon name="lucide:arrow-right" class="size-5" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
