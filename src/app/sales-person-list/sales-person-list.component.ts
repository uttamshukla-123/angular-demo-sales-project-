import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create a array of object
  salesPersonList:SalesPerson[]=[
    new SalesPerson("Uttam","Shukla","uttam@gmail.com",680),
    new SalesPerson("Raj","Mathur","raj@gmail.com",45.0),
    new SalesPerson("Ravi","Sharma","ravi@gmail.com",88.6),
    new SalesPerson("Pintu","Chauhan","pintu@gmail.com",677),
    new SalesPerson("Ranu","Gangotre","ranu@gmail.com",203.5),
    new SalesPerson("Manu","Ganudhi","mau@gmail.com",520.4)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
