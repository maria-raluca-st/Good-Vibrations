import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  signUpPath = './signup';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchToSignUp(){
    this.router.navigate(['./signup']);
  }
  switchToSignIn(){
    this.router.navigate(['./login']);
  }
}
