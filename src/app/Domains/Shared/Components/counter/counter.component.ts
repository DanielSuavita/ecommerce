import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;
  constructor(){
    // No Async; Before Render
    console.log('Constructor');
    console.log('-'.repeat(50));
  }

  ngOnChanges(changes:SimpleChanges){
    //Before and During Render
    console.log('ngOnChanges');
    console.log('-'.repeat(50));
    console.log(changes);
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      console.log(duration);
      this.changeDuration();
    }
  }

  ngOnInit(){
    //Async; After Render; Una vez
    console.log('ngOnInit');
    console.log('-'.repeat(50));
    console.log(`Duration = ${this.duration}`);
    console.log(`Message = ${this.message}`);
    this.counterRef = window.setInterval(()=>{
      console.log('Running Interval');
      this.counter.update(prevState => prevState + 1);
    }, 1000)
  }

  ngAfterViewInit(){
    //Async; After Child Render; Una vez
    console.log('ngAfterViewInit');
    console.log('-'.repeat(50));
  }

  ngOnDestroy(){
    //Async; After Render; Una vez; Destruye el componente
    console.log('ngOnDestroy');
    console.log('-'.repeat(50));

  }

  changeDuration(){
    console.log('changeDuration');
    window.clearInterval(this.counterRef);
  }
}
