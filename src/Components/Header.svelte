<script>
  import { SelectedPage } from "../stores/pageStore.js";

  function openAccounts() {
    SelectedPage.set("account");
  }
</script>

<main>
  <header>
    <h2>Quartzx</h2>
    <button class="accounts-button" on:click={openAccounts}>
      <img src="/assets/icons/light/account.svg" alt="accounts icon" />
    </button>
  </header>
</main>

<style>
  main header {
    display: flex;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
  }
  main header h2 {
    font-size: 30px;
    font-weight: 800;
  }
  .accounts-button {
    position: fixed;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    height: 40px;
    background-color: transparent;
    transition: transform 0.1s ease;
  }
  .accounts-button img {
    width: 100%;
    height: 100%;
  }
  .accounts-button:hover {
    transform: scale(1.1);
  }
  main {
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    padding: 5px;
  }
  /*
  main header .search-icon {
    position: absolute;
    left: 640px;
    bottom: 20;
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
  }*/
</style>
