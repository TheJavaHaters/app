<script>
  import { onMount } from "svelte";
  import { SelectedPage } from "../stores/pageStore.js";

  import Cards from "../Pages/cards.svelte";
  import Dashboard from "../Pages/dashboard.svelte";
  import Payments from "../Pages/payments.svelte";
  import Statistics from "../Pages/Statistics.svelte";
  import Transactions from "../Pages/transactions.svelte";
  import Settings from "../Pages/settings.svelte";

  onMount(() => {
    SelectedPage.set("dashboard");
  });
</script>

<div class="page-holder">
  {#if $SelectedPage == "dashboard"}
    <Dashboard />
  {:else if $SelectedPage == "settings"}
    <Settings />
  {:else if $SelectedPage == "cards"}
    <Cards />
  {:else if $SelectedPage == "payments"}
    <Payments />
  {:else if $SelectedPage == "statistics"}
    <Statistics />
  {:else if $SelectedPage == "transactions"}
    <Transactions />
  {:else}
    <Dashboard />
  {/if}
</div>

<style>
  .page-holder {
    max-height: 80vh;
  }

  .Container {
    max-width: 1200px;
    margin: 30px 12px;
    display: flex;
    flex-direction: row;
  }

  .item-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-1 ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .item-1 ul li {
    text-align: center;
    width: 100%;
    max-width: 200px;
    height: 33px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 9px;
    transition: all 0.3s ease-in;
  }

  .item-1 ul li a:hover {
    background-color: black;
    border-radius: 10px;
    color: white;
  }

  .item-1 ul li a {
    margin: 0;
    text-decoration: none;
    text-align: center;
    color: black;
    min-width: 200px;
    font-weight: 600;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: row;
    max-width: fit-content;
  }

  .item-1 {
    width: 200px;
    height: 86vh;
  }
  .item-1,
  .item-2,
  .item-3 {
    border: 1px solid black;
  }

  .item-2 {
    width: 4000px;
  }

  .item-3 {
    width: 400px;
  }
  .h1 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: black;
  }
</style>
