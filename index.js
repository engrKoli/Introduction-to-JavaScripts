const person = {
  name: "Solomon Eko",
  height: "1.7m",
  country: "Nigeria",
  info: function() {
    console.log(`${this.name} ${this.height} tall is from ${this.country} `);
  },

};
console.log(person.info())