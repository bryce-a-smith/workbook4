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

function getVehiclesWithExpiredRegistration(vehiclesArray, date) {
    let vehiclesWithExpiredRegistration = [];
    const dateMili = new Date(date).getTime();
  
    for(const thisVehicle of vehiclesArray) {
      if(thisVehicle.registrationExpires.getTime() > dateMili) {
          vehiclesWithExpiredRegistration.push(thisVehicle.type);
      }
    }
    return vehiclesWithExpiredRegistration;
  }

// Which vehicles that hold at least 6 people?
function getVehiclesOfMinCapacity(vehiclesArray, minCapacity) {
    let vehiclesOfMinCapacity = [];

    for(const thisVehicle of vehiclesArray) {
        if(thisVehicle.capacity >= minCapacity) {
            vehiclesOfMinCapacity.push(thisVehicle.type);
        }
    }
    return vehiclesOfMinCapacity;
}

// Which vehicles have license plates that end with "222"?
function getVehicleLicensePlateEndWith(vehiclesArray, lpNum) {
    let vehiclesWithLpNum = [];

    for(const thisVehicle of vehiclesArray) {
        if(thisVehicle.licenseNo.lastIndexOf(lpNum) == thisVehicle.licenseNo.length - lpNum.length) {
            vehiclesWithLpNum.push(thisVehicle.type);
        }
    }
    return vehiclesWithLpNum;
}



// Which vehicles are RED?
console.log(getVehicleByColor(vehicles, "Red"));

// Which vehicles have registrations that are expired?
console.log(getVehiclesWithExpiredRegistration(vehicles));
console.log(getVehiclesWithExpiredRegistration(vehicles, "08-31-2023"));

// Which vehicles that hold at least 6 people?
console.log(getVehiclesOfMinCapacity(vehicles, 6));

// Which vehicles have license plates that end with "222"?
console.log(getVehicleLicensePlateEndWith(vehicles, "222"));