<script></script>

<div class="Container">
  <div class="row">
    <div class="item-1">
      <ul>
        <li><a href="">Dashboard</a></li>
        <li><a href="">Cards</a></li>
        <li><a href="">Payments</a></li>
        <li><a href="">Statisitcs</a></li>
        <li><a href="">Transaction</a></li>
        <li><a href="">Log Out</a></li>
      </ul>
    </div>
    <div class="item-2">Hello word</div>
    <div class="item-3">helllo world</div>
  </div>
</div>

<style>
  .Container {
    max-width: 1200px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row {
  }

  .item-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
  }

  .item-1 ul {
    list-style: none;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  .item-1 ul li {
    gap: 30px;
    min-width: 200px;
    text-align: center;
    min-width: 200px;
    height: 40px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 9px;
    transition: all 0.3s ease-in;
  }

  .item-1 ul li:hover {
    background-color: black;
  }

  .item-1 ul li a {
    text-decoration: none;
    text-align: center;
    color: white;
  }

  .row {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 2px;
  }

  .item-1 {
    width: 200px;
    height: 86vh;
  }
  .item-1,
  .item-2,
  .item-3 {
  }
</style>
