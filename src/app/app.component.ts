import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  photos = [
    {
      url: './assets/unicommerce.png',
      description: 'Logomarca'
    },
    {
      url: './assets/ecommerce.png',
      description: 'Teclado'
    },
    {
      url: './assets/ecommerce.png',
      description: 'Teclado'
    }
  ];
}