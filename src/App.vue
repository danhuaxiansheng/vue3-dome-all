<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" v-if="!$route.meta.keepAlive" />
    <keep-alive v-else>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
