import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryDisplayComponent } from './story-display/story-display.component';
import { GreenToolkitComponent } from './green-toolkit/green-toolkit.component';
import { AddToolComponent } from './add-tool/add-tool.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { GreenScoreComponent } from './green-score/green-score.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StoryDisplayComponent
  },
  {
    path: 'toolkit',
    component: GreenToolkitComponent
  },
  {
    path:'toolkit/addtool',
    component: AddToolComponent
  },
  {
    path:"addstory",
    component: AddStoryComponent
  },
  {
    path:"scorecard",
    component: GreenScoreComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
