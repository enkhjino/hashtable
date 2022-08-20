//first hash function

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink", 10));
// console.log(hash("blue", 10))
// console.log(hash("yellow", 10))

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      //forloop to check if exact same key exists, then return key, value pair
      for (var i = 0; i < this.keyMap[index].length; i++) {
        if (key === this.keyMap[index][i][0]) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    //loop through length of keyMap
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
      //check if i exists
      //loop through keymap[i][j]
      //if keymap[i][j] doesnt exist, push to valuesArr
      //return valuesArr
    }
    return valuesArr;
  }
  keys() {
    let keysArr = [];
    //loop through length of keyMap
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
      //check if i exists
      //loop through keymap[i][j]
      //if keymap[i][j] doesnt exist, push to valuesArr
      //return valuesArr
    }
    return keysArr;
  }
}

let a = new HashTable();
// let b = new HashTable();
a.set("hello", "world");
a.set("ello", "orld");
a.set("llo", "rld");
a.set("lo", "ld");
a.set("o", "d");
a.set("o", "d");
a.set("o", "d");

console.log(a.keys());
