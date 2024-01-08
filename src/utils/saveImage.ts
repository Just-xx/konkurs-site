import { getRandomId } from "./getRandomId";

export function saveImage(e: React.ChangeEvent<HTMLInputElement>) {
  
  if (!e.target.files) return;

  const file = e.target.files[0];
  const reader = new FileReader();
  const id = getRandomId('img');

  reader.onloadend = () => {
    const base64 = reader.result;
    dispatchEvent(new CustomEvent('img-saved', { detail: { id, base64 } }));
  }

  reader.readAsDataURL(file);
}