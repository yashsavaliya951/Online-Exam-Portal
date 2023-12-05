import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private adminPanelData:UserService) { }

  adminData:any;
  ngOnInit(): void {
    this.adminPanelData.getAdminPanelData().subscribe((res:any)=>{
      this.adminData = res;
    })
  }

}
