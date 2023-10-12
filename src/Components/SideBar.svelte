<script>
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
    <div class="menu-item">
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
  .sidebar {
    width: 250px;
    background-color: #f5f5f5;
    height: 100vh;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.1s;
    transition: transform 0.1s ease;
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
