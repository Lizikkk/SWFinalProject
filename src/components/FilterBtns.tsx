import { btn } from "../styles/styles";

interface FilterButtonsProps {
  onSelect: (selection: string) => void;
}

export const FilterBtns = ({ onSelect }: FilterButtonsProps) => {
  return (
    <div className="flex gap-2 justify-center p-4">
      <button className={btn} onClick={() => onSelect('nature')}>Nature</button>
      <button className={btn} onClick={() => onSelect('animals')}>Animals</button>
      <button className={btn} onClick={() => onSelect('games')}>Games</button>
      <button className={btn} onClick={() => onSelect('cars')}>Cars</button>
    </div>
  );
}
