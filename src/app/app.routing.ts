import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryDisplayComponent } from './story-display/story-display.component';
import { GreenToolkitComponent } from './green-toolkit/green-toolkit.component';
import { AddToolComponent } from './add-tool/add-tool.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
