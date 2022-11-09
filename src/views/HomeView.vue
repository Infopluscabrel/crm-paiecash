<script setup>
  import Sidebar from "../components/SideBar.vue";
  import PageTitle from "../components/PageTitle.vue";
  import Header from "../components/Header.vue";
</script>

<template>
  <main>
    <Header />
    <Sidebar />
    <main id="main" class="main">
      <PageTitle title="Home" subtitle="View" />
    </main>
  </main>
</template>
