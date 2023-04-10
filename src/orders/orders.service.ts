import { Injectable } from '@nestjs/common';
// import { db, Order } from './../db';
// import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../shared/services/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}
  // public getAll(): Order[] {
  //   return db.orders;
  // }

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  // public getById(id: Order['id']): Order | null {
  //   return db.orders.find((order) => order.id === id);
  // }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }

  // public deleteById(id: Order['id']): void {
  //   const index = db.orders.findIndex((order) => order.id === id);
  //   if (index !== -1) {
  //     db.orders.splice(index, 1);
  //   }
  // }

  public deleteById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }

  // public create(orderData: Omit<Order, 'id'>): Order {
  //   const newOrder = { ...orderData, id: uuidv4() };
  //   db.orders.push(newOrder);
  //   return newOrder;
  // }

  public create(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    return this.prismaService.order.create({
      data: orderData,
    });
  }

  // public updateById(id: Order['id'], orderData: Omit<Order, 'id'>): void {
  //   db.orders = db.orders.map((order) => {
  //     if (order.id === id) {
  //       return { ...order, ...orderData };
  //     }
  //     return order;
  //   });
  // }

  public updateById(
    id: Order['id'],
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    return this.prismaService.order.update({
      where: { id },
      data: orderData,
    });
  }
}
