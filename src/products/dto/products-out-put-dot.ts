export class ProductsOutPutDot {
  public id: number = 0;
  public name: string = '';
  public tags: Array<String> = [];
  constructor(fields?: { id?: number; name?: string; tags?: Array<String> }) {
    if (fields) {
      this.id = fields.id || this.id;
      this.name = fields.name || this.name;
      this.tags = fields.tags || this.tags;
    }
  }
}
