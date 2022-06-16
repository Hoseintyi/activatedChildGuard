import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  successLogin: boolean = false;

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  onclickusers()
  {
    this.router.navigate(['admin/manageusers']);

  }

  onclickpages()
  {
    this.router.navigate(['admin/managePages']);
  }

  public submitLogin(e: Event,email: string, password: string)
  {
    e.preventDefault();
    if(email === 'f@f.com' && password === '123')
    {
      this.authservice.login();
      this.successLogin=true;
      
    }else
    {
      this.router.navigate(['/notAuthorized'])
    }

  
    

  }
   public closeSuccessMessage()
    {
      this.successLogin=false;
    }
}
