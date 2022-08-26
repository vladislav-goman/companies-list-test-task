import { Company } from '../components/CompanyCard';

export const applySearchTerm =
  (searchValue: string) =>
  ({ name }: { name: string }) =>
    !searchValue ||
    new RegExp(searchValue.toLowerCase()).test(name.toLowerCase());

export const applyCheckedFilters =
  (selectedFilters: string[]) =>
  ({ specialty }: { specialty: string }) =>
    selectedFilters.length ? selectedFilters.includes(specialty) : true;

export const applyFilters =
  (initialItems: Company[]) =>
  (...filterCBs: Array<(...args: any) => boolean>) => {
    return filterCBs.reduce((acc, curr) => acc.filter(curr), initialItems);
  };
