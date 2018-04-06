import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryDisplayComponent } from './story-display/story-display.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StoryDisplayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
