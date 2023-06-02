import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ChartjsComponent } from "./chartjs/chartjs.component";

const routes: Routes = [{ path: "chartjs", component: ChartjsComponent }];

@NgModule({
  declarations: [ChartjsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ChartsDemoModule {}
