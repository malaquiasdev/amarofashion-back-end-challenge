import * as xml2js from 'xml2js';
import { Products } from '../../../produtcs.model';
import { isApplicationJSON, isApplicationXML } from './validate.file.type';

function convertApplicationJsonBufferToObject(value: any): Array<Products> {
  const produtcs: Products[] = [];
  const rawData = JSON.parse(value.buffer.toString());

  rawData.products.forEach(item => {
    const newProduct: Products = {
      index: item.id,
      name: item.name,
      tags: item.tags,
    };
    produtcs.push(newProduct);
  });

  return produtcs;
}

function convertApplicationXMLBufferToObject(value: any): Array<Products> {
  let rawData = null;
  const produtcs: Products[] = [];
  const parser = new xml2js.Parser();

  parser.parseString(
    value.buffer.toString(),
    (_, result) => (rawData = result),
  );

  rawData.products.element.forEach(item => {
    const newProduct: Products = {
      index: item.id[0],
      name: item.name[0],
      tags: item.tags[0].element,
    };
    produtcs.push(newProduct);
  });

  return produtcs;
}

export function convertBufferToObject(value: any): Array<Products> {
  if (isApplicationJSON(value)) {
    return convertApplicationJsonBufferToObject(value);
  }
  if (isApplicationXML(value)) {
    return convertApplicationXMLBufferToObject(value);
  }
  return null;
}
