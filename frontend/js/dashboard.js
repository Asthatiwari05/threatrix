async function loadDashboard() {
  const res = await fetch("http://localhost:5000/api/transactions");
  const data = await res.json();

  document.getElementById("total").innerText = data.length;

  const high = data.filter(t => t.riskLevel === "HIGH").length;
  document.getElementById("high").innerText = high;

  const alerts = await fetch("http://localhost:5000/api/alerts");
  const alertData = await alerts.json();
  document.getElementById("alerts").innerText = alertData.length;

  new Chart(document.getElementById("chart"), {
    type: "pie",
    data: {
      labels: ["Low", "Medium", "High"],
      datasets: [{
        data: [
          data.filter(t=>t.riskLevel==="LOW").length,
          data.filter(t=>t.riskLevel==="MEDIUM").length,
          high
        ]
      }]
    }
  });
}

loadDashboard();