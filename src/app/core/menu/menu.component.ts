import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })

export class MenuComponent {

  @ViewChild('navbar') navbar: ElementRef;

  toggleNavbar() {
    const element = this.navbar.nativeElement as HTMLElement;
    element.classList.toggle('show');
  }
}

