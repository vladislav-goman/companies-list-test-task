import Image from 'next/image';

export interface Company {
  _id: string;
  name: string;
  city: string;
  specialty: string;
  logo: string;
}

export const CompanyCard: React.FC<Company> = ({
  _id,
  name,
  city,
  specialty,
  logo,
}) => {
  return (
    <article key={_id} className="flex w-full flex-col items-center">
      <div className="relative w-full min-h-[256px]">
        <Image
          className="rounded-xl"
          src={logo + `?lock=${_id.replace(/\D/gi, '')}`}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-center">
        <h2 className="text-black text-xl mt-1">{name}</h2>
        <p>City: {city}</p>
        <p>Specialty: {specialty}</p>
      </div>
    </article>
  );
};
