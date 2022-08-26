import { useEffect, useState, useCallback } from 'react';
import { Company } from '../components/CompanyCard';
import { getFiltersArray, getSelectedFilters } from '../utils/selectors';
import {
  applySearchTerm,
  applyCheckedFilters,
  applyFilters,
} from '../utils/filteringCallbacks';

export const useFiltering = (itemsArray: Company[] = []) => {
  const [itemsToShow, setItemsToShow] = useState(itemsArray);
  const [searchValue, setSearchValue] = useState('');
  const [specialtyFiltersData, setSpecialtyFiltersData] = useState(
    getFiltersArray(itemsArray)
  );
  const specialtyFiltersList = Object.entries(specialtyFiltersData).sort();

  const toggleFilter = useCallback(
    (filterOption: keyof typeof specialtyFiltersData) => () => {
      setSpecialtyFiltersData((oldFiltersData) => {
        const newFiltersData = { ...oldFiltersData };
        newFiltersData[filterOption] = !oldFiltersData[filterOption];
        return newFiltersData;
      });
    },
    [setSpecialtyFiltersData]
  );

  useEffect(() => {
    setSpecialtyFiltersData(getFiltersArray(itemsArray));
  }, [itemsArray, setSpecialtyFiltersData]);

  useEffect(() => {
    const selectedFilters = getSelectedFilters(specialtyFiltersData);
    const filteredItems = applyFilters(itemsArray)(
      applySearchTerm(searchValue),
      applyCheckedFilters(selectedFilters)
    );

    setItemsToShow(filteredItems);
  }, [searchValue, itemsArray, specialtyFiltersData, setItemsToShow]);

  return {
    itemsToShow,
    searchValue,
    specialtyFiltersList,
    setSearchValue,
    toggleFilter,
  };
};
