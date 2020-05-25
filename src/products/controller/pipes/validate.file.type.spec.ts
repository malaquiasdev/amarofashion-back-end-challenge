import { isApplicationJSON, isApplicationXML } from './validate.file.type';

describe('Validate File Type', () => {
  it('should be defined', () => {
    expect(isApplicationJSON).toBeDefined();
    expect(isApplicationXML).toBeDefined();
  });
});
