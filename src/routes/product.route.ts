import { Router } from 'express';
import { ProductController } from '@/controllers/product.controller';
import { CreateProductDto } from '@/dtos/product.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class ProductRoute implements Routes {
  public path = '/products';
  public router = Router();
  public product = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/getAll`, this.product.getProducts);
    this.router.get(`${this.path}/getbyId`, this.product.getProductById);
    this.router.post(`${this.path}/createProduct`, this.product.createProduct);
    this.router.put(`${this.path}/updateProduct`, this.product.updateProduct);
    this.router.delete(`${this.path}/deleteProduct`, this.product.deleteProduct);
  }
}
