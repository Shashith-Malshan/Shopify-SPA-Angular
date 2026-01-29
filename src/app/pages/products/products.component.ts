import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsService } from '../../api/products.service';

@Component({
  selector: 'app-products',
  imports: [NavbarComponent, ProductCardComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  private productsService = inject(ProductsService)

  productList: any[] = [];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data: any) => {
      console.log(data.products);

    });

  }
}