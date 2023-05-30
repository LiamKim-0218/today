import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        {/* 다른 링크들 */}
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;