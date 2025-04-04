// Definisikan interface
export interface ShoppingItem {
    id: number;
    name: string;
    status: 'Inprogress' | 'Done' | 'Cancel';
    date: Date;
  }