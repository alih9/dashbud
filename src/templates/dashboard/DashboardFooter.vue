<template>
  <footer class="dashboard-footer">
    <div class="block md:hidden">
      <slot name="mobile" />
    </div>
    <div class="hidden md:block">
      <slot name="desktop" />
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
