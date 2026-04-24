async function loadPrices() {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd");
    const data = await response.json();

    document.getElementById("btcPrice").innerText = "$" + data.bitcoin.usd;
    document.getElementById("ethPrice").innerText = "$" + data.ethereum.usd;
    document.getElementById("usdtPrice").innerText = "$" + data.tether.usd;
  } catch (error) {
    document.getElementById("btcPrice").innerText = "Error loading";
    document.getElementById("ethPrice").innerText = "Error loading";
    document.getElementById("usdtPrice").innerText = "Error loading";
  }
}

loadPrices();
setInterval(loadPrices, 60000);

// Contact form fake submit
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully! (Demo only)");
});
