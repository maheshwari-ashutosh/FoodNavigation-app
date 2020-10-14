export class Meal {
  constructor(
    public id: String,
    public categoryIds: Array<String>,
    public title: String,
    public affordability: String,
    public complexity: String,
    public imageUrl: String,
    public duration: number,
    public ingredients: Array<String>,
    public steps: Array<String>,
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
    public isLactoseFree: boolean
  ) {}
}
