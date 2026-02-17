import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieInterface } from '../models/serie';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private readonly url ='https://peticiones.online/api/series';
  
  constructor (private http: HttpClient){}

  getAll(): Observable<SerieInterface[]>{
    return this.http.get<SerieInterface[]>(this.url);
  }

  create(serie: SerieInterface){
     return this.http.post<SerieInterface>(this.url, serie)
  }
}
