let powerConsumption = 0;

const Gadjet = function (name, batteryCappacity) {
    this.name = name;
    this.batteryCappacity = batteryCappacity;
    this.connect = false;
  };
function getInfoSumPower() {
    console.log(`Потребляемая мощность включенных в сеть приборов - ${powerConsumption} Ватт`)
  }
  
  Gadjet.prototype.connected = function () {
      console.log(`${this.name} подключен к электросети`);
      this.connect = true;
      powerConsumption += this.power
  };
  Gadjet.prototype.unconnected = function () {
      console.log(`${this.name} не подключен к электросети`);
      this.connect = false
  };
  
  function MyGadjet(name, brand, batteryCappacity, material, power) {
    this.name = name;
    this.brand = brand;
    this.batteryCappacity = batteryCappacity;
    this.material = material;
    this.power = power;
    this.connect = true;
  }

  MyGadjet.prototype = new Gadjet();
  const phone = new MyGadjet("Телефон", "iPhone", 5000, "metall/plastic", 5);
  phone.unconnected();
  console.log(phone)
  
  const laptop = new MyGadjet("Ноутбук", "Sony", 10000, "plastic", 60);
  laptop.connected();
  console.log(laptop)

  getInfoSumPower()