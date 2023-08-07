import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any;

  async getUsers() {
    const response = await fetch('https://randomuser.me/api/');
    this.users = await response.json();
    console.log(this.users);
  }

  constructor() {}

  ngOnInit(): void {
    console.log('hello');
    this.getUsers();
  }
}
