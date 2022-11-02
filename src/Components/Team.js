import person1 from '../images/person-1.jpg';
import person2 from '../images/person-2.jpg';
import person3 from '../images/person-3.jpg';
import person4 from '../images/person-4.jpg';

import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

export default function Team() {
  return (
    <section className="team">
      <div className="container">
        <h2 className="main-title">Our team</h2>
        <ul className="team-list">{teamInfo.map(item => <TeamItem key={item.id} {...item} />)}</ul>
      </div>
    </section>
  );
}

function TeamItem(item) {
  return (
    <li className="team-item">
      <img src={item.photo} className="about-task-img" alt={item.alt} />
      <div className="team-info">
        <h3 className="team-name">{item.name}</h3>
        <p className="team-role">{item.position}</p>

        <ul className="sm-list">
          <li className="sm-item">
            <a href="" className="sm-link">
              <FaFacebookF className="sm-icon" />
            </a>
          </li>
          <li className="sm-item">
            <a href="" className="sm-link">
              <FaInstagram className="sm-icon" />
            </a>
          </li>
          <li className="sm-item">
            <a href="" className="sm-link">
              <FaLinkedin className="sm-icon" />
            </a>
          </li>
          <li className="sm-item">
            <a href="" className="sm-link">
              <FaTelegramPlane className="sm-icon" />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

const teamInfo = [
  {
    id: 1,
    photo: person1,
    name: 'John Smith',
    position: 'Product Designer',
    alt: 'person 1',
  },
  {
    id: 2,
    photo: person2,
    name: 'Mary Watsons',
    position: 'Frontend Developer',
    alt: 'person 2',
  },
  {
    id: 3,
    photo: person3,
    name: 'Mike Grimes',
    position: 'Marketing',
    alt: 'person 3',
  },
  {
    id: 4,
    photo: person4,
    name: 'Will Mosby',
    position: 'UI Designer',
    alt: 'person 4',
  },
];
