import { Component } from '@angular/core';
import { Pagina } from "../components/pagina/pagina";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Pagina],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

}
