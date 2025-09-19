<template>
  <aside class="dash__sidebar">
    <div class="block md:hidden">
      <slot name="mobile" />
    </div>
    <div class="hidden md:block">
      <slot name="desktop" />
    </div>
  </aside>
</template>

<script setup lang="ts"></script>
