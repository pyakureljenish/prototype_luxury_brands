// Mock data for the UI
let tokenBalance = 0;
let latestTransaction = "None";

// Function to simulate a purchase
function purchaseProduct(productName) {
  alert(`You purchased: ${productName}`);
  tokenBalance += 10; // Add 10 tokens for each purchase
  document.getElementById("tokenBalance").innerText = tokenBalance;
  latestTransaction = `Purchased ${productName} at ${new Date().toLocaleTimeString()}`;
  document.getElementById("latestTransaction").innerText = latestTransaction;
}

// Function to simulate NFT verification
function verifyNFT() {
  alert("NFT Verified! This product is authentic.");
}

// Function to simulate viewing on Etherscan
function viewOnEtherscan() {
  alert("Redirecting to Etherscan...");
  // window.open("https://etherscan.io/"); // Uncomment for actual redirection
}