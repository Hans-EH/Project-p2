async function energiDataEMI() {
  const URI =
    'https://www.energidataservice.dk/proxy/api/datastore_search_sql?sql=SELECT"Minutes5UTC", "Minutes5DK", "PriceArea", "CO2Emission" FROM "co2emis" ORDER BY "Minutes5UTC" DESC LIMIT 100';
  try {
    let data = await fetch(URL).then((response) => response.json());

    console.log(data);

    let rec_length = data.result.records.length;
    for (let i = 0; i < rec_length; i++) {
      console.log(data.result.records[i]);
    }
  } catch {
    console.log("Forhelvede....");
  }
}
