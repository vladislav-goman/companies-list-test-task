import { Suspense, lazy } from 'react';
import { fetchData } from '../utils/fetchData';
import { useFiltering } from '../hooks/useFiltering';
import { DebounceInput } from 'react-debounce-input';
import { Filters } from './';

const CompaniesList = lazy(() => import('./CompaniesList'));

const resource = fetchData('http://localhost:3000/api/companies');

export const CompaniesLayout: React.FC = () => {
  const companiesList = resource.read();
  const { itemsToShow, specialtyFiltersList, setSearchValue, toggleFilter } =
    useFiltering(companiesList);

  return (
    <div className="py-5">
      <div className="grid grid-cols-[200px_1fr]">
        <aside>
          <Filters
            filtersList={specialtyFiltersList}
            toggleFilter={toggleFilter}
          />
        </aside>
        <div>
          <header>
            <DebounceInput
              className="border-2 outline-grey-800 rounded px-3 py-2"
              placeholder="Enter search term"
              minLength={2}
              debounceTimeout={300}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </header>
          <Suspense fallback={<div>Loading...</div>}>
            <CompaniesList companies={itemsToShow} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
