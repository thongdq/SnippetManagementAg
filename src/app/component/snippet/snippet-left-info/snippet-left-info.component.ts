import { Component, OnInit, Input } from '@angular/core';
import { Snippet } from 'src/app/entity/snippet';
@Component({
  selector: 'app-snippet-left-info',
  templateUrl: './snippet-left-info.component.html',
  styleUrls: ['./snippet-left-info.component.css']
})
export class SnippetLeftInfoComponent implements OnInit {
    @Input() snippet: Snippet;

    constructor() { }

    ngOnInit() {
    }

}
