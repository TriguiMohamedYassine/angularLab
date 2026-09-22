import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MemberModel } from '../../Models/Member';
import { MemberService } from '../../service/member-service';

@Component({
  selector: 'app-member',
  imports: [CommonModule , MatTableModule],
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
  

  displayedColumns: string[] = ['id', 'name', 'cin', 'Type', 'CreatedDate'];
  }
