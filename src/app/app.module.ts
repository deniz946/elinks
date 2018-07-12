import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    CategorySelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
