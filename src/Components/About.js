import { BsClockHistory } from 'react-icons/bs';
import { GrSatellite, GrPersonalComputer } from 'react-icons/gr';
import { FaUserAstronaut } from 'react-icons/fa';
export default function About() {
  const aboutInfo = [
    {
      id: 1,
      image: GrSatellite,
      title: 'Attention to detail',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      image: BsClockHistory,
      title: 'Punctuality',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      image: GrPersonalComputer,
      title: 'Planning',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      image: FaUserAstronaut,
      title: 'Modern tech',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  function aboutList() {
    const list = aboutInfo.map(item => {
      return (
        <li key={item.id} className="about-item">
          <div className="about-icon-bg">
            <item.image className="about-icon" />
          </div>
          <h3 className="about-item-title">{item.title}</h3>
          <p className="about-item-text">{item.desc}</p>
        </li>
      );
    });
    return list;
  }
  return (
    <section className="about">
      <div className="container">
        <ul className="about-list">{aboutList()}</ul>
      </div>
    </section>
  );
}
