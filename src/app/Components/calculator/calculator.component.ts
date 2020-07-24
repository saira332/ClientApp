import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  public num1:number;
  public num2:number;
  public num3:number;
  public num4:number;
  public num5:number;
  
  public numf1:number;
  public numf2:number;
 
 
  add(){
   this.num3= (this.num1+this.num2+this.num4+this.num5 )*2.5/100 ;
  }
 addfitrana()
 {
   this.numf2=(this.numf1)*100;
 }
 Dates()
 {
   this.numf2=(this.numf1)*1600;
 }
  Raisins()
  {
    this.numf2=(this.numf1)*1920;
  }

  ngOnInit(): void {
  }

}
