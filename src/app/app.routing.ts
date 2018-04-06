import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryDisplayComponent } from './story-display/story-display.component';
import { GreenToolkitComponent } from './green-toolkit/green-toolkit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StoryDisplayComponent
  },
  {
    path: 'toolkit',
    component: GreenToolkitComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
