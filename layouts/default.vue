<template>
  <TairoCollapseLayout>
    <TairoCollapseSidebar>
      <TairoCollapseSidebarHeader>My App</TairoCollapseSidebarHeader>
      <TairoCollapseSidebarLinks class="px-4 space-y-1 grow">
        <TairoCollapseSidebarLink
          to="/landing"
          label="Home"
          icon="solar:home-smile-angle-outline"
        />
      </TairoCollapseSidebarLinks>
    </TairoCollapseSidebar>

    <TairoCollapseContent>
      <slot />
    </TairoCollapseContent>
  </TairoCollapseLayout>
</template>

<script lang="ts" setup>

</script>

<style>

</style>