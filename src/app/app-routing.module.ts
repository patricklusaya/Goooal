import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './matches/matches.component';
import { ScorersComponent } from './scorers/scorers.component';
import { StandingsComponent } from './standings/standings.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"matches" , component:MatchesComponent},
  {path:"statistics",component: StatisticsComponent},
  {path: "standings", component: StandingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
