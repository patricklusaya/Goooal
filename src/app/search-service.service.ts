import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SearchServiceService {
  searchOption=[]
  public Post:any = []

  postUrl : string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

 

  }


