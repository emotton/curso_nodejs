function Microfone(color = "yellow") {
  this.color = color;
  this.isOn = true;
  this.toggleOnOff = () => {
    this.isOn = !this.isOn;
  };
}

const microfone = new Microfone();
const microfone2 = new Microfone("black");

console.log(microfone);
microfone.toggleOnOff();
console.log(microfone);

console.log(microfone2);
microfone2.toggleOnOff();
console.log(microfone2);

function MicrofoneProto(color = "yellow") {
  this.color = color;
  this.isOn = true;
}

MicrofoneProto.prototype.toggleOnOff = function () {
  this.isOn = !this.isOn;
};

const microfone3 = new MicrofoneProto("white");
console.log(microfone3);
microfone3.toggleOnOff();
console.log(microfone3);

/* Arrow Function não acessa
MicrofoneProto.prototype.toggleOnOff = () => {
  this.isOn = !this.isOn;
};
*/
