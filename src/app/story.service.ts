import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GreenStory } from './models/greenStory.model';


@Injectable()
export class StoryService {
  stories: FirebaseListObservable<any[]>;

  constructor(private database:AngularFireDatabase) {
    this.stories = database.list('stories');
  }

  addStory(story:GreenStory) {
    this.stories.push(story);
  }

  getStories(){
    return this.stories;
  }

}
