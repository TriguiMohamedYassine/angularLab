import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MemberModel } from '../../Models/Member';

@Component({
  selector: 'app-member',
  imports: [CommonModule , MatTableModule],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member{

  dataSource:MemberModel[]=[] 
  displayedColumns: string[] = ['id', 'name', 'cin', 'Type', 'CreatedDate'];
}
