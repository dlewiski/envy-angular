import { Component } from '@angular/core';
import { GreenStory } from './models/greenStory.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ENVY';

  stories: GreenStory[] = [
  new GreenStory('Adiddas Recyled Yoga Line', 'clothing', 'http://www.greenmatters.com/news/2018/03/29/Z1yaU1T/adidas-yoga')
];
}
