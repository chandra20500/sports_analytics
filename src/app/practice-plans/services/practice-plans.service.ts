import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PracticePlansService {
  constructor(private http: HttpClient) {}

  addPractice(data) {
    const url = `${environment.BASE_URL}v1/practice-segment`;
    return this.http.post<any>(url, data);
  }

  getAllPlayers() {
    const url = `${environment.BASE_URL}v1/player`;
    return this.http.get<any>(url, {});
  }

  addDrills(data) {
    const url = `${environment.BASE_URL}v1/drill`;
    return this.http.post<any>(url, data);
  }

  getAllDrills() {
    const url = `${environment.BASE_URL}v1/drill`;
    return this.http.get<any>(url, {});
  }
}
