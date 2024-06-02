import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "../tools/header/header.component";
import { FooterComponent } from "../tools/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'my-tools';
}
