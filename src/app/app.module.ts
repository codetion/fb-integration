import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FacebookModule } from 'ngx-facebook';
import { FbInitService } from './services/fbInit/fb-init.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LoginComponent,
  ],

  imports: [
    FormsModule,
    BrowserModule,
    FacebookModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonToggleModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppCustomLogic,
      multi: true,
      deps: [FbInitService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function initializeAppCustomLogic(fbInitService: FbInitService): () => Promise<void> {
  return () => fbInitService.fbInit()
}