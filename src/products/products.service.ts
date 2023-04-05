import { Injectable } from '@nestjs/common';
import { db, Product } from './../db';

@Injectable()
export class ProductsService {
  public getAll(): Product[] {
    return db.products;
  }

  public getById(id: Product['id']): Product | null {
    return db.products.find((p) => p.id === id);
  }

  public delete(id: Product['id']): void {
    const index = db.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      db.products.splice(index, 1);
    }
  }
}
