import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoryDisplayComponent } from './story-display/story-display.component';
import { GreenToolkitComponent } from './green-toolkit/green-toolkit.component';
import { GreenScoreComponent } from './green-score/green-score.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryDisplayComponent,
    GreenToolkitComponent,
    GreenScoreComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
