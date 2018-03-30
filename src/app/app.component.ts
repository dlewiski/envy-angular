import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GreenStory } from './models/greenStory.model';
import { GreenTool } from './models/greenTool.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ENVY';
  environmentalImpact = 100;
  scoreCard = false;

  stories: GreenStory[] = [
  new GreenStory('Adiddas Recyled Yoga Line','Adidas has committed to making a dent in plastic pollution by teaming up with Parley for the Oceans to create products out of recycled plastic.', 'BRIAN SPAEN', 'clothing', 24, 'http://www.greenmatters.com/news/2018/03/29/Z1yaU1T/adidas-yoga', 'http://media.greenmatters.com/1BrB7o/970x508/screenshot-twitter.com-2018.03.30-08-58-53-1522414745627.png', true)
];

  toolkit: GreenTool[] = [
    new GreenTool("water bottle", "Buy and reuse your own water bottle to save money and raw plasic. Buying bottled water is costly and harmful to the environment", 5)
  ];


  toggleScoreCard(){
    this.scoreCard = !this.scoreCard;
  }
}
