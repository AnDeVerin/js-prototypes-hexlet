export default class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
    this.children = [];
    this.body = '';
  }
  toString() {
    const attrsLine = Object.keys(this.attributes)
      .map(key => ` ${key}="${this.attributes[key]}"`).join('');
    return `<${this.name}${attrsLine}>`;
  }
}
