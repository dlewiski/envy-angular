import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { StoryDisplayComponent } from './story-display/story-display.component';
import { GreenToolkitComponent } from './green-toolkit/green-toolkit.component';
import { GreenScoreComponent } from './green-score/green-score.component';
import { NavComponent } from './nav/nav.component';
import { FeaturedPipe } from './featured.pipe';
import { NotFeaturedPipe } from './not-featured.pipe';
import { AddToolComponent } from './add-tool/add-tool.component';
import { AddStoryComponent } from './add-story/add-story.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    StoryDisplayComponent,
    GreenToolkitComponent,
    GreenScoreComponent,
    NavComponent,
    FeaturedPipe,
    NotFeaturedPipe,
    AddToolComponent,
    AddStoryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
