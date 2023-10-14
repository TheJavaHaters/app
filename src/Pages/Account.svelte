<script>
  import "../styles/page.css";

  let user = {
    firstName: "John",
    lastName: "Doe",
    email: "stew@protonmail.com",
    phone: "123-456-7890",
    accounts: [
      {
        name: "Checking",
        accountNumber: "254684459",
        sortCode: "02-02-02",
        balance: "1028.90",
        interest: "0.5",
      },
      {
        name: "Savings",
        accountNumber: "456788965",
        sortCode: "03-03-03",
        balance: "6845.27",
        interest: "5.2",
      },
    ],
  };
</script>

<div class="account-page">
  <div class="account-header">
    <h2>Account Details</h2>
    <div class="user-icon">
      <img src="assets/icons/light/account.svg" alt="User Image" />
    </div>
  </div>

  <div class="details-section">
    <div class="detail-item">
      <span class="detail-label">Full Name:</span>
      {user.firstName}
      {user.lastName}
    </div>
    <div class="detail-item">
      <span class="detail-label">Email:</span>
      {user.email} <button>Change</button>
    </div>
    <div class="detail-item">
      <span class="detail-label">Phone:</span>
      {user.phone} <button>Change</button>
    </div>
  </div>

  <!-- <div class="bank-section">
    {#each user.accounts as account} -->
      <div class="bank-section">
        {#each user.accounts as account}
          <div class="bank-item">
            <div class="bank-details">
              <h3>{account.name} Account</h3>
              <p>
                <span class="detail-label">Account Number:</span>
                {account.accountNumber}
              </p>
              <p>
                <span class="detail-label">Sort Code:</span>
                {account.sortCode}
              </p>
              <p>
                <span class="detail-label">Balance:</span> ${account.balance}
              </p>
              <p>
                <span class="detail-label">Interest:</span>
                {account.interest}%
              </p>
            </div>
            <button class="button-right" on:click={() => {}}
              >Account Info</button
            >
          </div>
        {/each}
      </div>
    <!-- {/each}
  </div> -->
</div>

<style>
  .account-page {
    max-width: 80%; /* Using viewport percentage width */
    margin: 20px auto;
    background-color: #fff;
    padding: 40px; /* Increased padding */
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }

  .button-right {
    width: 25%;
  }
  .account-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px; /* Increased padding-bottom */
    border-bottom: 2px solid #ddd; /* Increased border width */
    font-size: 24px; /* Increase font size */
  }

  .user-icon {
    width: 80px; /* Increase the user icon size */
    height: 80px;
    background: #ddd;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details-section,
  .bank-section {
    margin-top: 30px;
  }

  .detail-item,
  .bank-item {
    padding: 15px 0; /* Increased padding for each item */
    border-bottom: 2px solid #eaeaea; /* Increased border width */
  }

  .detail-label {
    font-weight: bold;
    margin-right: 15px; /* Increased margin */
    font-size: 18px; /* Increased font size */
  }

  .bank-item {
    padding: 15px 0; /* Increased padding for each item */
    border-bottom: 2px solid #eaeaea; /* Increased border width */
    display: flex; /* Using flex for the layout */
    justify-content: space-between; /* To space items between left and right */
    align-items: center; /* To vertically align content */
  }

  .bank-details {
    flex: 1; /* Taking full available width minus button */
  }

  button {
    padding: 8px 20px; /* Increased padding */
    border-radius: 10px;
    border: none;
    background-color: #000000;
    color: #fff;
    cursor: pointer;
    font-size: 16px; /* Increased font size */
  }

  button:hover {
    background-color: #000000;
  }
</style>
