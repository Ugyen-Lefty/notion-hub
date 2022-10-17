import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './website/landing-page/landing-page.component';
import { AuthComponent } from './core/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const firebaseConfig = {
  apiKey: "AIzaSyANroZJkBvwm2uqO8ga-Ul0mY-0f8VcMAM",
  authDomain: "non-hub.firebaseapp.com",
  projectId: "non-hub",
  storageBucket: "non-hub.appspot.com",
  messagingSenderId: "667934167047",
  appId: "1:667934167047:web:7aeb4a563e28073a091aa2",
  measurementId: "G-DBLL2CLJ8J"
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    FlexModule,
    MatIconModule,
    MatButtonModule,
    AngularFireModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
