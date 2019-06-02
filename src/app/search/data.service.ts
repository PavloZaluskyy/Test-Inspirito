import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataInterface } from './data-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "./assets/Data.json";
items = this.getDate();
  constructor(private http: HttpClient) {}

  getDate(): Observable<DataInterface[]>{
    return this.http.get<DataInterface[]>(this._url);
  }
}
