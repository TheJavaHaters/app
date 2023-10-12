<script>
  import { SelectedPage } from "../Pages/HomeStore";
  import { onMount } from "svelte";
  import SideBar from "./SideBar.svelte";
  // onMount(() => {
  //   SelectedPage.set("dashboard");
  // });
</script>

<SideBar />

<style>
  .Container {
    max-width: 1200px;
    margin: 30px 12px;
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
</style>
