import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


declare var myLivescores: any;

@Component({
  selector: 'app-livescores',
  templateUrl: './livescores.component.html',
  styleUrls: ['./livescores.component.css']
})
export class LivescoresComponent implements OnInit {

  constructor( private http: HttpClient) { }



  ngOnInit(): void {


  }

}

