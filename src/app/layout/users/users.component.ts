import { Component, OnInit, Input } from '@angular/core';
import {HttpServiceService} from 'src/app/http-service.service';
import {Users, Roles} from 'src/app/users';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [HttpServiceService]

})
export class UsersComponent implements OnInit {
  users: Users[]=[];
  roles: Roles[]=[];
  proj: Roles[]=[];
  user1: string;
  index: number;
  arr: string[];
  i: number=1;
  ispicked:number[]= new Array();
  isChecked2:any;
  foundUser = [];
searchStr ="";

search1: FormControl = new FormControl("");


  constructor(private httpService: HttpServiceService) {
    

    
  }

  ngOnInit() {
    this.isChecked2="Роли";


    this.httpService.getRoles().subscribe((data:any) => this.roles = data);
    
    this.httpService.getData().subscribe((data:any) => {
      this.users = data;
    console.log(this.users[1].name); 
    for(this.index=0; this.index<this.users.length; this.index++)
    {
      this.ispicked[this.index] = 0;
    }
    this.ispicked[0] = 1;
    //console.log(this.users);
    
   // console.log(this.arr[this.i]);       ////////////////
    },
    error => {
      console.log("Не удалось получить таблицу");
    }
      );
     // console.log(this.users);
  }


  picked(ind:number){
    
    //this.user1 = this.users[this.index].name;
    for(this.index=0; this.index<this.users.length; this.index++)
    {this.ispicked[this.index] = 0;}
    this.ispicked[ind] = 1;
    this.isChecked2 = true;

   //console.log(this.ispicked);
  }

  pushSettings(ind:number) {
    this.picked(ind);
    this.isChecked2 = false;

    //this.isChecked2 = "Настройки";
  }
 
  searchString(str: string){
    this.searchStr = str;
    console.log(str);
  }
  

}
