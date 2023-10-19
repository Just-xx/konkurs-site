import { stringifyCSVData } from "./stringifyCSVData";

export function fileDownload(content) {

  const link = document.createElement("a");
  const file = new Blob([stringifyCSVData(content)], { type: 'text/plain', endings: 'native' });

  link.href = URL.createObjectURL(file);

  link.download = "KONKURS_DATA.csv";

  link.click();
  URL.revokeObjectURL(link.href);
}