import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  private subscription?: Subscription;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.subscription = this.movieService
      .getAll()
      .subscribe((movies) => (this.movies = movies ?? []));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
