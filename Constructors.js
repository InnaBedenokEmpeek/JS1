

function renderChart (chartData) {
    const chartsContainer = document.querySelector(".charts-container");
    const chart = document.createElement("div");
    chart.classList.add("chart");
    chart.style.height = chartData.height;
    chart.style.backgroundColor = chartData.back;
    if (chartData.hasBorder) {
        chart.style.border ="2px solid black";
    }
    if (chartData.isClickable) {
        chart.addEventListener("click",  chartData.handleClick);
    }
}