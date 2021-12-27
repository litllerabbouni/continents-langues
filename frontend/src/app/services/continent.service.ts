import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Continent } from '../interfaces/Continent';
 
@Injectable({
    providedIn: 'root'
})
export class ContinentService {

    BASE_URL: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {} 

    getContinents(): Observable<Continent[]> {
        return this.http.get<Continent[]>(`${this.BASE_URL}/continents`);
    }
    
    createContinent(continent: Continent): Observable<Continent> {
        return this.http.post<Continent>(`${this.BASE_URL}/continents`, continent);
    }

    showContinent(id: string): Observable<Continent> {
        return this.http.get<Continent>(`${this.BASE_URL}/continents/${id}`);
    }

    updateContinent(id: string, continent: Continent): Observable<Continent> {
        return this.http.put<Continent>(`${this.BASE_URL}/continents/${id}`, continent);
    }

    deleteContinent(id: string): Observable<Continent> {
        return this.http.delete<Continent>(`${this.BASE_URL}/continents/${id}`);
    }

}
