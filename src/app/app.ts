import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Template } from './template/template';
import { AngularFireModule } from '@angular/fire/compat';
import { Login } from './login/login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Template, RouterOutlet,AngularFireModule,Login,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'lab';
  b:boolean =false;
  constructor(private router: Router) { }

  ngOnInit():void{
    this.router.events.subscribe(()=>{
      this.b= this.router.url.includes('login')
    })
  }
}
