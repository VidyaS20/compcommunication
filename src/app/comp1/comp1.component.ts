import { Component, OnInit } from '@angular/core';
import { CompcommunicationService } from '../compcommunication.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
name = 'component 1 name'
  constructor(private compServ : CompcommunicationService) { }

  ngOnInit(): void {
    this.compServ.finalname.subscribe(res => {
      this.name = res;
    })
  }

  onUpdate(compname:any){
    this.name = compname.value
    this.compServ.finalname.next(compname.value)
  }
}
