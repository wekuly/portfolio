import ArrowButtons from './components/arrow.jsx'
function Projects({ selectedItem, setSelectedItem }) {
    return (
        <div className="wrapper">
            <div className="projects-section">
                <h2>프로젝트</h2>
                <div className="projects-list">
                    <div className="project-item">
                        <h3>골드 타워 디펜스</h3>
                        <p className="project-period">2022.03 - 2025.01</p>
                        <p className="project-description">
                            골드타워 디펜스 게임 전반적 운영 및 유지보수, 업데이트
                            <br />
                            대표작 : 안나 영웅
                        </p>
                        <div className="project-tech-stack">
                            <span className="tech-item">JavaScript</span>,
                            <span className="tech-item"> JQuery</span>,
                            <span className="tech-item"> PHP</span>,
                            <span className="tech-item"> Node.js</span>,
                            <span className="tech-item"> MariaDB</span>
                        </div>
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
                    </div>

                    <div className="project-item">
                        <h3>체스</h3>
                        <p className="project-period">2022.06 - 2022.09</p>
                        <p className="project-description">
                            - LG스탠바이미 기본 게임 中 체스 개발
                            <br />
                            - 체스 체크메이트 등 규칙 알고리즘 구현
                            <br />
                            - 1:1 온라인게임 구현
                            <br />
                            - 유저 데이터 DB를 활용 , 랭킹 시스템 구현
                            <br />
                            - Player won , bright data 광고 삽입.
                            <br />
                            - 오류 수정 및 업데이트
                        </p>
                        <div className="project-tech-stack">
                            <span className="tech-item">JavaScript</span>,
                            <span className="tech-item"> JQuery</span>,
                            <span className="tech-item"> PHP</span>,
                            <span className="tech-item"> Node.js</span>,
                            <span className="tech-item"> pm2</span>,
                            <span className="tech-item"> MariaDB</span>
                        </div>
                        <a href="https://www.youtube.com/watch?v=0dUzeeNhYec" target="_blank" rel="noopener noreferrer">
                            LG스탠바이미 게임 영상 (30초 이후 ~~)
                        </a>
                        <br />
                    </div>

                    <div className="project-item">
                        <h3>바둑</h3>
                        <p className="project-period">2025.06 - 2025.08</p>
                        <p className="project-description">
                            - 프리랜서 계약 후 바둑 개발 <br />
                            - LG스탠바이미 기본 게임 中 바둑 개발
                            <br />
                            - 바둑 Katago api 연결, 계가, 추천수 AI 활용
                            <br />
                            - 바둑 따냄, 사활 , 계가 등 규칙 알고리즘 구현
                            <br />
                            - 바둑 기보 구현
                            <br />
                            - 1:1 온라인게임 구현 , 관전 기능 구현
                            <br />
                            - 바둑 유저 데이터 DB를 활용 , 랭킹 시스템 구현
                            <br />
                            - DB 활용하여 재화, 급수 승강 시스템 구현
                            <br />
                            - Player won , bright data 광고 삽입.
                            <br />
                            - 오류 수정 및 업데이트
                        </p>
                        <div className="project-tech-stack">
                            <span className="tech-item">JavaScript</span>,
                            <span className="tech-item"> JQuery</span>,
                            <span className="tech-item"> PHP</span>,
                            <span className="tech-item"> Node.js</span>,
                            <span className="tech-item"> pm2</span>,
                            <span className="tech-item"> MariaDB</span>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3>토이 프로젝트</h3>
                        <p className="project-period">2025.06 - 2025.08</p>
                        <p className="project-description">
                            - <a href="https://wekuly.github.io/cat_maker/" target="_blank" rel="noopener noreferrer">https://wekuly.github.io/cat_maker/</a> <br />
                        </p>
                        <p className="project-description">
                            - <a href="https://wekuly.github.io/household/" target="_blank" rel="noopener noreferrer">https://wekuly.github.io/cat_maker/</a> <br />
                        </p>
                        <div className="project-tech-stack">
                            <span className="tech-item">JavaScript</span>,
                            <span className="tech-item"> JQuery</span>,
                            <span className="tech-item"> PHP</span>,
                            <span className="tech-item"> Node.js</span>,
                            <span className="tech-item"> pm2</span>,
                            <span className="tech-item"> MariaDB</span>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowButtons selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Projects
