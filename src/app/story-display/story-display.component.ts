import { Component, OnInit, Input } from '@angular/core';
import { GreenStory } from '../models/greenStory.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html',
  styleUrls: ['./story-display.component.css'],
  providers: [ StoryService ]
})
export class StoryDisplayComponent implements OnInit {
  @Input() childStoryList: GreenStory[];
  stories: FirebaseListObservable<any[]>;

  constructor(private storyService:StoryService) { }

  ngOnInit() {
    this.stories = this.storyService.stories;
  }

}
