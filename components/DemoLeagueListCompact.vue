<script setup lang="ts">
const leagues = [
  {
    id: 0,
    name: 'Ligue 1',
    location: 'France',
    logo: '/img/icons/soccer/leagues/ligue-1.svg',
    matches: 5,
  },
  {
    id: 1,
    name: 'La Liga',
    location: 'Spain',
    logo: '/img/icons/soccer/leagues/laliga.svg',
    matches: 3,
  },
  {
    id: 2,
    name: 'Liga',
    location: 'Portugal',
    logo: '/img/icons/soccer/leagues/liga.svg',
    matches: 7,
  },
  {
    id: 3,
    name: 'Bundesliga',
    location: 'Germany',
    logo: '/img/icons/soccer/leagues/bundesliga.svg',
    matches: 5,
  },
]
</script>

<template>
  <div class="mb-2 space-y-5">
    <div
      v-for="league in leagues"
      :key="league.id"
      class="flex items-center gap-3"
    >
      <img
        :src="league.logo"
        :alt="league.name"
        class="size-10 shrink-0"
      >
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="medium"
          lead="tight"
          class="text-muted-900 dark:text-white"
        >
          <span>{{ league.name }}</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-600 dark:text-muted-400">
            {{ league.location }}
          </span>
        </BaseParagraph>
      </div>
      <div class="ms-auto flex items-center gap-1">
        <span class="text-muted-600 dark:text-muted-400 font-sans text-xs">
          {{ league.matches }} matches
        </span>
        <BaseButton
          rounded="lg"
          variant="muted"
          size="icon-md"
          class="scale-75"
        >
          <Icon name="lucide:arrow-right" class="size-4" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
