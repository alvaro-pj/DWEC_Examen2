import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieInterface } from '../../../models/serie';
import { SeriesService } from '../../../services/series';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pagina.html',
  styleUrl: './pagina.css',
})
export class Pagina {
  series$:Observable<SerieInterface[]>;

  constructor(private serieService: SeriesService){
    this.series$ = this.serieService.getAll();
  }
}
