import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() Parent2Child:any;
  @Output() child2Parent = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onDataSend(childtoparent:any){
    this.child2Parent.emit(childtoparent.value)
  }
}

