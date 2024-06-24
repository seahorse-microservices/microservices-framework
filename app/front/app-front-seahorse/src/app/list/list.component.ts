import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ListService } from './list.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class listComponent implements OnInit {

  users: User[] = [];
  
  constructor(protected listService : ListService) {}

  ngOnInit() {

    this.getUsersFromComponent();
  }


  getUsersFromComponent(){

    this.listService.getUsers().subscribe(
      {next: res => this.users = res,
       complete: () => {},
       error: () => {}
      });
  }
}
