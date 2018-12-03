import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { AzureBlobViewerComponent } from './azureblobviewer/azureblobviewer.component';
import {KeysPipe} from './helpers/azureblob.pipe';

@NgModule({
  imports:      [ HttpClientModule, BrowserModule ],
  declarations: [ AppComponent, AzureBlobViewerComponent, KeysPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
