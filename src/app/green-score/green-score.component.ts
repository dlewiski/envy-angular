import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GreenTool } from '../models/greenTool.model';

@Component({
  selector: 'app-green-score',
  templateUrl: './green-score.component.html',
  styleUrls: ['./green-score.component.css']
})
export class GreenScoreComponent {
  @Input() childScoreCard: boolean;
  @Output() clickedToggleScoreCard = new EventEmitter();

  toggleScoreCard() {
    this.clickedToggleScoreCard.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
