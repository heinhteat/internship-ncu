import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Advisor } from "../classes/advisor";

@Injectable({
    providedIn: 'root'
})

export class AdvisorService {
    private apiUrl = 'http://localhost:3000/advisors';

    constructor(private http: HttpClient) { }

    getAdvisors(): Observable<Advisor[]> {
        return this.http.get<Advisor[]>(this.apiUrl);
    }

    getAdvisorById(id: number): Observable<Advisor> {
        return this.http.get<Advisor>(`${this.apiUrl}/${id}`);
    }

    createAdvisor(advisor: Advisor): Observable<Advisor> {
        return this.http.post<Advisor>(this.apiUrl, advisor);
    }

    updateAdvisor(id: number, advisor: Advisor): Observable<Advisor> {
        return this.http.put<Advisor>(`${this.apiUrl}/${id}`, advisor);
    }

    deleteAdvisor(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}