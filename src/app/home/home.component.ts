import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public intervalSubscribtion: Subscription | any;
  constructor() { }
  ngOnDestroy(): void {
    this.intervalSubscribtion.unsubscribe();
  }

  ngOnInit(): void {

    



/// NAVAHI MOKHTALEF ROOOY SAFHE ROOO LISTEN KARDAN IN KHUDESH Y MESAAL OBSERVABLE BII PAYAANE
    document.addEventListener('click',(event)=>{
      console.log(event);
    });

    const interval$ = new Observable((subsciber: Observer<number>)=>{
      // MESAAAL 1
      // subsciber.next(1);
      // subsciber.next(2);
      // subsciber.next(3);
      // subsciber.error(new Error('eror in app!!!'));

      //MESSAAAL 2 
      let count = 0 ; 
      setInterval(()=>{
       subsciber.next(count++);
       if(count===9){
        subsciber.complete();
      //  subsciber.error(new Error('WE MAKE ERRRORRR'));
      }
      },1000);
      
    });

   this.intervalSubscribtion= interval$.subscribe(
      (val)=>{console.log(val);},
      (err)=>{console.log(err);},
      ()=>{console.log('COMPELETE');}
    );

  }

  

}
