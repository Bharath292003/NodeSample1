import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Product } from '@/interfaces/product.interace';
import { ProductService } from '@/services/product.service';
import { error } from 'winston';
// import { ProductModel } from '@/models/product.model';


export class ProductController {
  public product = Container.get(ProductService);

  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllProductdata: Product[] = await this.product.findAllProduct();

      res.status(200).json({ data: findAllProductdata, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product_id: string = req.params.id;
      const findOneProductData: Product = await this.product.findProductById(product_id);

      res.status(200).json({ data: findOneProductData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ProductData: Product = req.body;
      const createProductData: Product = await this.product.createProduct(ProductData);
     
      if(createProductData==null) res.status(204).json({Message:"No data available"})
      res.status(201).json({ data: createProductData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product_id: string = req.params.id;
      const productData: Product = req.body;
      const updateProductData: Product = await this.product.updateProduct(product_id, productData);
      if(updateProductData==null) res.status(204).json({Message:"No data available"})
      res.status(200).json({ data: updateProductData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product_id: string = req.params.id;
      const deleteProductData: Product = await this.product.deleteProduct(product_id);

      res.status(200).json({ data: deleteProductData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
