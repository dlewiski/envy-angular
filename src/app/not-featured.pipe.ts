import { Pipe, PipeTransform } from '@angular/core';
import { GreenStory } from './models/greenStory.model';

@Pipe({
  name: "notFeatured",
  pure: false
})

export class NotFeaturedPipe implements PipeTransform {
  transform(input: GreenStory[], args) {
    let output: GreenStory[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].featured === false) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
