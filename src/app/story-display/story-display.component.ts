import { Component, OnInit, Input } from '@angular/core';
import { GreenStory } from '../models/greenStory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html',
  styleUrls: ['./story-display.component.css']
})
export class StoryDisplayComponent implements OnInit {
  @Input() childStoryList: GreenStory[];

  constructor() { }

  ngOnInit() {
  }

}
