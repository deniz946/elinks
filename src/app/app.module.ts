import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { ResourcesTableComponent } from './components/resources-table/resources-table.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyB1UdXkJ-Ms-Z3TTn9a5WV2ZWuKNh2brvo',
  authDomain: 'elinks-9d75a.firebaseapp.com',
  databaseURL: 'https://elinks-9d75a.firebaseio.com',
  projectId: 'elinks-9d75a',
  storageBucket: '',
  messagingSenderId: '462304448901'
};

@NgModule({
  declarations: [
    AppComponent,
    CategorySelectorComponent,
    NavbarComponent,
    ResourcesTableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
