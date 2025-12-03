import ArrowButtons from './components/arrow.jsx'
import { useState } from 'react';
function Intro({ selectedItem, setSelectedItem }) {
    const [showIntroDetailsContentLinkText, setShowIntroDetailsContentLinkText] = useState(false);
    return (
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
                <p className="intro-details-content">
                    자바스크립트 기반 게임 개발

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
                        - LG 스탠바이미 기본 6종게임 中 2개(<b>체스, ANIMAL HIT</b>) 메인 개발자.
                        <br />
                        이후 추가된 6종게임 中 <b>바둑</b> 메인 개발자
                        <br />
                        프론트 : JS,JQuery
                        <br />
                        백엔드 : PHP, NodeJS, Maria DB
                        <br />
                        를 활용 했습니다.
                        <br />
                        <br />
                        부싯돌 게임 중
                        <br />
                        골드타워 디펜스 - 메인 개발자
                        <br />
                        포커, 맞고 ,바둑 등 다양한 게임 오류 수정 및 업데이트
                        <br />
                        유저의 오류제보 또는 데이터확인 등 문의메일 답변 및 오류 수정
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
            <ArrowButtons selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Intro
