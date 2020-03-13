import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';
import { Snippet } from 'src/app/entity/snippet';
import { SnippetService } from 'src/app/service/snippet/snippet.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  snippets: Observable<Snippet>;

  constructor(private userService: UserService, private snippetService: SnippetService, private router: Router) { }

  ngOnInit() {
      this.reloadData();
  }

  reloadData() {
      this.users = this.userService.getUserList();
  }

  getUserSnippet(id: number) {
      this.router.navigate(['userSnippet', id]);
  }

}
