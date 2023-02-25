import { Component, OnInit } from '@angular/core';
import { CompcommunicationService } from '../compcommunication.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
name = 'Component 3 name'
  constructor(private compServ : CompcommunicationService) { }

  ngOnInit(): void {
    this.compServ.finalname.subscribe(res => {
      this.name = res
    })
  }
  onUpdateName(compname:any){
    this.compServ.finalname.next(compname.value)
  }
}

