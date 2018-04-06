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
  new GreenStory('You Can Fish Plastic From Amsterdams Canals On This Eco-Boat Tour','The company operates a fleet of ten boats made from recovered plastic.', 'DESIRÉE KAPLAN', 'waste', 3, 'http://www.greenmatters.com/community/2018/03/30/ZhFkv6/plastic-amsterdam-canals', 'http://media.greenmatters.com/Z2aQO7Y/770x404/pexels-photo-851039-1522433681590.jpeg', true),

  new GreenStory('Adiddas Recyled Yoga Line','Adidas has committed to making a dent in plastic pollution by teaming up with Parley for the Oceans to create products out of recycled plastic.', 'BRIAN SPAEN', 'clothing', 24, 'http://www.greenmatters.com/news/2018/03/29/Z1yaU1T/adidas-yoga', 'http://media.greenmatters.com/1BrB7o/970x508/screenshot-twitter.com-2018.03.30-08-58-53-1522414745627.png', false),

  new GreenStory('This Device Can Double The "Green" Life Of Bananas To Reduce Waste','Have you ever had your bananas go brown while sitting on your kitchen counter? Sadly, youre not alone. Half of the produce we buy on average is thrown away, and bananas are one of the most popular in that group. In order to extend the life of these bananas and other fresh produce, one company has created a filter that prevents them from ripening.', 'BRIAN SPAEN', 'food', 21, 'http://www.greenmatters.com/food/2018/03/30/Z2wBmsE/produce-double-life-new-filter', 'http://media.greenmatters.com/Z1LXbpa/840x440/cereal-breakfast-meal-food-1522430846897.jpg', false)
];

  toolkit: GreenTool[] = [
    new GreenTool("water bottle", "Buy and reuse your own water bottle to save money and raw plasic. Buying bottled water is costly and harmful to the environment", 5)
  ];


  toggleScoreCard(){
    this.scoreCard = !this.scoreCard;
  }
}
