import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isChild: boolean = false;
  name: string = '';

  constructor() {
    console.log('ParentComponent.constructor()');
   }

  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit()');
  }

  childToggle(): void {
    this.isChild = !this.isChild;
  }


}
