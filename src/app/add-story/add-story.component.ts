import { Component, OnInit } from '@angular/core';
import { GreenStory } from '../models/greenStory.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css'],
  providers: [ StoryService ]
})
export class AddStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
