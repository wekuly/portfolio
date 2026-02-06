import ArrowButtons from './components/arrow.jsx'
import { useState } from 'react';
function Intro({ selectedItem, setSelectedItem }) {
    const [showIntroDetailsContentLinkText, setShowIntroDetailsContentLinkText] = useState(false);
    return (
        <div className="wrapper">
            <div className="intro-section">
                <h2>안녕하세요!</h2>
                <p>
                    김태환 입니다.
                    <br />
                    어제보다 더 나은 코드를 작성하는 것을 좋아하는 개발자입니다.
                </p>
                <div className="intro-details">
                    <h3>경력</h3>
                    <h2>• 부싯돌 (2022-2025)</h2>
                    <a href="http://www.busidol.com/" target="_blank" rel="noopener noreferrer">http://www.busidol.com/</a>
                    <p className="intro-details-content">
                        JavaScript 기반 웹 게임 풀스택 메인 개발자

                        <br />
                        <span
                            className="intro-details-content-link"
                            onClick={() =>
                                setShowIntroDetailsContentLinkText(!showIntroDetailsContentLinkText)
                            }
                        >
                            {showIntroDetailsContentLinkText ? '접기' : '자세히 보기(클릭)'}
                        </span>
                        <br />

                        <span className={`intro-details-content-link-text ${showIntroDetailsContentLinkText ? 'show' : ''}`}>
                            - LG 스탠바이미 납품 게임 개발 <br />
                            &nbsp;&nbsp;&nbsp;· 체스, 바둑, Animal Hit 등 다수 타이틀 메인 개발 담당 <br />
                            &nbsp;&nbsp;&nbsp;· 기획 협업부터 구현, 배포까지 전 과정 참여 <br />
                            <br />
                            - 부싯돌 게임 프로젝트 유지보수 및 업데이트 <br />
                            &nbsp;&nbsp;&nbsp;· SS, KT, SKB 등 여러 플랫폼 납품 <br />
                            &nbsp;&nbsp;&nbsp;· 골드타워 디펜스, 포커, 맞고, 바둑 등 라이브 서비스 운영 <br />
                            &nbsp;&nbsp;&nbsp;· 신규 기능 추가 및 안정화 작업 수행 <br />
                            <br />
                            - 기술 스택 <br />
                            &nbsp;&nbsp;&nbsp;· Frontend: JavaScript, jQuery <br />
                            &nbsp;&nbsp;&nbsp;· Backend: PHP, Node.js, MariaDB <br />
                        </span>
                    </p>

                    <h3>학력</h3>
                    <p>
                        • 대구대학교 멀티미디어학과(주전공) <br /> 심리학과 졸업(복수전공) (2013-2020)

                    </p>
                    <h3>자격증</h3>
                    <p>
                        • 정보처리기능사
                        <br />
                        • 기상기사

                    </p>
                </div>
            </div>
            <ArrowButtons selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Intro
