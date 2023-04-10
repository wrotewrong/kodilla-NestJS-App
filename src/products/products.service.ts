import { Injectable } from '@nestjs/common';
// import { db, Product } from './../db';
// import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../shared/services/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  public getById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }

  // public delete(id: Product['id']): void {
  //   const index = db.products.findIndex((p) => p.id === id);
  //   if (index !== -1) {
  //     db.products.splice(index, 1);
  //   }
  // }

  public deleteById(id: Product['id']): Promise<Product> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }

  public create(
    productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    return this.prismaService.product.create({
      data: productData,
    });
  }

  //   public updateById(
  //     id: Product['id'],
  //     productData: Omit<Product, 'id'>,
  //   ): Product {
  //     const index = db.products.findIndex((p) => p.id === id);
  //     let updateProduct = db.products[index];
  //     updateProduct = { ...updateProduct, ...productData };
  //     db.products.splice(index, 1, updateProduct);
  //     return updateProduct;
  //   }

  public updateById(
    id: Product['id'],
    productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    return this.prismaService.product.update({
      where: { id },
      data: productData,
    });
  }
}
