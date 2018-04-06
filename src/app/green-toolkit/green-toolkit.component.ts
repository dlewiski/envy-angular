import { Component, OnInit } from '@angular/core';
import { GreenTool } from '../models/greenTool.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ToolkitService } from '../toolkit.service';

@Component({
  selector: 'app-green-toolkit',
  templateUrl: './green-toolkit.component.html',
  styleUrls: ['./green-toolkit.component.css'],
  providers: [ ToolkitService ]
})
export class GreenToolkitComponent implements OnInit {
  tools: FirebaseListObservable<any[]>;

  constructor(private toolkitService:ToolkitService) { }

  ngOnInit() {
    this.tools = this.toolkitService.tools;
    console.log(this.tools);
  }

}
