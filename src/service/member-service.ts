import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberModel } from '../Models/Member';
@Injectable({
  providedIn: 'root',//injectable sur toute la route
})
// decorateur qui declare que le service accepte
//detre injecte dans un composant ou dans un autre serv
export class MemberService {
  
  constructor(private http:HttpClient){

  }
  //les fonctions qui generent des requete http
  //[get,post,delete,put patch]

  getAllMembers(){
    return this.http.get<MemberModel[]>('http://localhost:3000/member')
  }
}
