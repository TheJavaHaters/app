<script>
</script>

<main>
  <header>
    <h2>Quartzx</h2>
    <nav>
      <img src="../src/assets/search.svg" alt="" class="search-icon" />
      <input type="text" name="" id="" placeholder="Search" />
    </nav>
  </header>
</main>

<style>
  header {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  }
  header h2 {
    position: absolute;
    top: 0;
    left: 0;
  }
  main {
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    border: 1px solid black;
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
    border: 1px solid white;
    display: flex;
    margin-left: 40px;
  }
  main header nav input[type="text"]::placeholder {
    color: black;
    font-weight: 800;
  }
  main header nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1024px) {
    main header nav {
      margin-right: 140px;
    }
  }
</style>
