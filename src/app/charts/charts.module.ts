import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgChartsModule } from "ng2-charts";
import { ChartjsComponent } from "./chartjs/chartjs.component";

const routes: Routes = [{ path: "chartjs", component: ChartjsComponent }];

@NgModule({
  declarations: [ChartjsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgChartsModule],
})
export class ChartsDemoModule {}
