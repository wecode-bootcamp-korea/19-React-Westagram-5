import './TeamIndex.scss';
import { Link } from 'react-router-dom';

function teamIndex() {
  return (
      <>
        <dir id="teamIndex">
            <h1>5팀 Westagram 바로가기 </h1>
            <ul>
                <li>
                    김동현 페이지 바로가기
                    <Link to="/logindh">
                        <button>로그인</button>
                    </Link>
                    <Link to="/maindh">
                    <button>메인</button>
                    </Link>
                </li>
                <li>
                    박세리 페이지 바로가기
                    <Link to="/loginsp">
                        <button>로그인</button>
                    </Link>
                    <Link to="/mainsp">
                        <button>메인</button>
                    </Link>
                </li>
                <li>
                    서동이 페이지 바로가기
                    <Link to="/loginsd">
                        <button>로그인</button>
                    </Link>
                    <Link to="/mainsd">
                        <button>메인</button>
                    </Link>
                </li>
                <li>
                    강서형 페이지 바로가기
                    <Link to="/loginsyeongii">
                        <button>로그인</button>
                    </Link>
                    <Link to="/mainsyeongii">
                        <button>메인</button>
                    </Link>
                </li>
            </ul>
        </dir>
      </>
  );
}

export default teamIndex;
