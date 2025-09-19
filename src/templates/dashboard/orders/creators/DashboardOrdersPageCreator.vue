<template>
  <DashboardWrapper>
    <!-- use global header/sidebar/footer defaults; only provide main content -->
    <template #content>
      <DashboardOrdersPageContent />
    </template>
  </DashboardWrapper>
</template>

<script setup lang="ts">
import { DashboardWrapper } from '@/templates/dashboard/Dashboard.js'
import DashboardOrdersPageContentCreator from './DashboardOrdersPageContentCreator.vue'
</script>