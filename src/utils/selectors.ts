import { Company } from '../components/CompanyCard';

export const getFiltersArray = (itemsArray: Company[]) =>
  itemsArray.reduce(
    (acc: { [key: string]: boolean }, { specialty }: { specialty: string }) => {
      acc[specialty] = false;
      return acc;
    },
    {}
  );

export const getSelectedFilters = (filtersData: { [key: string]: boolean }) => {
  const filtersList = Object.keys(filtersData);
  return filtersList.filter((filterOption) => filtersData[filterOption]);
};
