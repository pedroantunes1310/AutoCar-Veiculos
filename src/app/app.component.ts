import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { HighlightComponentComponent } from "./highlight-component/highlight-component.component";
import { VehicleListComponentComponent } from "./vehicle-list-component/vehicle-list-component.component";
import { ContactComponentComponent } from "./contact-component/contact-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent, HighlightComponentComponent, VehicleListComponentComponent, ContactComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula2';
}
