import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  apiUrl= "https://localhost:7190/api/customers/getall";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
     return this.httpClient
     .get<ListResponseModel<Customer>>(this.apiUrl);
    }
}
