import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoanComponent } from './loan-list/loan-list.component'
import { ContactFormComponent } from './contact-form/contact-form.component'
import { MemberComponent } from './members-list/members-list.component'
import { BookComponent } from './book/book.component';
import { MemberProfileComponent } from './members-profile/members-profile.component';
import { BookDetailsComponent } from './books-details/books-details.component';

const routes: Routes =  [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'member', component: MemberComponent },
  { path: 'book', component: BookComponent },
  { path: 'member/:prenom', component: MemberProfileComponent },
  { path: 'book/:titre', component: BookDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
