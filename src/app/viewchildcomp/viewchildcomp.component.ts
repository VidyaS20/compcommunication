import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewparentcompComponent } from '../viewparentcomp/viewparentcomp.component';

@Component({
  selector: 'app-viewchildcomp',
  templateUrl: './viewchildcomp.component.html',
  styleUrls: ['./viewchildcomp.component.css']
})
export class ViewchildcompComponent implements OnInit {

  @ViewChild(ViewparentcompComponent) parent! : ViewparentcompComponent;
childname = 'vidya';
  constructor() { }

  ngOnInit(): void {
  }
  onNameSend(cname:any){
console.log('child data',cname.value)
    this.parent.pname = cname.value
  }
}
