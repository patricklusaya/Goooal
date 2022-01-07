import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HighlightsServiceService } from '../highlights-service.service';
@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
 
  searchText="";
  data:any;
loader = true;
  constructor(private apiService:  HighlightsServiceService) { }
// getHighlights(){
// const url =" https://www.scorebat.com/video-api/v3";
// return this.http.get(url).subscribe((response)=>{
//   this.myHighlights= response
//   this.loader = false;
//   console.log(response);
  

// })
// }
  ngOnInit(): void {
    this.apiService.apiCall().subscribe((data: any)=>{
      console.log(data)
      this.loader=false
      this.data=data;     
    })
  }

}
