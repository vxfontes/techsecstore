import data from '../../assets/json/MOCK_DATA.json';
import { AreaSmall } from '../layouts/Area';
import { ProductCard } from '../product/card';

const InicialPage = () => {
    return (
        <AreaSmall>
            <div className={`text-white text-3xl font-bold pt-20 pb-3 text-center`}>Produtos</div>
            <div className={`grid grid-cols-1 gap-4 md:grid-cols-3`}>
                {data.map(product => (
                    <ProductCard product={product} />
                ))}
            </div>
        </AreaSmall>
    );
}
export default InicialPage;