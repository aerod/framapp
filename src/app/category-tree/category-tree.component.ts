import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {
  categories: any[];

  constructor(
    db: AngularFireDatabase
  ) {
    db.list('/api/v1/categories').valueChanges().subscribe(
      categories => {
        this.categories = categories;
        console.log('c', categories);
      }
    );
  }

  ngOnInit() {
  }

}
