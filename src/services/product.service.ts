import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Product } from '@/interfaces/product.interace';
import { ProductModel } from '@/models/product.model';
import { exit } from 'process';
import { randomUUID } from 'crypto';

@Service()
export class ProductService {
  public async findAllProduct(): Promise<Product[]> {
    const products: Product[] = await ProductModel.find();
    return products;
  }

  public async findProductById(_id: string,productData:Product): Promise<Product> {
    const findproduct: Product = await ProductModel.findOne({ _id: productData._id });

    return findproduct;
  }

  public async createProduct(ProductData: Product): Promise<Product> {
    const findproduct: Product = await ProductModel.findOne({ ProductName: ProductData.ProductName});
    if(findproduct){
        exit;
    }
    ProductData.ProductId = randomUUID();
    const Products: Product = await ProductModel.create(ProductData);
    return Products;
  }

  public async updateProduct(_id: string, productData: Product): Promise<Product> {
    
    const updateProductById: Product = await ProductModel.findByIdAndUpdate( productData._id, { ...productData });
   
    return updateProductById;
  }

  public async deleteProduct(_id: string,productData:Product): Promise<Product> {
    const deleteProductById: Product = await ProductModel.findByIdAndDelete(productData._id,{...productData});

    return deleteProductById;
  }
}
