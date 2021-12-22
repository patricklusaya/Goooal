import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
public myMatches: any = []
myDates: any;
  constructor( private http: HttpClient , public datePipe: DatePipe) { 
    this.myDates = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }
 

getMyMatches(){
  const url = "https://app.sportdataapi.com/api/v1/soccer/matches?apikey=68c736a0-6174-11ec-91ff-29d6d9345955&season_id=1980&date_from="+ this.myDates;
  return this.http.get(url).subscribe((res)=>{
    this.myMatches =res
    console.log(res);
    
  })
}

  ngOnInit(): void {
    this.getMyMatches()
  }

}
