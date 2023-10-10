<script>
  import SideBar from "./lib/SideBar.svelte";
  import { Search } from "lucide-svelte";
</script>

<main>
  <header>
    <h2 style="margin-left: 10px;">Quartz</h2>
    <nav>
      <input type="text" name="" id="" placeholder="Search" /><img
        src="../src/assets/search.svg"
        alt=""
        class="search-icon"
      />
    </nav>
  </header>
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
    position: absolute;
    left: 640px;
    bottom: 20;
    fill: black;
    pointer-events: none;
  }
  main header input[type="text"] {
    width: 260px;
    padding: 3px 0 0 10px;
    outline: none;

    padding-right: 30px;
    border: none;
    display: flex;
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
