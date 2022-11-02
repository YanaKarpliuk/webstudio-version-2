import { PortfolioItem } from "Pages/Portfolio";

export default function PortfolioDetailsList(props) {
  return (
    <section className="portfolioDetailsList">
      <div className="container">
        <h3 className="portfolioDetails-add-list-title">
          Other works from this category
        </h3>
        <ul className="portfolio-img-list">{props.sameTypeList.map(item => <PortfolioItem key={item.id} {...item} />)}</ul> 
      </div>
    </section>
  );
}
