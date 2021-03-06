import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchServiceService } from '../search-service.service';


import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data:any = []
  loader = true;
  constructor(private http: HttpClient ,private searchService:SearchServiceService ) {
 
  }

  getData(){
    const url ='https://www.scorebat.com/video-api/v3'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      this.loader=false
      console.log(res);
    })
}
ngOnInit(): void {
  this.getData()
}

}  