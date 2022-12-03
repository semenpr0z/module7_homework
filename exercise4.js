const Gadjet = function (name, battaryCappacity) {
    this.name = name;
    this.battaryCappacity = battaryCappacity;
    this.connect = false;
  };
  
  Gadjet.prototype.connected = function () {
      console.log(`${this.name} подключен к электросети`);
      this.connect = true;
  };
  Gadjet.prototype.unconnected = function () {
      console.log(`${this.name} не подключен к электросети`);
      this.connect = false
      this.power = 0;
  };
  
  function MyGadjet(name, brand, battaryCappacity, material, power) {
    this.name = name;
    this.brand = brand;
    this.battaryCappacity = battaryCappacity;
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

  const powerConsumption = phone.power + laptop.power
  console.log(`Потребляемая мощность включенных в сеть приборов - ${powerConsumption} Ватт`)