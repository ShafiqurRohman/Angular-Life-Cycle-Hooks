import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { InteropObservable, interval } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements 
                            OnInit , 
                            OnDestroy, 
                            OnChanges, 
                            DoCheck, 
                            AfterContentInit, 
                            AfterContentChecked,
                            AfterViewInit,
                            AfterContentChecked
                            {

  counter: number = 0;
  interval: any;

  @Input() name: string = '';

  @ContentChild('parent') parent: any;

  constructor() {
    console.log('ChildComponent.constructor()');
    //console.log('this is parent' +this.parent);
   }

  ngOnInit(): void {
    console.log('ChildComponent.ngOnInit()');

    // this.interval = setInterval(() => {
    //   console.log(this.counter++);
    // }, 1000);
    //console.log('this is parent' +this.parent);
  }

  ngDoCheck(): void {
    console.log('ChildComponent.ngDoCheck()');
    //console.log('this is parent' +this.parent);
  }

  ngOnChanges(simple : SimpleChanges): void {
    console.log('ChildComponent.ngOnChanges()');
    //console.log('this is parent' +this.parent);
    console.log(simple);

  }

  ngOnDestroy(): void {
    console.log('ChildComponent.ngOnDestroy()');
    // clearInterval(this.interval);
  }

  ngAfterContentInit(): void {
    console.log('ChildComponent.ngAfterContentInit()');
    //console.log('this is parent' +this.parent);
  }

  ngAfterContentChecked(): void {
    console.log('ChildComponent.ngAfterContentChecked()');
 
  }


  ngAfterViewInit(): void {
    console.log('ChildComponent.ngAfterViewInit()');
  }
  ngAfterViewChecked(): void {
    console.log('ChildComponent.ngAfterViewChecked()');

  }


}


