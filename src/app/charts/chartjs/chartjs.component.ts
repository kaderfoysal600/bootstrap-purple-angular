import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";

@Component({
  selector: "app-chartjs",
  templateUrl: "./chartjs.component.html",
  styleUrls: ["./chartjs.component.scss"],
})
export class ChartjsComponent implements OnInit {
  public lineChart: any;
  public barChart: any;
  public doughnut: any;
  public areaChart: any;
  public pieChart: any;
  public scatterChart: any;
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.createChart();
  }
  createChart() {
    this.lineChart = new Chart("MyChart", {
      type: "line", //this denotes tha type of chart

      data: {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [
          {
            label: "# of Votes",
            data: [10, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        aspectRatio: 1.8,
        scales: {
          y: {
            beginAtZero: true,
          },
        },

        elements: {
          point: {
            radius: 0,
          },
        },
      },
    });

    this.doughnut = new Chart("MyChart3", {
      type: "doughnut", //this denotes tha type of chart

      data: {
        labels: ["Pink", "Blue", "Yellow"],
        datasets: [
          {
            data: [30, 40, 30],

            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
          },
          // hoverOffset: 4
        ],
      },
      options: {
        aspectRatio: 1.8,
      },
    });
    this.barChart = new Chart("MyChart2", {
      type: "bar", //this denotes tha type of chart

      data: {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [
          {
            label: "# of Votes",
            data: [10, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            // fill: false,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
      },
    });
    this.areaChart = new Chart("MyChart4", {
      type: "line", //this denotes tha type of chart

      data: {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [
          {
            label: "# of Votes",
            data: [10, 19, 3, 5, 2, 3],
            borderWidth: 1,
            fill: true,
            borderColor: "rgba(255,99,132,1)",
            backgroundColor: "rgba(255,99,132,.2)",
          },
        ],
      },
      options: {
        aspectRatio: 1.8,
        scales: {
          y: {
            beginAtZero: true,
          },
        },

        elements: {
          point: {
            radius: 0,
          },
        },
      },
    });
    this.pieChart = new Chart("MyChart5", {
      type: "pie", //this denotes tha type of chart

      data: {
        labels: ["Pink", "Blue", "Yellow"],
        datasets: [
          {
            data: [30, 40, 30],

            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
          },
          // hoverOffset: 4
        ],
      },
      options: {
        aspectRatio: 1.8,
      },
    });
    this.scatterChart = new Chart("MyChart6", {
      type: "scatter", //this denotes tha type of chart

      data: {
        // labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [
          {
            label: "First Dataset",
            data: [
              {
                x: -10,
                y: 0,
              },
              {
                x: 0,
                y: 3,
              },
              {
                x: -25,
                y: 5,
              },
              {
                x: 40,
                y: 5,
              },
            ],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1,
          },
          {
            label: "Second Dataset",
            data: [
              {
                x: 10,
                y: 5,
              },
              {
                x: 20,
                y: -30,
              },
              {
                x: -25,
                y: 15,
              },
              {
                x: -10,
                y: 5,
              },
            ],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
