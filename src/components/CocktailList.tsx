import CocktailModel from "../models/Cocktail";
import CocktailCard from "./CocktailCard";
import { useNavigate } from 'react-router-dom';

interface CockTailListProps {
  listCocktails?: Array<CocktailModel>;
}

const CocktailList = ({ listCocktails }: CockTailListProps) => {
  const navigate = useNavigate();
  if (!listCocktails || listCocktails.length === 0) {
    return <span className="text-center font-black text-4xl">There are not cocktails</span>;
  }

  const handleNavigation = (id: string) => () => navigate(`/cocktail/${id}`);

  return (
    <section className="mt-5 mb-24">
      <h2 className="text-2xl text-cyan-600 font-bold mb-5 text-center">Cocktails</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {listCocktails.map((cocktail: CocktailModel, index: number) => {
          return <CocktailCard key={`cocktailID_${index}`} data={cocktail} onDetailClick={handleNavigation(cocktail.idDrink)} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
