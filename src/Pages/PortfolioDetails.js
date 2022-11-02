import { useParams } from 'react-router-dom';
import { getPortfolioById } from './Portfolio';
import { Link } from 'react-router-dom';
import { portfolio } from './Portfolio';
import PortfolioDetailsList from 'Components/PortfolioDetailsList';

export default function PortfolioDetails() {
  const { portfolioId } = useParams();
  const portfolioItem = getPortfolioById(Number(portfolioId));

  const sameTypeList = portfolio
    .filter(
      item =>
        item.type === portfolioItem.type && item.name !== portfolioItem.name
    )
    .map(item => {
      return (
        <li key={item.id} className="portfolioDetails-img-item">
          <Link to={`/portfolio/${item.id}`} className="portfolio-link">
            <img src={item.image} alt={item.alt} />
            <div className="portfolio-img-info">
              <h3 className="portfolio-title">{item.name}</h3>
              <p className="portfolio-type">{item.type}</p>
            </div>
          </Link>
        </li>
      );
    });

  return (
    <main className="portfolioDetails-container">
      <section className="container">
        <Link to="/portfolio" className="portfolioDetails-link">
          Back to portfolio
        </Link>
        <div className="portfolioDetails-section">
          <h2 className="portfolioDetails-title">{portfolioItem.name}</h2>
          <div className="portfolioDetails-info">
            <img
              src={portfolioItem.image}
              alt={portfolioItem.alt}
              className="portfolioDetails-img"
            />
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
            </div>
          </div>
        </div>
      </section>

      <PortfolioDetailsList sameTypeList={sameTypeList} />
    </main>
  );
}
