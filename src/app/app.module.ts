import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbdCollapseNavbar} from './main-bar/main-bar.component';
import { MemberComponent } from './members-list/members-list.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookComponent } from './book/book.component';
import { LoanComponent } from './loan-list/loan-list.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { MemberProfileComponent } from './members-profile/members-profile.component';
import { BookDetailsComponent } from './books-details/books-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    ContactFormComponent,
    BookComponent,
    LoanComponent,
    HomePageComponent,
    FooterComponent,
    MemberProfileComponent,
    MemberComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgbdCollapseNavbar,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
