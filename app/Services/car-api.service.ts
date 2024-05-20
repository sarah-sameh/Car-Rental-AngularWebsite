import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  //private apiUrl ='http://localhost:61421/api/Car';
  constructor(private http:HttpClient) { }
  getAllCars()
  {
    return this.http.get<any>(`${environment.baseURL}/api/Car`);
  }
  getCarById(id:number)
  {
    return this.http.get<any>(`${environment.baseURL}/api/Car/${id}`);
  }
  getCarByUserId(id:number)
  {
    return this.http.get<any>(`${environment.baseURL}/api/Car/user/${id}`)
  }
  searchCarByModel(model:string)
  {
    return this.http.get<any>(`${environment.baseURL}/api/Car/search?model=${model}`);
  }
  //insertCar(car:any)
  //{
   // return this.http.post<any>(this.apiUrl,car);
  //}
  //updateCar(car:any,id:number)
  //{
    //return this.http.put<any>(`${this.apiUrl}/${id}`,car);
  //}
 // deleteCar(id:number)
  //{
   // return this.http.delete<any>(`${this.apiUrl}/${id}`)
  //}
  getCarsByPage(page: number)
   {
    return this.http.get<any>(`${environment.baseURL}/api/Car/page?page=${page}`);
  }
}
