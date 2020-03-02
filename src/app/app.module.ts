import { BookStoreComponent } from './bookstore/bookstore.component';

import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookstoreModule } from './bookstore/bookstore.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './bookstore/admin.component';
import { Book } from './model/book.model';
import { AdminRepository } from './model/admin.repository';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BookstoreModule
  ],
  providers: [AuthGuard, Book, AdminRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
