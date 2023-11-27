import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  //On récupère dans le json les données des livres pour les utiliser dans la page détail de livres
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const titre = params.get('titre');
      this.bookService.getBook().subscribe(data => {
        this.book = data.book.find((n: { titre: string | null; }) => n.titre === titre);
      });
    });
  }
}
