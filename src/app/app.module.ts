import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SnippetListComponent } from './component/snippet/snippet-list/snippet-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { SnippetRightInfoComponent } from './component/snippet/snippet-right-info/snippet-right-info.component';
import { SnippetLeftInfoComponent } from './component/snippet/snippet-left-info/snippet-left-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SnippetListComponent,
    UserListComponent,
    SnippetRightInfoComponent,
    SnippetLeftInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
