import { Component } from '@angular/core';
import { FormularioComponent } from "../components/formulario/formulario";

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {

}
