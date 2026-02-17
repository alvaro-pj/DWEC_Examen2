import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeriesService } from '../../../services/series';
import { Router } from '@angular/router';
import { SerieInterface } from '../../../models/serie';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class FormularioComponent {
  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    channel: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    rating: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^(10(\.0+)?|[0-9](\.[0-9]+)?)$/)],
    }),
  });

  constructor(
    private seriesService: SeriesService,
  ) {}

  created?: SerieInterface;

  create() {
    const payload: SerieInterface = {
      title: this.form.controls.title.value,
      channel: this.form.controls.channel.value,
      rating: Number(this.form.controls.rating.value),
      id: 0,
    };

    this.seriesService.create(payload).subscribe({
      next: (res) => {
        this.created = res;
      },
      error: (e) => console.error('Error creando:', e),
    });
  }
}
