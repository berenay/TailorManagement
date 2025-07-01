import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  
  customers:Customer[]=[];
  dataLoaded= false;
  
  constructor(private customerService:CustomerService) {}

  
  ngOnInit(): void {
      this.getCustomers(); 
  }

  getCustomers(){
    console.log("api basladı");
    //asenkron calısıyor o yuzden apiBasladı-method-apiBitti calısıyor cunku 2 ve 3 neredeyse aynı and calısıyor
    this.customerService.getCustomers()  
    .subscribe(response => {this.customers = response.data   
    this.dataLoaded=true;
    })
    console.log("method bitti");
  }
}

