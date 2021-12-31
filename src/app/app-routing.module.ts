import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightsComponent } from './highlights/highlights.component';
import { HomeComponent } from './home/home.component';
import { LivescoresComponent } from './livescores/livescores.component';
import { MatchesComponent } from './matches/matches.component';
import { NewsComponent } from './news/news.component';
import { ScorersComponent } from './scorers/scorers.component';
import { StandingsComponent } from './standings/standings.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"matches" , component:MatchesComponent},
  {path: "livescores", component:LivescoresComponent},
  {path:"statistics",component: StatisticsComponent},
  {path: "standings", component: StandingsComponent},
  {path:"highlights" , component:HighlightsComponent},
  {path: "news" , component :NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
