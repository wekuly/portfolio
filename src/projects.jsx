import ArrowButtons from './components/arrow.jsx'
import './projects.css'

import goldtower from './assets/goldtower.jpg'
import chess from './assets/chess.jpg'
import animalhit from './assets/animalhit.jpg'
import baduk from './assets/baduk.jpg'

function Projects({ selectedItem, setSelectedItem }) {
    return (
        <div className="wrapper">
            <div className="projects-section">
                <h2>프로젝트</h2>
                <div className="projects-list">
                    <div className="project-item">
                        <h3>골드 타워 디펜스</h3>
                        <img className="project-image" src={goldtower} alt="골드 타워 디펜스" />
                        <p className="project-period">2022.03 - 2025.01</p>
                        <p className="project-description">
                            골드타워 디펜스 게임 전반적 운영 및 유지보수, 업데이트
                            <br />
                            대표작 : 안나 영웅
                        </p>
                        <a href="https://play.google.com/store/apps/details?id=busidol.mobile.tower&hl=ko" target="_blank" rel="noopener noreferrer">
                            Play Store 링크
                        </a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=pg49X7cfYto" target="_blank" rel="noopener noreferrer">
                            유저 실제 게임 리뷰 링크
                        </a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=ezXoftmmIjA" target="_blank" rel="noopener noreferrer">
                            대표작 안나 영웅 게임 홍보영상
                        </a>
                        <h3>체스</h3>
                        <img className="project-image" src={chess} alt="체스" />
                        <p className="project-period">2022.06 - 2022.09</p>
                        <p className="project-description">
                            - LG스탠바이미 기본 게임 中 체스 개발
                        </p>
                        <a href="https://www.youtube.com/watch?v=F-7U1shW1js" target="_blank" rel="noopener noreferrer">
                            부싯돌 게임 소개영상
                        </a>
                        <a href="https://www.youtube.com/watch?v=0dUzeeNhYec" target="_blank" rel="noopener noreferrer">
                            LG스탠바이미 게임 영상 (30초 이후 ~~)
                        </a>
                        <a href="https://gamedistribution.com/games/the-chess/" target="_blank" rel="noopener noreferrer">
                            gamedistribution 링크
                        </a>
                        <h3>Animal Hit</h3>
                        <img className="project-image" src={animalhit} alt="Animal Hit" />
                        <p className="project-period">2022.09 - 2022.11</p>
                        <p className="project-description">
                            - LG스탠바이미 기본 게임 中 Animal Hit 개발
                        </p>
                        <a href="https://www.youtube.com/watch?v=YPLoj8O-blQ" target="_blank" rel="noopener noreferrer">
                            부싯돌 게임 소개영상
                        </a>
                        <h3>바둑</h3>
                        <img className="project-image" src={baduk} alt="바둑" />
                        <p className="project-period">2025.06 - 2025.08</p>
                        <p className="project-description">
                            - LG스탠바이미 기본 게임 中 바둑 개발
                        </p>
                    </div>

                    <div className="project-item">
                        <div className="project-common-section" id="project-common">
                            <span className="project-common-title">요약</span>
                            <span className="project-common-all">

                                JavaScript 기반 웹 게임 풀스택 메인 개발자
                                <br />
                                실시간 PVP 시스템, 외부 결제·광고 API 통합, 다중 플랫폼 납품 경험이 있습니다.
                                <br />
                                확장성과 협업을 고려한 코드 구조 설계와 안정적인 서비스 운영을 위해 노력합니다.
                                <br />
                                웹 기반 게임 서비스의 메인 개발자로서
                                AI 엔진 연동, 실시간 PVP 서버, 광고·결제 시스템,
                                다중 플랫폼(LG·삼성·통신사) 납품까지 전 과정을 경험했습니다.
                                확장성과 유지보수를 고려한 구조 설계와
                                실제 수익 창출 및 서비스 운영 경험을 보유하고 있습니다.
                            </span>
                            <span className="project-common-title">공통</span>
                            <span className="project-common-subtitle">Frontend Development</span>
                            <br />

                            <span className="project-common-all">
                                - 디자이너와 협업하여 게임 UI 프론트엔드 구현 및 사용자 경험(UX) 개선
                                <br />
                                - UI/UX 개선을 위한 기능 요구사항 및 화면 흐름에 대해 기획·디자인 팀과 협업
                                <br />
                                - 사내 코드 공유 및 버전 관리 체계 구축을 통해 코드 업데이트 및 백업 효율성 향상
                                <br />
                                - 협업을 고려한 코딩 컨벤션 적용, 주석 작성 및 가독성 중심의 코드 구조 유지
                                <br />
                                - 쉽게 확장할 수 있도록 모듈화된 구조로 설계하여 추가 개발 용이하도록 함.
                                <br />
                                - JavaScript 및 jQuery를 활용하여 게임 규칙 알고리즘 및 화면 렌더링 로직 구현
                                <br />
                            </span>
                            <br />
                            <span className="project-common-subtitle">Backend Development</span>
                            <br />
                            <span className="project-common-all">
                                - PHP 및 MySQL을 활용하여 게임 데이터베이스 설계 및 서버 로직 구현
                                <br />
                                - 게임 재화, 랭킹, 결제, 길드 시스템 등 핵심 게임 기능 서버 사이드 개발
                                <br />
                                - Node.js, WebSocket, PHP를 활용하여 실시간 PVP 서버 및 양방향 통신 로직 구현
                                <br />
                                - 네트워크 지연, 타이머 동기화, 연결 불안정 등 실시간 통신 환경에서 발생하는 이슈 대응
                                <br />
                                - 셋타임 이슈 및 네트워크 오류로 인한 버그를 분석·수정하여 서비스 안정성 개선
                            </span>
                            <br />
                            <span className="project-common-subtitle">External API & Advertisement Integration</span>
                            <br />
                            <span className="project-common-all">
                                - Bright Data 광고 API 연동 및 게임 내 광고 시스템 구현
                                <br />
                                - JavaScript SDK가 제공되지 않은 PlayerWon 광고 플랫폼을 API 기반으로 직접 분석 및 JavaScript 형태로 구현
                                <br />
                                - 광고 연동 로직을 표준화하여 사내 공통 모듈로 제작, 타 프로젝트에서 재사용 가능하도록 설계
                                <br />
                                - 외부 API 연동 시 유지보수 및 확장을 고려한 공통 인터페이스 구조 설계
                            </span>
                            <br />
                            <span className="project-common-subtitle">Multi-Platform Deployment & Maintenance</span>
                            <br />
                            <span className="project-common-all">
                                - LG, 삼성, KT, SKB 등 다양한 플랫폼 환경에 게임 납품 및 운영
                                <br />
                                - 플랫폼별 전용 API 및 디바이스 특성을 고려한 예외 처리 및 분기 로직 구현
                                <br />
                                - 화면 비율, 해상도, 입력 방식 등 플랫폼별 상이한 실행 환경에 대응하는 UI/로직 설계
                                <br />
                                - 유지보수를 고려한 플랫폼별 코드 구조 분리 및 관리 체계 구축
                            </span>

                            <span className="project-common-subtitle">Featured Projects</span>
                            <br />
                            <span className="project-common-all">
                                Role: Full-stack / Main Developer
                                <br />
                                Tech: JavaScript, PHP, MySQL, WebSocket, External APIs
                                <h2>바둑</h2>
                                <span className="project-common-all-Description-title">Description</span>
                                <br />
                                <span className="project-common-all-Description">
                                    - 인공지능 KATAGO API 연동, AI와 대국 구현 <br />
                                    - 실시간 PVP 구현, 바둑 알고리즘 구현
                                </span>
                                <br />
                                <span className="project-common-all-Achievements-title">Achievements</span>
                                <br />
                                <span className="project-common-all-Achievements">
                                    - 오프라인 환경에서도 앱이 멈추지 않는 환경 구성하여 LG 스탠바이미 납품
                                    <br />
                                    - 실시간 PVP 서버를 수정·배포 시 서비스 중단 없이 운영 가능하도록 구성하여
                                    운영 중 장애 리스크를 최소화
                                    <br />
                                </span>
                                <br />
                                <h2>체스</h2>
                                <span className="project-common-all-Description-title">Description</span>
                                <br />
                                <span className="project-common-all-Description">
                                    - 인공지능 API 연동 <br />
                                    - 실시간 PVP 구현, 체스 알고리즘 구현
                                    - 체스 내 광고 API 연동하여 수익화 모델 구현
                                </span>
                                <br />
                                <span className="project-common-all-Achievements-title">Achievements</span>
                                <br />
                                <span className="project-common-all-Achievements">
                                    - LG 스탠바이미 납품 , 전세계 서비스 <br />
                                    - 체스 내 광고 누적 수익 약 1억 원 달성 (퇴사 전)
                                </span>
                                <h2>골드타워 디펜스</h2>
                                <span className="project-common-all-Description-title">Description</span>
                                <br />
                                <span className="project-common-all-Description">
                                    - 메인 개발자로서 게임 시스템 전반(클라이언트·서버) 설계 및 구현
                                    <br />
                                    - 캐릭터, 이벤트, 스테이지를 데이터 기반으로 쉽게 확장 가능하도록 구조 설계
                                    <br />
                                    - 결제, 길드, 랭킹 등 핵심 게임 시스템 구현
                                    <br />
                                    - 재사용 가능한 이벤트 시스템 구현하여 분기마다 진행가능하도록 설계.
                                </span>
                                <br />
                                <span className="project-common-all-Achievements-title">Achievements</span>
                                <br />
                                <span className="project-common-all-Achievements">
                                    - LG, kt, 삼성 , SKB, 모바일 등 다양한 플랫폼 납품, 전세계 서비스<br />
                                    - 수익 연간 2억 원 달성<br />
                                    - PVP 에서 접속 기기간에 속도차이 최소화<br />
                                    - 체계적인 기획 및 운영에도 참여하여 수익 우상향.
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3>토이 프로젝트</h3>
                        <p className="project-period">2025.12 - 2026.01</p>
                        <p className="project-description">
                            <a href="https://wekuly.github.io/cat_maker/" target="_blank" rel="noopener noreferrer">고양이 짤 생성기</a> <br />
                            <a href="https://wekuly.github.io/household/" target="_blank" rel="noopener noreferrer">간단한 가계부</a> <br />
                            <span className="project-description-small">
                                React
                                <br />
                                로컬 스토리지
                                <br />
                                고양이사진 api
                            </span>
                        </p>
                        <a href="https://github.com/wekuly/py_omok/releases/latest">
                            Python GUI 오목 Github 링크
                        </a>
                        <a href="https://github.com/wekuly/py_omok/releases/download/1.0.0/main.exe">
                            Python GUI 오목 실행파일 exe 다운로드
                        </a>
                        <span className="project-description-small">
                            Python , Tkinter
                            <br />
                        </span>
                    </div>
                </div>
            </div>
            <ArrowButtons selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Projects
