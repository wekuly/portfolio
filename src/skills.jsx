import ArrowButtons from './components/arrow.jsx'
function Skills({ selectedItem, setSelectedItem }) {
    return (
        <div className="skills-section">
            <h2>기술 스택</h2>
            <div className="skills-list">
                <div className="skill-category">
                    <h3>프론트엔드</h3>
                    <div className="skill-items">
                        <span className="skill-item">HTML</span>,
                        <span className="skill-item"> CSS</span>,
                        <span className="skill-item"> JavaScript</span>,
                        <span className="skill-item"> JQuery</span>,
                        <span className="skill-item"> React</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>백엔드</h3>
                    <div className="skill-items">
                        <span className="skill-item">Node.js</span>,
                        <span className="skill-item"> pm2</span>,
                        <span className="skill-item"> PHP</span>,
                        <span className="skill-item"> MySQL</span>,
                        <span className="skill-item"> MariaDB</span>,
                    </div>
                </div>

                <div className="skill-category">
                    <h3>기타</h3>
                    <div className="skill-items">
                        <span className="skill-item">Git</span>,
                        <span className="skill-item"> AWS</span>,
                        <span className="skill-item"> Docker</span>
                    </div>
                </div>
            </div>
            <ArrowButtons selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Skills
