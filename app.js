var carsList = document.getElementById("cars-list")

var cars = [];
function Car(picture, price, color, condition, make, model, year, doors, contact) {
  this.picture = picture;
  this.price = price;
  this.color = color;
  this.condition = condition;
  this.make = make;
  this.model = model;
  this.year = year;
  this.doors = doors;
  this.contact = contact;
  cars.push(this)
}

var jasonCar = new Car("http://blog.caranddriver.com/wp-content/uploads/2015/11/Jaguar-XF.jpg", 5, "grey", "like new", "toyota", "prius", 2010, 4, "208-230-4787")

var jakeCar = new Car("http://blog.caranddriver.com/wp-content/uploads/2015/11/Jaguar-XF.jpg", 500, "silver", "parts", "chrysler", "300M", 2000, 4, "email@email.com")

var myCar = new Car("http://blog.caranddriver.com/wp-content/uploads/2015/11/Jaguar-XF.jpg", 500, "silver", "parts", "chevy", "cruize", 2000, 4, "email@email.com")

var amyCar = new Car("http://blog.caranddriver.com/wp-content/uploads/2015/11/BMW-2-series.jpg", 5, "grey", "like new", "toyota", "prius", 2010, 4, "208-230-4787")

var roryCar = new Car("http://blog.caranddriver.com/wp-content/uploads/2015/11/BMW-2-series.jpg", 500, "silver", "parts", "chrysler", "300M", 2000, 4, "email@email.com")

var mandiCar = new Car("http://blog.caranddriver.com/wp-content/uploads/2015/11/BMW-2-series.jpg", 500, "silver", "parts", "chevy", "cruize", 2000, 4, "email@email.com")

function drawCars(arrCars) {
  propertyList.innerHTML = ''
  carsList.innerHTML = document.getElementById("cars-list")
  var template = ''
  for (var i = 0; i < arrCars.length; i++) {
    var car = arrCars[i]
    template += `
    <div class="col-lg-4">
      <img src="${car.picture}" width="100%"><br>
      <h4>${car.make} ${car.model} ${car.year}</h4>
    </div>
    `
  }
  carsList.innerHTML = template
}




////////////////////////////////////////////////////



var propertyList = document.getElementById("property-list")

var property = [];
function Property(picture, price, city, state, beds) {
  this.picture = picture;
  this.price = price;
  this.color = city;
  this.condition = state;
  this.make = beds;
  property.push(this)
}

var jasonHouse = new Property("https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg", 6512, "Boise", "Idaho", 5)

var jakeHouse = new Property("https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg", 50420, "Caldwell", "Idaho", 4)

var sameHouse = new Property("https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg", 90970, "Meridian", "Idaho", 2)

var amyHouse = new Property("https://s-media-cache-ak0.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085.jpg", 6512, "Boise", "Idaho", 5)

var roryHouse = new Property("https://s-media-cache-ak0.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085.jpg", 50420, "Caldwell", "Idaho", 4)

var mandiHouse = new Property("https://s-media-cache-ak0.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085.jpg", 90970, "Meridian", "Idaho", 2)

var myHouse = new Property(document.getElementById("pic").value, 90970, "Meridian", "Idaho", 2)

function drawProperty(arrProp) {
  carsList.innerHTML = ''
  propertyList.innerHTML = document.getElementById("property-list")
  var template = ''
  for (var i = 0; i < arrProp.length; i++) {
    var prop = arrProp[i]
    template += `
    <div class="col-lg-4">
      <img src="${prop.picture}" width="100%">
      <h4>${prop.price} ${prop.city} ${prop.state}</h4><br><br>
    </div>
    `
  }
  propertyList.innerHTML = template
}


var newProp = document.getElementById("print")

var newTemplate = ''
function addProperty() {
  newTemplate += `
    <div class="col-lg-4">
      <img src="${newProp.innerHTML += document.getElementById("pic").value}" width="100%">
      <h4>${newProp.innerHTML += document.getElementById("price").value} ${newProp.innerHTML += document.getElementById('city').value} ${newProp.innerHTML += document.getElementById('state').value}</h4><br><br>
    </div>
    `
  newProp.innerHTML = templates
}