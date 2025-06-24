interface YearLabelProps {
  year: string;
  position: string;
}

const YearLabel = ({ year, position }: YearLabelProps) => (
  <div className={`absolute left-1/2 z-10 -translate-x-1/2 ${position}`}>
    <div className="font-arimo bg-wushu-gold-300 rounded-full px-3 py-1 text-center text-sm font-semibold text-white sm:px-4 sm:py-2 sm:text-2xl">
      {year}
    </div>
  </div>
);

export default YearLabel;
