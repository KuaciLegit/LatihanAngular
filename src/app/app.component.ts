// src/app/app.component.ts
import { Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingListComponent], // <-- Import di sini
  template: `
    <app-shopping-list></app-shopping-list>
  `,
})
export class AppComponent {}