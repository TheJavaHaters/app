<script>
  import SideBar from "./lib/SideBar.svelte";
  import { Search } from "lucide-svelte";
  import Container from "./lib/Container.svelte";
</script>

<main>
  <header>
    <h2 style="margin-left: 10px;">Quartz</h2>
    <nav>
      <img src="../src/assets/search.svg" alt="" class="search-icon" />
      <input type="text" name="" id="" placeholder="Search" />
    </nav>
  </header>
  <Container />
</main>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
  main {
    max-width: 1200px;
    margin: 0 auto;
  }

  main header .search-icon {
    /* position: absolute;
    left: 640px;
    bottom: 20; */
    fill: black;
    pointer-events: none;
    margin-left: 15px;
    position: relative;
    left: 30px;
  }
  main header input[type="text"] {
    width: 270px;
    padding: 3px 0 0 10px;
    outline: none;
    padding-right: 30px;
    border: 1px solid black;
    display: flex;
    margin-left: 40px;
  }
  main header nav input[type="text"]::placeholder {
    color: black;
    font-weight: 800;
  }
  main header nav {
    display: flex;
    margin-right: 450px;
  }
  @media only screen and (max-width: 1024px) {
    main header nav {
      margin-right: 140px;
    }
  }
</style>
