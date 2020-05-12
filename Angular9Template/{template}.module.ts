import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TemplateComponent } from './{template}.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ TemplateComponent ]
})
export class TemplateModule { }
