import { Component, OnInit } from '@angular/core';
import { LoanService } from './loan-list.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanComponent implements OnInit {
  
  loans : any;

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.loanService.getLoans().subscribe(
      data => {
        this.loans = data.loan;
      }
    );
  }
}
