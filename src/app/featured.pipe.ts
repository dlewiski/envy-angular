import { Pipe, PipeTransform } from '@angular/core';
import { GreenStory } from './models/greenStory.model';

@Pipe({
  name: "featured",
  pure: false
})

export class FeaturedPipe implements PipeTransform {
  transform(input: GreenStory[], args) {
    let output: GreenStory[] = [];
    console.log("here");
    for (let i = 0; i < input.length; i++) {
      if (input[i].featured === true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
