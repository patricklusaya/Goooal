import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public goalers:any= []
  public laligaGoalers: any=[]

  constructor( private http:HttpClient) { }
  getTopScorers(){
    const url ="https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=68c736a0-6174-11ec-91ff-29d6d9345955&season_id=1980";
    return this.http.get(url).subscribe((res)=>{
      this.goalers= res
      console.log(res);
    })
  }
  getLaligaTopScorers(){
    const myUrl ="https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=68c736a0-6174-11ec-91ff-29d6d9345955&season_id=2029";
    return this.http.get(myUrl).subscribe((result)=>{
      this.laligaGoalers =result
      console.log(result);
      
    })
  }
  ngOnInit(): void {
    this.getTopScorers()
    this.getLaligaTopScorers()
  }

}
