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

  toggleScoreCard(){
    this.scoreCard = !this.scoreCard;
  }
}
