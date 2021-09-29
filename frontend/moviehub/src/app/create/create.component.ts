import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  private subscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      year: [''],
      director: [''],
      category: [''],
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public submit(): void {
    this.subscription = this.movieService
      .create({
        title: this.form.get('title')?.value,
        year: this.form.get('year')?.value,
        director: this.form.get('director')?.value,
        category: this.form.get('category')?.value,
      })
      .subscribe(() => {
        this.router.navigate(['list']);
      });
  }
}
