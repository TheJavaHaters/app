<script>
  import { onMount } from "svelte";
  import { SelectedPage } from "../stores/pageStore.js";

  function setPage(page) {
    console.log(page);
    SelectedPage.set(page);
  }

  let icons = [
    "dashboard",
    "cards",
    "payments",
    "statistics",
    "transactions",
    "settings",
    "logout",
  ];
</script>

<div class="sidebar">
  {#each icons as icon}
    <div
      class="menu-item"
      on:click={() => setPage(icon)}
      on:keydown={() => {}}
      role="button"
      tabindex="0"
    >
      <img
        src={`/assets//icons/light/${icon}.svg`}
        alt="{icon} icon"
        class="icon"
      />

      <span class="label"
        >{icon.charAt(0).toUpperCase() + icon.slice(1, icon.length)}</span
      >
    </div>
  {/each}
</div>

<style>
  .menu-item button {
    background-color: transparent;
    border: none;
    width: 100%; /* Fill the full width of the parent div */
    height: 100%; /* Fill the full height of the parent div */
    border: 1px solid black;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    position: relative;
    cursor: pointer;
    padding: 20px; /* Remove padding to make it fill the div */
    margin: 0; /* Remove margin */
  }

  .sidebar {
    width: 250px;
    background-color: #f5f5f5;
    border-radius: 20px;
    height: 100vh;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.1s ease, transform 0.1s ease;
    text-align: left;
    position: relative; /* Added to contain the button properly */
  }

  .menu-item:hover {
    background-color: #e0e0e0;
    transform: scale(1.1, 1.1);
  }

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 15px;
  }

  .label {
    font-size: 16px;
    font-weight: 500;
  }
</style>
