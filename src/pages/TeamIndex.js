import './TeamIndex.scss';

function teamIndex() {
  return (
      <>
        <dir id="teamIndex">
            <h1>5팀 Westagram 바로가기 페이지입니다</h1>
            <ul>
                <li>
                    김동현 페이지 바로가기
                    <button>로그인</button>
                    <button>메인</button>
                </li>
                <li>
                    박세리 페이지 바로가기
                    <button>로그인</button>
                    <button>메인</button>
                </li>
                <li>
                    서동이 페이지 바로가기
                    <button>로그인</button>
                    <button>메인</button>
                </li>
                <li>
                    강서형 페이지 바로가기
                    <button>로그인</button>
                    <button>메인</button>
                </li>
            </ul>
        </dir>
      </>
  );
}

export default teamIndex;
