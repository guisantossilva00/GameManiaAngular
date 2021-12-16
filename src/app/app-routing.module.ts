import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './views/console/console.component';
import { EletronicosComponent } from './views/eletronicos/eletronicos.component';
import { HomeComponent } from './views/home/home.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';
import { PerifericosComponent } from './views/perifericos/perifericos.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "perifericos", component: PerifericosComponent },
  { path: "console", component: ConsoleComponent },
  { path: "eletronicos", component: EletronicosComponent },
  { path: "pcgamer", component: PcgamerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
