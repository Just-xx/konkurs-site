export function stringifyCSVData(CSVData) {
  let purfiedCSV = '';

  CSVData.forEach((line, index) => {
    purfiedCSV += line.toString();
    if (index < CSVData.length - 1) purfiedCSV += "\r\n";
  });

  return purfiedCSV;
}