import { Component, OnInit } from '@angular/core';
import { GreenTool } from '../models/greenTool.model';
import { ToolkitService} from '../toolkit.service';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css'],
  providers: [ToolkitService]
})
export class AddToolComponent implements OnInit {

  constructor(private toolkitService: ToolkitService) { }

  ngOnInit() {
  }

  createTool(name:string, description:string, effectiveness:number) {
    let newTool: GreenTool = new GreenTool(name, description, effectiveness);
    this.toolkitService.addTool(newTool);
    console.log(newTool);
  }

}
