"use strict";

let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

// Which vehicles are RED?
function getVehicleByColor(vehiclesArray, color) {
  let vehiclesOfColor = [];

  for (const thisVehicle of vehiclesArray) {
    if (thisVehicle.color == color) {
      vehiclesOfColor.push(thisVehicle.type);
    }
  }

  return vehiclesOfColor;
}

// Which vehicles have registrations that are expired?
function getVehiclesWithExpiredRegistration(vehiclesArray) {
  let vehiclesWithExpiredRegistration = [];
  const todayMili = new Date().getTime();

  for(const thisVehicle of vehiclesArray) {
    if(thisVehicle.registrationExpires.getTime() > todayMili) {
        vehiclesWithExpiredRegistration.push(thisVehicle.type);
    }
  }
  return vehiclesWithExpiredRegistration;
}

// Which vehicles that hold at least 6 people?
function getVehiclesOfCapacity() {
    
}

// Which vehicles have license plates that end with "222"?

// Which vehicles are RED?
console.log(getVehicleByColor(vehicles, "Red"));

// Which vehicles have registrations that are expired?
console.log(getVehiclesWithExpiredRegistration(vehicles));

// Which vehicles that hold at least 6 people?

// Which vehicles have license plates that end with "222"?
