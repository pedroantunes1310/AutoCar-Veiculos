import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { HighlightComponentComponent } from "./highlight-component/highlight-component.component";
import { VehicleListComponentComponent } from "./vehicle-list-component/vehicle-list-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent, HighlightComponentComponent, VehicleListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula2';
}
