import PortfolioDetailsList from 'Components/PortfolioDetailsList';
import { Link, useParams } from 'react-router-dom';
import { portfolio } from './Portfolio';

export default function PortfolioDetails() {
  const { portfolioId } = useParams();
  const portfolioItem = getPortfolioById(Number(portfolioId));

  const sameTypeList = portfolio.filter(
    item => item.type === portfolioItem.type && item.name !== portfolioItem.name
  );

  return (
    <main className="portfolioDetails-container">
      <section className="container">
        <Link to="/portfolio" className="portfolioDetails-link">
          Back to portfolio
        </Link>
        <div className="portfolioDetails-section">
          <h2 className="portfolioDetails-title">{portfolioItem.name}</h2>
          <div className="portfolioDetails-info">
            <div className="portfolioDetails-info__image">
              <img
                src={portfolioItem.image}
                alt={portfolioItem.alt}
                className="portfolioDetails-img"
              />
            </div>
            <div className="portfolioDetails-text">
              <p className="portfolioDetails-text__short">
                Amet consectetur adipisicing, 2022
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus sunt excepturi nesciunt iusto dignissimos assumenda ab
                quae cupiditate a, sed reprehenderit? Deleniti optio quasi, amet
                natus reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Impedit suscipit quisquam incidunt
                commodi fugiat aliquam praesentium ipsum quos unde voluptatum?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus sunt excepturi nesciunt iusto dignissimos assumenda ab
                quae cupiditate a, sed reprehenderit? Deleniti optio quasi, amet
                natus reiciendis atque fuga dolore?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus sunt excepturi nesciunt iusto dignissimos assumenda ab
                quae cupiditate a, sed reprehenderit? Deleniti optio quasi, amet
                natus reiciendis atque fuga dolore? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Doloribus sunt excepturi nesciunt
                iusto dignissimos assumenda ab quae cupiditate a, sed
                reprehenderit? Deleniti optio quasi, amet natus reiciendis atque
                fuga dolore?
              </p>
            </div>
          </div>
        </div>
      </section>

      <PortfolioDetailsList sameTypeList={sameTypeList} />
    </main>
  );
}

const getPortfolioById = portfolioId => {
  return portfolio.find(item => item.id === portfolioId);
};
