import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MemberModel } from '../../Models/Member';
import { MemberService } from '../../service/member-service';
import { MatIconModule } from '@angular/material/icon';
import { MemberForm } from '../member-form/member-form';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-member',
  imports: [CommonModule , MatTableModule ,MatIconModule,MemberForm,RouterLink,RouterOutlet],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member implements OnInit{

  dataSource:MemberModel[]=[] 

  //injection de dependances
  constructor(private MS:MemberService){}
    ngOnInit(){
      this.MS.getAllMembers().subscribe((response)=>{
        this.dataSource=response
      })
    }
  

  displayedColumns: string[] = ['id', 'name', 'cin', 'Type', 'CreatedDate', 'actions'];
  }
