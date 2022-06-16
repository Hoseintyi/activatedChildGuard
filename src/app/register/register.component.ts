import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../deactivate.guard';
import { SaveregisterdataService } from '../saveregisterdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit , CanComponentDeactivate {

  @ViewChild('inputregister') input: ElementRef | any;

  constructor(private savedataService: SaveregisterdataService) { }
 

  ngOnInit(): void {
  }
   canDeactivate() : boolean | Promise<boolean> | Observable<boolean>
  {
  if(this.input.nativeElement.value !== '')
  {
    debugger;
    return confirm('DO YOU WANA SAVE THAT?');
    debugger;
    // if(confirm. === 'OK')
    // {
    //   this.input.nativeElement.value = this.savedataService.inputRegisterData
    // }
  }else
  {
    return true;
  }
  }

}
