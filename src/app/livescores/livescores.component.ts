import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

declare var myLivescores: any;

@Component({
  selector: 'app-livescores',
  templateUrl: './livescores.component.html',
  styleUrls: ['./livescores.component.css']
})
export class LivescoresComponent implements OnInit {
  public scores:any = []
  loader =true
  constructor( private http: HttpClient) { }

getScores(){
  const url ="https://api.football-data.org/v2/matches";
  this.http.get(url).subscribe((res)=>{
    this.scores = res
   
    console.log(res);
})}

  ngOnInit(): void {
    this.getScores()
  //  new myLivescores()
  var player = new  myLivescores.Player("<player div ID>", );
 
  }

}
