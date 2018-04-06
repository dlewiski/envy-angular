import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GreenTool } from './models/greenTool.model';

@Injectable()
export class ToolkitService {
  tools: FirebaseListObservable<any[]>;

  constructor(private database:AngularFireDatabase) {
    this.tools = database.list('tools');
   }

   addTool(tool:GreenTool) {
     this.tools.push(tool);
   }

   getTools() {
     return this.tools;
   }

  // //  findTool(key: string) {
  // //    for (let i = 0; i < this.tools.length - 1; i++){
  // //      if (this.tools[i].$key === key) {
  // //        return this.tools[i];
  // //      }
  // //    }
  //  }
}
