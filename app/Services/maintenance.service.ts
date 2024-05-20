import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http:HttpClient) { }
  getById(id:number)
  {
    return this.http.get<any>(`${environment.baseURL}/api/Maintenance/${id}`)
  }
}
