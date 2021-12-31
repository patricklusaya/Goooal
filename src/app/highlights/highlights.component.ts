import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
public myHighlights: any = []
loader = true;
  constructor(private http: HttpClient) { }
getHighlights(){
const url =" https://www.scorebat.com/video-api/v3";
return this.http.get(url).subscribe((response)=>{
  this.myHighlights= response
  this.loader = false;
  console.log(response);
  

})
}
  ngOnInit(): void {
    this.getHighlights()
  }

}
