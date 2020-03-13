import { Component, OnInit } from '@angular/core';
import { SnippetService } from '../../../service/snippet/snippet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Snippet } from 'src/app/entity/snippet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-snippet-list',
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.css']
})
export class SnippetListComponent implements OnInit {
  userId: number;
  snippets: Observable<Snippet[]>;
  selectedSnippet: Snippet;

  constructor(private route: ActivatedRoute, private snippetService: SnippetService, private router: Router) { }

  ngOnInit() {
      this.userId = this.route.snapshot.params['userId'];
      this.snippets = this.snippetService.getUserSnippet(this.userId);
      //this.selectedSnippet = this.snippets[0];
  }

  onSelect(snippet: Snippet): void {
    this.selectedSnippet = snippet;
  }

}
