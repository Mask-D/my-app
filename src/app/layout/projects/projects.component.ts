import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from 'src/app/http-service.service';
import {Users, Roles, Projects} from 'src/app/users';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [HttpServiceService]

})
export class ProjectsComponent implements OnInit {
  users: Users[]=[];
  projects: Projects[]=[];
  roles: Roles[]=[];
  index: number;
  ispicked:number[]= new Array();

  searchStr ="";
  searchRole ="";
isChecked2:boolean = true;
isChecked3:boolean=true;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    this.httpService.getRoles().subscribe((data:any) => this.roles = data);
    this.httpService.getData().subscribe((data:any) => this.users = data);
    this.httpService.getProjects().subscribe((data:any) => {
      this.projects = data;
      for(this.index=0; this.index<this.projects.length; this.index++)
    {
      this.ispicked[this.index] = 0;
    }
    this.ispicked[0] = 1;
      
    }
      ); 
  }
  picked(ind:number){
    
    //this.user1 = this.users[this.index].name;
    for(this.index=0; this.index<this.projects.length; this.index++)
    {this.ispicked[this.index] = 0;}
    this.ispicked[ind] = 1;
    this.isChecked2=true;

   //console.log(this.ispicked);
  }

  pushCreateRole(ind:number){
    this.picked(ind);
    this.isChecked2=false;

  }

  pushCreateRole_first(){
    this.isChecked3=true;
  }
  pushCreateRole_second(){
    this.isChecked3=false;
  }

  searchString(str:string){
    this.searchStr = str;
  }
  searchRoles(str:string){
    this.searchRole = str;
  }
}
