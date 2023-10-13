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
      class={"menu-item" + (icon == $SelectedPage ? " active" : "")}
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

      <span class={"label" + $SelectedPage == icon ? "active" : ""}
        >{icon.charAt(0).toUpperCase() + icon.slice(1, icon.length)}</span
      >
    </div>
  {/each}
</div>

<style>
  .sidebar {
    width: 250px;
    background-color: #dcdcdc;
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
    transition: background-color 0.2s ease, transform 0.1s ease;
    text-align: left;
    position: relative;
  }

  .menu-item.active {
    background-color: #282b30;
    transform: scale(1.1, 1.1);
  }

  .menu-item.active > span {
    color: white;
  }

  .menu-item:hover {
    background-color: #282b30;
    transform: scale(1.1, 1.1);
  }

  .menu-item:hover > span {
    color: white;
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

  .label.active {
    color: white;
  }

  .label:hover {
    color: white;
  }
</style>
