<script>
  import "../styles/page.css";
  let user = {
    balance: 0,
    income: 0,
    expense: 0,
    no_spending: 0,
  };

  //Wecan import this why are you re cr\eating
  // dummy data
  //Lemme handle this page
  //dw i got this1
  //ok
  // Im just confused as to why there is still 2 dashboards
</script>

<div class="sub-page">
  <h1>Dashboard</h1>
  <div class="container">
    <div class="Income-card">
      <h2>Income</h2>
      <p>£{user.income}</p>
      <br />

      <p>
        Total Spending {user.no_spending} + <span> +12% </span>
      </p>
    </div>
    <div class="Expense-card">
      <h2>Expense</h2>
      <p>£{user.expense}</p>
    </div>
    <div class="Balance-card">
      <h2>Balance</h2>
      <p>£{user.balance}</p>
    </div>
  </div>
</div>
