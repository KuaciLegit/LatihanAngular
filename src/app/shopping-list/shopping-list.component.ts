// src/app/shopping-list/shopping-list.component.ts
import { Component } from '@angular/core';
import { ShoppingItem } from '../shopping-item.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  shoppingItems: ShoppingItem[] = [
    { id: 1, name: 'Beras 5kg', status: 'Inprogress', date: new Date('2023-10-01') },
    { id: 2, name: 'Gula 2kg', status: 'Done', date: new Date('2023-10-02') },
    { id: 3, name: 'Minyak Goreng', status: 'Cancel', date: new Date('2023-10-03') },
    { id: 4, name: 'Telur 1kg', status: 'Inprogress', date: new Date('2023-10-04') },
    { id: 5, name: 'Susu Kotak', status: 'Done', date: new Date('2023-10-05') },
    { id: 6, name: 'Roti Tawar', status: 'Cancel', date: new Date('2023-10-06') },
    { id: 7, name: 'Sabun Mandi', status: 'Inprogress', date: new Date('2023-10-07') },
    { id: 8, name: 'Shampoo', status: 'Done', date: new Date('2023-10-08') },
    { id: 9, name: 'Pasta Gigi', status: 'Cancel', date: new Date('2023-10-09') },
    { id: 10, name: 'Sikat Gigi', status: 'Inprogress', date: new Date('2023-10-10') }
  ];

  getStatusColor(status: string): string {
    switch(status) {
      case 'Done': return 'lightgreen';
      case 'Cancel': return 'lightcoral';
      default: return 'lightyellow';
    }
  }
}

