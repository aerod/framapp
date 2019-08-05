import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: {};
  id: number;
  private sub: any;

  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.id && this.db.object(`/api/v1/products/${this.id}`).valueChanges().subscribe(
        product => {
          this.product = product;
          console.log('the little product', this.product);
        }
      );
    })

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
