export function isApplicationJSON(value): boolean {
  return value.mimetype == 'application/json';
}

export function isApplicationXML(value): boolean {
  return value.mimetype === 'application/xml';
}
