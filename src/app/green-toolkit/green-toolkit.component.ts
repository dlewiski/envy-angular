import { Component, OnInit, Input } from '@angular/core';
import { GreenTool } from '../models/greenTool.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-green-toolkit',
  templateUrl: './green-toolkit.component.html',
  styleUrls: ['./green-toolkit.component.css']
})
export class GreenToolkitComponent implements OnInit {
  @Input() childToolkit: GreenTool[];
  tools: FirebaseListObservable<any[]>;

  constructor() { }

  ngOnInit() {
  }

}
