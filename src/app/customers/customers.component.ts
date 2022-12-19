import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {Customer} from "../model/customer.interface";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  customers! : Customer[];
  constructor(private customerService : CustomerService) {}
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

}
