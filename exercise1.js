const userSnigirev = function(a){
    a = {
      Name: "Semen",
      Surname: "Snigirev",
      Age: "21"
    }
    
    for (let key in a){
      console.log(key + ": " + a[key])
    }
  }

userSnigirev();