import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public barChart: any;
  public doughnut: any;
  toggleProBanner(event) {
    console.log("123");
    event.preventDefault();
    document.querySelector("body").classList.toggle("removeProbanner");
  }

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    this.barChart = new Chart("BarChart", {
      type: "bar", //this denotes tha type of chart

      data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
        datasets: [
          {
            label: "CHN",
            data: [20, 40, 15, 35, 25, 50, 30, 20],
            borderWidth: 1,
            backgroundColor: [
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
            ],
            borderColor: [
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
              "rgba(154, 85, 255, 1)",
            ],
            barPercentage: 0.5,
            categoryPercentage: 0.5,
          },
          {
            label: "USA",
            data: [40, 30, 20, 10, 50, 15, 35, 40],
            borderWidth: 1,
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            backgroundColor: [
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
            ],
            borderColor: [
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
              "rgba(254, 112, 150, 1)",
            ],
          },
          {
            label: "UK",
            data: [70, 10, 30, 40, 25, 50, 15, 30],
            borderWidth: 1,
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            backgroundColor: [
              "rgba(54, 215, 232, 1)",
              "rgba(54, 215, 232, 1)",
              "rgba(54, 215, 232, 1)",
              "rgba(54, 215, 232, 1)",
              "rgba(54, 215, 232, 1)",
              "rgba(54, 215, 232, 1)",
            ],
            borderColor: [
              "rgba(177, 148, 250, 1)",
              "rgba(177, 148, 250, 1)",
              "rgba(177, 148, 250, 1)",
              "rgba(177, 148, 250, 1)",
              "rgba(177, 148, 250, 1)",
              "rgba(177, 148, 250, 1)",
            ],
          },
        ],
      },
      options: {
        aspectRatio: 1.8,
        scales: {
          y: {
            ticks: {
              display: false,
              stepSize: 20,
            },
          },
          x: {
            grid: {
              display: false,
              color: "rgba(0,0,0,1)",
            },
          },
        },
      },
    });
    this.doughnut = new Chart("DoughnutChart", {
      type: "doughnut", //this denotes tha type of chart

      data: {
        labels: ["Search Engines", "Direct Click", "Bookmarks Click"],
        datasets: [
          {
            data: [30, 30, 40],
            backgroundColor: [
              "rgba(177, 148, 250, 1)",
              "rgba(254, 112, 150, 1)",
              "rgba(132, 217, 210, 1)",
            ],
            borderColor: [
              "rgba(177, 148, 250, .2)",
              "rgba(254, 112, 150, .2)",
              "rgba(132, 217, 210, .2)",
            ],
            // hoverOffset: 4
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
      },
    });
  }

  date: Date = new Date();
}
