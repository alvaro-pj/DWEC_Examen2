import { Component, signal } from '@angular/core';
import {  RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer';
import { HeaderComponent } from './layout/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('ExamenCliente');
}
