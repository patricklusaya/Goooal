import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule} from "@angular/common";
import { DatePipe } from '@angular/common'
 

import { SafePipe } from './safe.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StandingsComponent } from './standings/standings.component';
import { StatsComponent } from './stats/stats.component';
import { FormsModule } from '@angular/forms';
import { MatchesComponent } from './matches/matches.component';
import { ScorersComponent } from './scorers/scorers.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LivescoresComponent } from './livescores/livescores.component';  



@NgModule({
  declarations: [AppComponent,SafePipe, NavbarComponent, HomeComponent, StandingsComponent, StatsComponent, MatchesComponent, ScorersComponent, StatisticsComponent, LivescoresComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  exports: [SafePipe],
  providers: [SafePipe ,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
