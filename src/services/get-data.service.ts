import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  products: Product[] = [];
  constructor() { 
    this.addSampleData();
  };

  
  addSampleData() {
    this.products.push(
      new Product(
        '0',
        'SuperStay Matte Ink Lipstick',
        'Maybelline',
        79.99,
        'A long-lasting matte liquid lipstick that delivers intense color and up to 16-hour wear.',
        '../assets/p1.jpg',
        ['Dimethicone', 'Isododecane', 'Silica', 'Disteardimonium Hectorite'],
        'Apply from the center of your lips outward for bold matte color.'
        ,31
      )
    );
  
    this.products.push(
      new Product(
        '1',
        'Fit Me Matte + Poreless Foundation',
        'Maybelline',
        89.99,
        'Lightweight foundation that mattifies and refines pores for a natural, seamless finish.',
        '../assets/p2.jpg',
        ['Water', 'Cyclopentasiloxane', 'Glycerin', 'Dimethicone', 'Talc'],
        'Apply evenly using fingertips, sponge, or foundation brush.',
        6
      )
    );
  
    this.products.push(
      new Product(
        '2',
        'Lash Princess False Lash Effect Mascara',
        'Essence',
        54.99,
        'A mascara that gives dramatic volume and sculpted length without clumps.',
        '../assets/p3.jpg',
        ['Aqua', 'Cera Alba', 'Paraffin', 'Acacia Senegal Gum', 'Panthenol'],
        'Sweep the brush from root to tip. Repeat for more volume.',
        16
      )
    );
  
    this.products.push(
      new Product(
        '3',
        'Reloaded Eyeshadow Palette - Velvet Rose',
        'Makeup Revolution',
        99.99,
        'An affordable eyeshadow palette with warm mattes and shimmers.',
        '../assets/p4.jpg',
        ['Talc', 'Mica', 'Magnesium Stearate', 'Dimethicone'],
        'Use a brush or fingertip to apply and blend on eyelids.',
        3
      )
    );
  
    this.products.push(
      new Product(
        '4',
        'Dewy Finish Setting Spray',
        'NYX Professional Makeup',
        69.99,
        'Lightweight mist that sets makeup with a fresh, dewy glow.',
        '../assets/p5.jpg',
        ['Water', 'Glycerin', 'Niacinamide', 'Phenoxyethanol'],
        'Shake well and spray over your face from 20cm after makeup.'
        ,7
      )
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
 getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
  
}
