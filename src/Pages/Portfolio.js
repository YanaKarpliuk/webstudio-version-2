import portfolio1 from '../images/portfolio-1.jpg';
import portfolio2 from '../images/portfolio-2.jpg';
import portfolio3 from '../images/portfolio-3.jpg';
import portfolio4 from '../images/portfolio-4.jpg';
import portfolio5 from '../images/portfolio-5.jpg';
import portfolio6 from '../images/portfolio-6.jpg';
import portfolio7 from '../images/portfolio-7.jpg';
import portfolio8 from '../images/portfolio-8.jpg';
import portfolio9 from '../images/portfolio-9.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Portfolio() {
  const [list, setList] = useState(portfolio);

  const filter = typeName => {
    return setList(
      portfolio.filter(item => {
        return typeName ? item.type === typeName : list;
      })
    );
  };

  const all = () => setList(portfolio)

  return (
    <section className="portfolio">
      <div className="container">
        <ul className="portfolio-btn-list">
          <li>
            <button
              type="button"
              className="portfolio-btn"
              onClick={() => all()}
            >
              All
            </button>
          </li>
          <li>
            <button
              type="button"
              className="portfolio-btn"
              onClick={() => filter('Website')}
            >
              Websites
            </button>
          </li>
          <li>
            <button
              type="button"
              className="portfolio-btn"
              onClick={() => filter('App')}
            >
              Apps
            </button>
          </li>
          <li>
            <button
              type="button"
              className="portfolio-btn btn-design"
              onClick={() => filter('Design')}
            >
              Design
            </button>
          </li>
          <li>
            <button
              type="button"
              className="portfolio-btn btn-marketing"
              onClick={() => filter('Marketing')}
            >
              Marketing
            </button>
          </li>
        </ul>
        <ul className="portfolio-img-list">
          {list.map(item => (
            <PortfolioItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PortfolioItem(item) {
  return (
    <li className="portfolio-img-item">
      <Link to={`/portfolio/${item.id}`} className="portfolio-link">
        <img src={item.image} alt={item.alt} />
        <div className="portfolio-img-info">
          <h3 className="portfolio-title">{item.name}</h3>
          <p className="portfolio-type">{item.type}</p>
        </div>
      </Link>
    </li>
  );
}

export const portfolio = [
  {
    id: 1,
    image: portfolio1,
    alt: 'portfolio item 1',
    name: 'Tech World',
    type: 'Website',
  },
  {
    id: 2,
    image: portfolio2,
    alt: 'portfolio item 2',
    name: 'New Orlean vs Golden Star Poster',
    type: 'Design',
  },
  {
    id: 3,
    image: portfolio3,
    alt: 'portfolio item 3',
    name: 'Seafood Restaurant',
    type: 'App',
  },
  {
    id: 4,
    image: portfolio4,
    alt: 'portfolio item 4',
    name: 'Prime Project',
    type: 'Marketing',
  },
  {
    id: 5,
    image: portfolio5,
    alt: 'portfolio item 5',
    name: 'Boxes Project',
    type: 'App',
  },
  {
    id: 6,
    image: portfolio6,
    alt: 'portfolio item 6',
    name: 'Inspiration has no Borders',
    type: 'Website',
  },
  {
    id: 7,
    image: portfolio7,
    alt: 'portfolio item 7',
    name: 'Limited Edition',
    type: 'Design',
  },
  {
    id: 8,
    image: portfolio8,
    alt: 'portfolio item 8',
    name: 'LAB Project',
    type: 'Marketing',
  },
  {
    id: 9,
    image: portfolio9,
    alt: 'portfolio item 9',
    name: 'Growing Business',
    type: 'App',
  },
];
