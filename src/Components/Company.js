import logo1 from '../images/Logo.svg';
import logo2 from '../images/Logo2.svg';
import logo3 from '../images/Logo3.svg';
import logo4 from '../images/Logo4.svg';
import logo5 from '../images/Logo5.svg';

export default function Company() {
  const companiesInfo = [
    { id: 1, logo: logo1, alt: 'company 1' },
    { id: 2, logo: logo2, alt: 'company 2' },
    { id: 3, logo: logo3, alt: 'company 3' },
    { id: 4, logo: logo4, alt: 'company 4' },
    { id: 5, logo: logo5, alt: 'company 5' },
  ];

  const companiesList = companiesInfo.map(company => {
    return (
      <li key={company.id} className="company-item">
        <a href="" className="company-link">
          <img className="company-icon" src={company.logo} alt={company.alt} />
        </a>
      </li>
    );
  });
  return (
    <section className="company">
      <div className="container">
        <h2 className="main-title">Regular customers</h2>
        <ul className="company-list">{companiesList}</ul>
      </div>
    </section>
  );
}
