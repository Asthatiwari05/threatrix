async function loadTransactions() {
  const res = await fetch("http://localhost:5000/api/transactions");
  const data = await res.json();

  const list = document.getElementById("list");

  data.forEach(t => {
    let color = "green";
    if (t.riskLevel === "HIGH") color = "red";
    if (t.riskLevel === "MEDIUM") color = "yellow";

    list.innerHTML += `
      <div class="bg-gray-900 p-4 rounded border-l-4 border-${color}-500">
        ₹${t.amount} - ${t.riskLevel}
      </div>
    `;
  });
}

loadTransactions();