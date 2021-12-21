import { Component, OnInit } from '@angular/core';
import { FetchTeamsService } from '../fetch-teams.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  public datay:any = []
  public teams:any =[]
  

  constructor(private http: HttpClient) {}

  getData(){
    const url ='https://app.sportdataapi.com/api/v1/soccer/standings?apikey=68c736a0-6174-11ec-91ff-29d6d9345955&season_id=1980'
    this.http.get(url).subscribe((res)=>{
      this.datay = res
      console.log(res);
    
    })
 
}
getMatch(){
  const myUrl ='https://app.sportdataapi.com/api/v1/soccer/teams?apikey=68c736a0-6174-11ec-91ff-29d6d9345955&country_id=42'
  this.http.get(myUrl).subscribe((result)=>{
    this.teams = result
    console.log(result);
    
  })
}
ngOnInit(): void {
  this.getMatch()
  this.getData()
 

}

}


