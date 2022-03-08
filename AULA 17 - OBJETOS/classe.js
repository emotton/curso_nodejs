class Microfone {
  constructor(color = "yellow") {
    this.color = color;
    this.isOn = true;
  }

  toggleOnOff() {
    this.isOn = !this.isOn;
  }
}

const microfone = new Microfone("white");
console.log(microfone);
microfone.toggleOnOff();
console.log(microfone);
