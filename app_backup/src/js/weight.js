const { Device, Appliance } = require("./_devices");
let status = false;

const timeSlots = [
  {
    time: "00:00:00",
    weight: 15,
  },
  {
    time: "01:00:00",
    weight: 10,
  },
  {
    time: "01:00:00",
    weight: 10,
  },
  {
    time: "01:00:00",
    weight: 10,
  },
  {
    time: "01:00:00",
    weight: 10,
  },
  {
    time: "01:00:00",
    weight: 10,
  },
];

const sim = (status) => {
  let num = Math.floor(Math.random() * 100);
  let weight = 95;

  if (num > weight) {
    status = true;
  } else {
    status = false;
  }

  console.log(`status: ${status}, ${num}`);
};

setInterval(() => {
  sim(iphone_status);
  sim(pc_status);
}, min * 60000);
