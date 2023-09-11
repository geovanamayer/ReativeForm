import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    UserFormComponent
  ],
  
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
