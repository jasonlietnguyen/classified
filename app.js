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
  jobList.innerHTML = ''
  carsList.innerHTML = document.getElementById("cars-list")
  var template = ''
  var form = `<form onsubmit="creatCar(event)">
      <div class="form-group">
        <label for="picture">Picture URL: </label>
        <input type="text"   name="picture" class="form-control">
      </div>

      <div class="form-group">
        <label for="price">Price: </label>
        <input type="number"   name="price" class="form-control">
      </div>

      <div class="form-group">
        <label for="description">Color: </label>
        <input type="color"   name="color" class="form-control">
      </div>

      <div class="form-group">
        <label for="condition">Condition: </label>
        <select name="condition" class="form-control">
          <option value="5">New</option>
          <option value="4">Like New</option>
          <option value="2">Used</option>
          <option value="1">Scrap</option>          
        </select>
      </div>
      <div class="form-group">
        <label for="make">Make: </label>
        <input type="text"   name="make" class="form-control">
      </div>
      <div class="form-group">
        <label for="model">Model: </label>
        <input type="text"   name="model" class="form-control">
      </div>
      <div class="form-group">
        <label for="year">Year: </label>
        <input type="range"   name="year" min="1900" max="9999" class="form-control">
      </div>
      <div class="form-group">
        <label for="door">Door: </label>
        <input type="number"   name="door" min="1" class="form-control">
      </div>
      <div class="form-group">
        <label for="contact">contact: </label>
        <input type="email"   name="contact" class="form-control">
      </div>
      <button type="submit">You get a car!</button>
    </form>`
  for (var i = 0; i < arrCars.length; i++) {
    var car = arrCars[i]
    template += `
    <div class="col-lg-4">
      <img src="${car.picture}" width="100%"><br>
      <h4>${car.make} ${car.model} ${car.year}</h4>
    </div>
    `
  }
  carsList.innerHTML = form + template
}




////////////////////////////////////////////////////



var propertyList = document.getElementById("property-list")

var property = [];
function Property(picture, price, city, state) {
  this.picture = picture;
  this.price = price;
  this.city = city;
  this.state = state;
  property.push(this)
}

var jasonHouse = new Property("https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg", 6512, "Boise", "Idaho", 5)

var jakeHouse = new Property("https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg", 50420, "Caldwell", "Idaho", 4)

var sameHouse = new Property("https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg", 90970, "Meridian", "Idaho", 2)

var amyHouse = new Property("https://s-media-cache-ak0.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085.jpg", 6512, "Boise", "Idaho", 5)

var roryHouse = new Property("https://s-media-cache-ak0.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085.jpg", 50420, "Caldwell", "Idaho", 4)

var mandiHouse = new Property("https://s-media-cache-ak0.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085.jpg", 90970, "Meridian", "Idaho", 2)


function drawProperty(arrProp) {
  carsList.innerHTML = ''
  jobList.innerHTML = ''
  propertyList.innerHTML = document.getElementById("property-list")
  var template = ''
  var form = ` 
    <form action="">
      <input type="text" id="pic" placeholder="Picture Url">
      <input type="text" id="price" placeholder="Price">
      <input type="text" id="city" placeholder="City">
      <input type="text" id="state" placeholder="State">
      <input type="text" id="beds" placeholder="Beds">
      <button type="button" class="btn btn-info" onclick="addProperty()">Submit</button>
    </form><br>`
  for (var i = 0; i < arrProp.length; i++) {
    var prop = arrProp[i]
    template += `
    <div class="col-lg-4">
      <img src="${prop.picture}" width="100%">
      <h4>$${prop.price} ${prop.city} ${prop.state}</h4><br><br>
    </div>
    `
  }
  propertyList.innerHTML = form + template
}



var newProp = document.getElementById("print")

function addProperty() {
  new Property(document.getElementById("pic").value,
    document.getElementById("price").value,
    document.getElementById('city').value,
    document.getElementById('state').value)
  drawProperty(property)
  // return newProp.innerHTML = `
  //   <div class="col-lg-4">
  //     <img src="${document.getElementById("pic").value}" width="100%">
  //     <h4>${document.getElementById("price").value} ${document.getElementById('city').value} ${document.getElementById('state').value}</h4><br><br>
  //   </div>
  //   `
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////





var jobList = document.getElementById("job-list")

var job = [];
function Job(title, salary, description) {
  this.title = title;
  this.salary = salary;
  this.description = description.split(",");
  job.push(this)
}

var job1 = new Job("Web Designer", 65687, "Photoshop, Css, Html")
var job2 = new Job("UI/UX Designer", 98234, "LightRoom, Indesign, Illistrator")
var job2 = new Job("Software Developer", 30582, "C#, Java, Ruby, Phyton")



function drawJob(arrJob) {
  carsList.innerHTML = ''
  propertyList.innerHTML = ''
  jobList.innerHTML = document.getElementById("job-list")
  var template = ''
  var form = `
  <form onsubmit="creatJob(event)">
      <div class="form-group">
        <label for="title">Title: </label>
        <input type="text" name="title" class="form-control">
      </div>

      <div class="form-group">
        <label for="description">Description: </label>
        <textarea type="text" name="description" class="form-control"></textarea>
      </div>
      <button type="submit">Add Job</button>
    </form>`

  for (var i = 0; i < arrJob.length; i++) {
    var list = ''
    var job = arrJob[i]
    for (var j = 0; j < job.description.length; j++) {
      list += `<li>${job.description[j]}</li>`
    }
    template += `<div class="col-lg-4"><h1>${job.title}</h1><h3>$${job.salary} Anually</h3>` + list + `</div>`
  }
  jobList.innerHTML = form + template
}



var newProp = document.getElementById("print")

function addProperty() {
  new Property(document.getElementById("pic").value,
    document.getElementById("price").value,
    document.getElementById('city').value,
    document.getElementById('state').value)
  drawProperty(property)
  // return newProp.innerHTML = `
  //   <div class="col-lg-4">
  //     <img src="${document.getElementById("pic").value}" width="100%">
  //     <h4>${document.getElementById("price").value} ${document.getElementById('city').value} ${document.getElementById('state').value}</h4><br><br>
  //   </div>
  //   `
}




//////////////////////////////////



function creatJob(e) {
  e.preventDefault();
  var form = e.target;
  new Job(form.title.value,
    form.description.value)
  form.reset()
  drawJob(job)
}



function creatCar(e) {
  e.preventDefault();
  var form = e.target;
  new Car(form.picture.value,
    form.price.value,
    form.color.value,
    form.condition.value,
    form.make.value,
    form.model.value,
    form.year.value,
    form.contact.value)
  form.reset()
  drawCars(cars)
}