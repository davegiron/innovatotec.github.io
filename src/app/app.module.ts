import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
 
import { MotComponent } from './mot/mot.component';
import { ContactComponent } from './contact/contact.component';
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MotComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
