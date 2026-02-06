import ArrowButtons from './components/arrow.jsx'
function Skills({ selectedItem, setSelectedItem }) {
    return (
        <div className="wrapper">
            <div className="skills-section">
                <h2>기술 스택</h2>
                <div className="skills-list">
                    <div className="skill-main">
                        <h3>[실무]</h3>
                        <div className="skill-category">
                            <h4>- Frontend</h4>
                            <div className="skill-items">
                                &nbsp;&nbsp;&nbsp;
                                <span className="skill-item">JavaScript</span>,
                                <span className="skill-item"> JQuery</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4>- Backend</h4>
                            <div className="skill-items">
                                &nbsp;&nbsp;&nbsp;
                                <span className="skill-item">Node.js</span>,
                                <span className="skill-item"> PHP</span>,
                                <span className="skill-item"> MySQL</span>
                                <span className="skill-item"> MariaDB</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4>- Realtime/Server</h4>
                            <div className="skill-items">
                                &nbsp;&nbsp;&nbsp;
                                <span className="skill-item">PM2</span>,
                                <span className="skill-item"> WebSocket</span>,
                            </div>
                        </div>
                    </div>

                    <div className="skill-personal">
                        <h3>[개인 프로젝트]</h3>
                        <div className="skill-category">
                            <h4>- 프론트엔드</h4>
                            <div className="skill-items">
                                &nbsp;&nbsp;&nbsp;
                                <span className="skill-item">React</span>,
                                <span className="skill-item"> JavaScript</span>,
                                <span className="skill-item"> TypeScript</span>,
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4>- 백엔드/DB</h4>
                            <div className="skill-items">
                                &nbsp;&nbsp;&nbsp;
                                <span className="skill-item">Node.js</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4>- Realtime/Server , Deployment & Infrastructure</h4>
                            <div className="skill-items">
                                &nbsp;&nbsp;&nbsp;
                                <span className="skill-item">PM2</span>,
                                <span className="skill-item"> Socket.io</span>,
                                <span className="skill-item"> Railway</span>,
                                <span className="skill-item"> Oracle Cloud Infrastructure</span>,
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4>- 기타</h4>
                            <div className="skill-items">
                                &nbsp;&nbsp;&nbsp;
                                <span className="skill-item">Git</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowButtons selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Skills
