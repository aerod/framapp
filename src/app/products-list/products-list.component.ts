import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any[];
  
  constructor(
    db: AngularFireDatabase
  ) {
    db.list('/api/v1/products').valueChanges().subscribe(
      products => {
        this.products = products;
        console.log('p', products);
      }
    );
  }

  ngOnInit() {
  }

}
