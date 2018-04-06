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

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  createStory(title: string, description: string, author: string, age: number, link: string, image: string) {
    let newStory: GreenStory = new GreenStory(title, description, author, age, link, image);
    console.log(newStory);
    this.storyService.addStory(newStory);
    console.log(newStory);
  }

}
