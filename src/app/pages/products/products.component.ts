import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-products',
  imports: [NavbarComponent,ProductCardComponent,FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
