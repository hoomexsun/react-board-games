type SquareProps = {
  value: string;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button
      className="w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-300 text-2xl font-bold flex items-center justify-center hover:bg-gray-100 transition"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
