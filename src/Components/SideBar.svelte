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
        class={"icon" + $SelectedPage == icon ? " active" : ""}
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
    background-color: #efefef;
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
    transition: background-color 0.1s, transform 0.1s ease-in-out;
    text-align: left;
    position: relative;
  }

  .menu-item > span {
    margin-left: 10px;
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

  .menu-item:hover > img {
    filter: invert(100%) sepia(4%) saturate(159%) hue-rotate(205deg)
      brightness(108%) contrast(104%);
  }

  .menu-item.active > img {
    filter: invert(100%) sepia(4%) saturate(159%) hue-rotate(205deg)
      brightness(108%) contrast(104%);
  }

  .menu-item:hover > span {
    color: white;
  }

  .icon.active {
    filter: invert(100%) sepia(4%) saturate(159%) hue-rotate(205deg)
      brightness(108%) contrast(104%);
  }
</style>
