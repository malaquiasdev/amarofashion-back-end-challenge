export class ProductsInPutDot {
  public index: number = 0;
  public name: string = '';
  public tags: Array<String> = [];
  constructor(fields?: {
    index?: number;
    name?: string;
    tags?: Array<String>;
  }) {
    if (fields) {
      this.index = fields.index || this.index;
      this.name = fields.name || this.name;
      this.tags = fields.tags || this.tags;
    }
  }
}
