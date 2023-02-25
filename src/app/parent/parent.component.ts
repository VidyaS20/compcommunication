import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  pTocName = 'vidya'
  childSuggestedName = ''
  constructor() { }

  ngOnInit(): void {
  }

  onDataSend(parentData:any){
    this.pTocName = parentData.value;
  }

  receivedChildData(event:any){
    console.log('****',event)
    this.childSuggestedName = event
  }
}


