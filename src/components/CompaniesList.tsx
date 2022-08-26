import { Company, CompanyCard } from './CompanyCard';

const CompaniesList: React.FC<{ companies: Company[] }> = ({ companies }) => {
  return (
    <section className="grid grid-cols-4 gap-10 py-4">
      {companies.length ? companies?.map(CompanyCard) : 'No items found'}
    </section>
  );
};

export default CompaniesList;
