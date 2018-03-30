import { Component, Input } from '@angular/core';
import { GreenTool } from '../models/greenTool.model';

@Component({
  selector: 'app-green-score',
  templateUrl: './green-score.component.html',
  styleUrls: ['./green-score.component.css']
})
export class GreenScoreComponent {
  @Input() childScoreCard: boolean;
  constructor() { }

  ngOnInit() {
  }

}
