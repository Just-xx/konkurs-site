export function parseCSV(csv) {
  if (csv) return csv.split(/\r?\n/).map(line => line.split(','));
  return [];
}
