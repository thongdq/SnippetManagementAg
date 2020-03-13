import { Component, OnInit, Input } from '@angular/core';
import { Snippet } from 'src/app/entity/snippet';
import { SnippetService } from 'src/app/service/snippet/snippet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-snippet-right-info',
  templateUrl: './snippet-right-info.component.html',
  styleUrls: ['./snippet-right-info.component.css']
})
export class SnippetRightInfoComponent implements OnInit {
  @Input() selectedSnippet: Snippet;
  edit: boolean = false;

  constructor(private snippetService: SnippetService) { }

  ngOnInit() {
  }

  editSnippet(edit: boolean):void {
    this.edit = edit;
  }

  updateSnippet() {
    this.snippetService.updateSnippet(this.selectedSnippet).subscribe();
  }

}
