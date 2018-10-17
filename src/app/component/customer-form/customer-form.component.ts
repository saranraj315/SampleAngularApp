import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  
  employee:Customer;
  isEditing: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private empService:CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employee = new Customer();
    this.isEditing = false;

    this.activatedRoute.params.subscribe(
      (params) => {
        let empId = params['id'];
        if (empId) {
          this.empService.getCustomerById(empId).subscribe(
            (data) => {
              this.employee = data;
              this.isEditing = true;
            }
          );
        }
      }
    );
  }

}