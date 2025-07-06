function payNow() {
  const card= document.querySelector(".card");
  const amount = document.getElementById("amount").value;
  const discount = document.getElementById("discount").value;
  const total= amount - ((discount/100) * amount);
  const msg = document.getElementById("msg");
  const message = document.getElementById("message");


  if (amount>=500) {
    card.style.display = "none";
    msg.style.display = "block";
    message.textContent="Payable amount is:"+ total+"/-";
  } else {
    message.textContent="Payable amount is:"+amount+"/-";
  }
}
