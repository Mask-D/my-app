import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from 'src/app/http-service.service';
import {Users} from 'src/app/users';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [HttpServiceService]

})
export class ProjectsComponent implements OnInit {
  users: Users[]=[];
  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    this.httpService.getProjects().subscribe((data:any) => {
      this.users = data;
      
      
    }
      );
  }

}
