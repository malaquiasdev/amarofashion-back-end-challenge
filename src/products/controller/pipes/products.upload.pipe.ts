import {
  Injectable,
  PipeTransform,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';
import { isApplicationJSON, isApplicationXML } from './validate.file.type';
import { convertBufferToObject } from './convert.buffer.to.object';

@Injectable()
export class ProductsUploadPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!isApplicationJSON(value) && !isApplicationXML(value)) {
      throw new BadRequestException(
        `This file type '${value.mimetype}' is not supported`,
      );
    }
    return convertBufferToObject(value);
  }
}
