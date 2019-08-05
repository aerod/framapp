import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: any[];
  private category: String;
  private sub: any;

  constructor(
    db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {
    db.list('/api/v1/products').valueChanges().subscribe(
      products => {
        if (this.category) {
          products = products.filter((product:any) => {
            return product.category === this.category;
          })
        }
        this.products = products;
      }
    );
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.category = params['name'];
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
