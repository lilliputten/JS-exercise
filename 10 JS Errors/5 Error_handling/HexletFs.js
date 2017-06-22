import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line
import { Dir, File } from 'hexlet-fs'; // eslint-disable-line


const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new Dir(base));
  }

  // BEGIN (write your solution here)
  mkdirpSync(filepath) {
    const { base, dir, ext } = path.parse(filepath);

    if (ext.lenght > 2) {
      //console.log("НЕ создали: ",filepath," т.к. расширение >2 ",ext," - это файл ");
      return false;
    }
    const parts = getPathParts(filepath);
    //console.log(" base= ",base," dir= ",dir," parts= ",parts);
    let acc = [];
    const filtered = parts.filter(el => {//path.extname(el).length > 2
      acc.push(el);
      const current = this.tree.getDeepChild(acc);
      //console.log("acc=",acc, "->",current && current.getMeta().getStats().isFile());
      return current && current.getMeta().getStats().isFile();
    });
    if (filtered.length) {
      //console.log("НЕ создали: ",filepath," filtered= ",filtered);
      return false;
    }
    parts.reduce((acc, el) => {
      //console.log("!!! acc=",acc," el=",el);
      acc.push(el);
      if (this.tree.getDeepChild(acc)) {
        //acc.push(el);
        //console.log(" acc=",acc);
        return acc;//this.findNode(acc).getMeta().getStats().isFile() ? false : acc;
      } else {
        acc.pop(el);

        let parent = this.tree.getDeepChild(acc);
        if (!parent) parent = this.tree;
        //console.log(" acc=",acc," Создаем: ",el," parent=",parent);
        parent.addChild(el, new Dir(el));
        acc.push(el);
        //console.log(" acc=",acc," Создали: ",el);
        return acc;
      }
    },[]);
    //console.log("Создали: ",filepath);
    return true;
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new File(base));
  }

  readdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const current = this.findNode(filepath/*dir+'/'+base*/);
    if (!current || current.getMeta().getStats().isFile()) {
      return false;
    }
    return [...current.children.keys()];
  }
  
  rmdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const current = this.findNode(filepath);
    if (!current || current.getMeta().getStats().isFile()) {
      console.log("1");
      return false;
    }
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile() || 
      this.readdirSync(filepath).length > 0) {
      console.log("2");
      return false;
    }
    // if (this.readdirSync(filepath).length > 0) {
    //   //console.log("3",filepath,"   ",this.readdirSync(filepath));
    //   return false;
    // }
    parent.removeChild(base);
    return true;
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
