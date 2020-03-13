import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  @Input('type') type: any
  constructor() { }

  ngOnInit() { 
    
  }

}
