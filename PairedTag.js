export default class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.children = children;
    this.body = body;
  }
  toString() {
    const attrsLine = this.attributes ? Object.keys(this.attributes)
      .map(key => ` ${key}="${this.attributes[key]}"`).join('') : '';

    const content = this.children.length > 0 ? this.children
      .map(el => el.toString()).join('') : this.body;

    return `<${this.name}${attrsLine}>${content}</${this.name}>`;
  }
}
