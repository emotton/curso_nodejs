const objeto = {
  color: "Black",
  isOn: true,
  toggleOnOff: function () {
    objeto.isOn = !objeto.isOn;
  },
};

const objeto2 = {
  color: "Black",
  isOn: true,
  toggleOnOff: () => {
    objeto2.isOn = !objeto2.isOn;
  },
};

// Short Hand Property
const objeto3 = {
  color: "Black",
  isOn: true,
  toggleOnOff() {
    objeto3.isOn = !objeto3.isOn;
  },
};

console.log(objeto);
objeto.toggleOnOff();
console.log(objeto);

console.log(objeto2);
objeto2.toggleOnOff();
console.log(objeto2);

console.log(objeto3);
objeto3.toggleOnOff();
console.log(objeto3);
