import { Component } from '@angular/core';
import { Fruit } from './model';
import { FRUIT } from './fruit';

@Component({
  // Component directives
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Directives';
  Fruits: Fruit[] = FRUIT;
  selectedFruit!: Fruit;
  // Add a new fruit to the list
  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit;
  }
}
