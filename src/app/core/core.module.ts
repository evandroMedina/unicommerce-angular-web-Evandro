import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header/header.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({

    declarations: [HeaderComponent, FooterComponent, MenuComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, FooterComponent, MenuComponent]
})
export class CoreModule {}