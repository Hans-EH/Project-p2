const info = [
  {
    result: {
      n: 1,
      ok: 1,
    },
    connection: {
      _events: {},
      _eventsCount: 4,
      id: 1,
      address: "127.0.0.1:27017",
      bson: {},
      socketTimeout: 0,
      host: "localhost",
      port: 27017,
      monitorCommands: false,
      closed: false,
      destroyed: false,
      lastIsMasterMS: 1,
    },
    ops: [
      {
        email: "Frederik",
        password: "123456",
        _id: "6062e4c57bc117613448774e",
      },
    ],
    insertedCount: 1,
    insertedId: "6062e4c57bc117613448774e",
    n: 1,
    ok: 1,
  },
];

let grab = info[0].ops[0].email;
let insertId = info[0].insertedId;

console.log(`${grab} inserted as ${insertId}`);
