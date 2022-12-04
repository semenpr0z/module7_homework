let powerConsumption = 0;

class Gadjet {
    constructor (name, batteryCappacity) {
      this.name = name;
      this.batteryCappacity = batteryCappacity;
      this.connect = false;
    };
    
    connected() {
        console.log(`${this.name} подключен к электросети`);
        this.connect = true;
        powerConsumption += this.power;
    }
    unconnected() {
        console.log(`${this.name} не подключен к электросети`);
        this.connect = false;
    }
  }

    function getInfoSumPower() {
      console.log(`Потребляемая мощность включенных в сеть приборов - ${powerConsumption} Ватт`)
    }
    
    class MyGadjet extends Gadjet {
      constructor (name, brand, batteryCappacity, material, power){
        super (name, batteryCappacity);
        this.brand = brand;
        this.material = material;
        this.connect = false;
        this.power = power
      }
    }
  
  const phone = new MyGadjet ("Телефон", "Samsung", 5000, "metall/plastic", 5);
  phone.unconnected()
  console.log(phone)
  
  const laptop = new MyGadjet ("Ноутбук", "lenovo", 10000, "plastic", 60);
  laptop.connected()
  console.log(laptop)

  getInfoSumPower()