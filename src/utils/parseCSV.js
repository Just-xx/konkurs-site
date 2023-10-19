export function parseCSV(csv) {
  return csv.split(/\r?\n/).map(line => line.split(','));
}
