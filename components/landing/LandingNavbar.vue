<script setup lang="ts">
const isSearchOpen = useSearchOpen()
const isMobileOpen = useMobileNavOpen()
const isSwitcherOpen = useColorSwitcherOpen()

const metaKey = useMetaKey()
</script>

<template>
  <div
    class="group/nav fixed inset-x-0 top-0 z-50 mx-auto max-w-[calc(100%_-_40px)] group-[&.scrolled]/landing:mt-2 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200 lg:max-w-7xl"
  >
    <div
      class="group-[&.scrolled]/landing:dark:bg-muted-950/95 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-700 group-[&.scrolled]/landing:motion-safe:shadow-muted-300/30 group-[&.scrolled]/landing:motion-safe:dark:shadow-muted-800/20 flex items-center justify-between rounded-2xl border p-4 group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:bg-white/95 motion-safe:transition-all motion-safe:duration-200 group-[&.scrolled]/landing:motion-safe:shadow-xl"
    >
      <div class="flex w-1/2 items-center gap-2 md:w-1/5">
        <NuxtLink
          to="/"
          class="ms-2 inline-flex"
          aria-label="Go to Tairo homepage"
        >
          <TairoLogoText
            class="text-primary-500 group-[&.scrolled]/landing:h-6 group-[&:not(.scrolled)]/landing:h-7 motion-safe:transition-all motion-safe:duration-200"
          />
        </NuxtLink>
      </div>
      <div
        class="hidden dark:bg-muted-950 fixed inset-x-0 top-20 mx-auto w-[calc(100%_-_2rem)] items-center justify-center bg-white lg:static lg:mx-0 lg:flex lg:w-auto lg:flex-row lg:bg-transparent!"
      >
      <ClientOnly>
        <TairoMenu>
          <TairoMenuList class="flex-col lg:flex-row">
            <TairoMenuItem>
              <TairoMenuLink as-child>
                <NuxtLink to="/demos" active-class="text-primary-500">
                  Prebuilt pages
                </NuxtLink>
              </TairoMenuLink>
            </TairoMenuItem>
            <TairoMenuItem>
              <TairoMenuLink as-child>
                <NuxtLink to="/documentation" active-class="text-primary-500">
                  Documentation
                </NuxtLink>
              </TairoMenuLink>
            </TairoMenuItem>
          </TairoMenuList>
        </TairoMenu>
        </ClientOnly>
        <div class="px-6">
          <button
            type="button"
            class="group-[&.scrolled]/landing:bg-muted-100 group-[&.scrolled]/landing:dark:bg-muted-900 group-[&.scrolled]/landing:border-muted-100 group-[&.scrolled]/landing:dark:border-muted-800 group-[&.scrolled]/landing:text-muted-400 group-[&.scrolled]/landing:dark:text-muted-500 group-[&.scrolled]/landing:hover:text-primary-500 group-[&.scrolled]/landing:dark:hover:text-primary-500 group-[&:not(.scrolled)]/landing:text-muted-800 group-[&:not(.scrolled)]/landing:dark:text-muted-200 group flex items-center gap-2 rounded-xl py-1 pe-1 ps-3 group-[&.scrolled]/landing:border"
            aria-label="Open search"
            @click="isSearchOpen = true"
          >
            <Icon
              name="lucide:search"
              class="size-4 motion-safe:transition-colors motion-safe:duration-300"
            />
            <span
              class="group-[&.scrolled]/landing:dark:bg-muted-800 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-700 group-[&.scrolled]/landing:group-hover:text-muted-600 group-[&.scrolled]/landing:dark:group-hover:text-muted-100 rounded-lg border px-2 py-0.5 group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:bg-white group-[&.scrolled]/landing:shadow motion-safe:transition-colors motion-safe:duration-300"
            >
              <kbd class="font-sans text-sm tracking-wide">
                {{ metaKey }} + k
              </kbd>
            </span>
          </button>
        </div>
      </div>
      <div class="flex w-1/2 items-center justify-end gap-4 md:w-1/5">
        <button
          type="button"
          class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
          @click="
            () => {
              isSwitcherOpen = true
            }
          "
        >
          <Icon
            name="ph:drop-half-bottom-duotone"
            class="text-muted-400 size-5"
          />
        </button>
        <BaseThemeToggle aria-label="Toggle darkmode" />
        <BaseButton
          rounded="lg"
          variant="primary"
          to="https://go.cssninja.io/buy-tairo"
          class="hidden! lg:flex!"
        >
          Buy Tairo
        </BaseButton>
        <button
          type="button"
          class="flex items-center justify-center lg:hidden"
          :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'"
          @click="isMobileOpen = !isMobileOpen"
        >
          <div class="space-y-1.5">
            <span
              class="bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300"
              :class="isMobileOpen ? 'w-2' : 'w-6'"
            />
            <span
              class="bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300"
              :class="isMobileOpen ? 'w-6' : 'w-6'"
            />
            <span
              class="bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300"
              :class="isMobileOpen ? 'w-4' : 'w-6'"
            />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
