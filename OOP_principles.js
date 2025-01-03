class Chart {
    constructor(height, back, hasBorder) {
        this.height = height;
        this.back = back;
        this.hasBorder = hasBorder;
    }
}

//1.inheritance principle
class ChartClickable extends Chart {
    handleClick() {
        console.log("You clicked!");
    }
}

let chartClick = new ChartClickable();
console.log(chartClick);

//2.polymorphism principle
class ChartClickableSecond extends ChartClickable {
    handleClick(){
        super.handleClick();//the first message will be shown from parent class
        console.log("You clicked one more time!");//method is modified here
    }
}

//3.incapsulation primciple
class ChartClickable1 extends Chart {
    #isClickable = true;//this property is private but to access it use get method
    handleClick() {
        console.log("You clicked!");
    }
    getIsClickable() {
        return this.#isClickable
    }
}

//4.abstraction principle
//some methods, calculations are hidden from the user

// function renderChart (chartData) {
//     const chartsContainer = document.querySelector(".charts-container");
//     const chart = document.createElement("div");
//     chart.classList.add("chart");
//     chart.style.height = chartData.height;
//     chart.style.backgroundColor = chartData.back;
//     if (chartData.hasBorder) {
//         chart.style.border ="2px solid black";
//     }
//     if (chartData.isClickable) {
//         chart.addEventListener("click",  chartData.handleClick);
//     }
// }

renderChart(new Chart("30px", "red", "true"));
renderChart(new ChartClickable("30px", "green", "true"));
// renderChart(new Chart("300px", "red", "true"));
// renderChart(new ChartClickable("300px", "green", "true"));