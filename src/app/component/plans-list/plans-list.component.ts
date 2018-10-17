import { Component, OnInit } from '@angular/core';
import { Plans } from '../../model/plans';
import { ActivatedRoute } from '@angular/router';
import { PlansService } from '../../service/plans.service';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent implements OnInit {

  employees: Plans[];
  ladyLogo: string;
  gentLogo: string;

  constructor(private empService: PlansService, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        let field = params['field'];
        let srchValue = params['srchValue'];

        if (field && srchValue) {
          this.empService.searchEmployees(field, srchValue).subscribe(
            (data) => this.employees = data
          );
        } else {
          this.empService.getAllPlans().subscribe(
            (data) => this.employees = data
          );
        }
      }
    );
  }


}
