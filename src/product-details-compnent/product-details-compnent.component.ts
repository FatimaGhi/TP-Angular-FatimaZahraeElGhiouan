import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-product-details-compnent',
  standalone: true,
  imports: [CommonModule],
  providers: [GetDataService],
  templateUrl: './product-details-compnent.component.html',
  styleUrls: ['./product-details-compnent.component.css']
})
export class ProductDetailsCompnentComponent implements OnChanges {
  @Input() productId!: string;
  product?: Product;

  private dataService = inject(GetDataService); 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productId'] && this.productId) {
      this.product = this.dataService.getProductById(this.productId);
      console.log(this.product);
    }
  }
}
