<script>
  import { onMount } from "svelte";
  import Home from "./Pages/Home.svelte";
  import SideBar from "./Components/SideBar.svelte";
  import Container from "./Components/Container.svelte";
  import Header from "./Components/Header.svelte";
</script>

<div class="Main-Wrapper">
  <Header />
  <div class="Wrapper">
    <SideBar />
    <Container />
  </div>
</div>

<style>
  .Wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
  }
</style>
