export class GreenStory {
  type: string;
  featured: boolean = false;

  constructor(public title: string, public description: string, public author: string, public age: number, public link: string, public image: string) {};
}
