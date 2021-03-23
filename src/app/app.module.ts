import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Imported Syncfusion Progress button module from split buttons package
import { ProgressButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProgressButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
