import { Component, OnInit } from '@angular/core';
import { CompcommunicationService } from '../compcommunication.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
name = 'Component 2 name'
  constructor(private compServ : CompcommunicationService) { }

  ngOnInit(): void {
    this.compServ.finalname.subscribe(res =>{
      this.name = res;
    })
  }

  onUpdateName(compname:any){
  this.name = compname.value
  this.compServ.finalname.next(compname.value)
  }
}
