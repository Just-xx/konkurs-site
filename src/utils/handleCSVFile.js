import { parseCSV } from "./parseCSV";

export function handleCSVFile(e, setCSVData) {

  const fr = new FileReader();
  
  fr.addEventListener('load', () => {
    const csv = fr.result;
    const parsedData = parseCSV(csv);

    setCSVData(parsedData);
    localStorage.setItem('CSVData', csv);
  })

  fr.readAsText(e.target.files[0]);
}
