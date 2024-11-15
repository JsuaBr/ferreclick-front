import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../services/storage/user-storage.service';

const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  addCategory(categoryDto: any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/product-categories', categoryDto, {
      headers: this.createAuthorizationHeader()
    });
  }

  addProduct(productDto: any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/products', productDto, {
      headers: this.createAuthorizationHeader()
    });
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(BASIC_URL + 'api/product-categories', {
      headers: this.createAuthorizationHeader()
    });
  }  

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}
