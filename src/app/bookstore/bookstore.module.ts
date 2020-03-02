import { Book } from './../model/book.model';
import { RouterModule } from '@angular/router';
import { ModelModule } from './../model/model.module';
import { BookStoreComponent } from './bookstore.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AdminComponent } from './admin.component';
import { AdminRepository } from '../model/admin.repository';


@NgModule({
    declarations: [BookStoreComponent],
    imports: [
      CommonModule,
      ModelModule,
      RouterModule,
      FormsModule
    ],
    providers: [Book, AdminRepository],
    exports:[BookStoreComponent]
  })
  export class BookstoreModule { }