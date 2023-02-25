import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildcompComponent } from '../viewchildcomp/viewchildcomp.component';

@Component({
  selector: 'app-viewparentcomp',
  templateUrl: './viewparentcomp.component.html',
  styleUrls: ['./viewparentcomp.component.css']
})
export class ViewparentcompComponent implements OnInit {
pname = 'Bhim'
  @ViewChild(ViewchildcompComponent) child! : ViewchildcompComponent;
  constructor() { }


  ngOnInit(): void {
  }

  onPNameSend(parent:any){
    console.log('parent data',parent.value)
    this.child.childname = parent.value;
  }
}
