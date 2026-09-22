import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Member } from './member/member';
import { MemberForm } from './member-form/member-form';

@Component({
  selector: 'app-root',
  imports: [Member, RouterOutlet,MemberForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'lab';

}
