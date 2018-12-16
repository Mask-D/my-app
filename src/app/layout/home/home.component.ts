import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  isChecked1:boolean;
  isCheck:FormControl = new FormControl(true);
  constructor() { }

  
    

  ngOnInit() {
  //  this.isCheck.valueChanges.subscribe(console.log)
  //  console.log(this.isCheck.value)
  }


  clicked(){
    this.isChecked1 = !this.isChecked1;
  }
}
