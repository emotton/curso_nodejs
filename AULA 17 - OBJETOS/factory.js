// A propriedade pode existir na factory, mas não ser externalizada

function createMicrofone(color = "yellow") {
  let isOn = true;
  return {
    color,
    isOn,
    toggleOnOff: function () {
      this.isOn = !this.isOn;
    },
  };
}

const microfoneBlack = createMicrofone("black");
console.log(microfoneBlack);
microfoneBlack.toggleOnOff();
console.log(microfoneBlack);

const microfoneWhite = createMicrofone("white");
console.log(microfoneWhite);
microfoneWhite.toggleOnOff();
console.log(microfoneWhite);

const microfoneYellow = createMicrofone();
console.log(microfoneYellow);
microfoneYellow.toggleOnOff();
console.log(microfoneYellow);
