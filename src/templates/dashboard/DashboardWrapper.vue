<template>
  <DashboardMainWrapperDesktop>
    <DashboardBaseContainerWrapper>
      <DashboardDesktopHeaderContainerWrapper>
        <slot name="header">
          <DashboardHeader />
        </slot>
      </DashboardDesktopHeaderContainerWrapper>

      <div class="dash">
        <slot name="sidebar">
          <DashboardSidebar />
        </slot>

        <section class="dash__main">
          <slot name="content" />
        </section>
      </div>

      <slot name="footer">
        <DashboardFooter />
      </slot>
    </DashboardBaseContainerWrapper>
  </DashboardMainWrapperDesktop>
</template>

<script setup lang="ts">
import DashboardMainWrapperDesktop from '@/components/layout/dashboard/DashboardMainWrapperDesktop.vue'
import DashboardBaseContainerWrapper from '@/components/layout/dashboard/DashboardBaseContainerWrapper.vue'
import DashboardDesktopHeaderContainerWrapper from '@/components/layout/dashboard/DashboardDesktopHeaderContainerWrapper.vue'
import DashboardHeader from './DashboardHeader.vue'
import DashboardSidebar from './DashboardSidebar.vue'
import DashboardFooter from './DashboardFooter.vue'
</script>

<style scoped>
.dash { display: grid; grid-template-columns: 260px 1fr; gap: 24px; }
.dash__main { min-width: 0; }
@media (max-width: 1023px) { .dash { grid-template-columns: 1fr; } }
</style>