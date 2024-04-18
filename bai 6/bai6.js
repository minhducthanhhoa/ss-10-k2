"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getLength() {
        return this.length;
    }
    setLength(newLength) {
        this.length = newLength;
    }
}
let song = new Song(1, "My song", 180);
console.log("Name: ", song.getName());
console.log("Length: ", song.getLength());
song.setName("New Song");
song.setLength(200);
console.log("Name(update): ", song.getName());
console.log("Length(update): ", song.getLength());
