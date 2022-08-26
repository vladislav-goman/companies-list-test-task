export const Filters: React.FC<{
  filtersList: [string, boolean][];
  toggleFilter: (filterOption: string) => () => void;
}> = ({ filtersList, toggleFilter }) => {
  return (
    <div>
      <h2 className="text-black text-xl mb-4">Specialty</h2>
      <ul className="flex flex-col items-start gap-2">
        {filtersList?.map(([filterOption, isSelected]) => (
          <li key={filterOption}>
            <label htmlFor={filterOption} className="cursor-pointer">
              <input
                id={filterOption}
                type="checkbox"
                value={filterOption}
                checked={isSelected}
                onChange={toggleFilter(filterOption)}
              />
              <span className="px-1 text-black">{filterOption}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
