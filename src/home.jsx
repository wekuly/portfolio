import { Link } from 'react-router-dom'
import './App.css'
function Home({ selectedItem, handleItemHover, setLocation }) {
    return (
        <nav className="table-of-contents">
            <h2>포트폴리오</h2>
            <ul className="table-of-contents-list">
                <li
                    className={`table-of-contents-item ${selectedItem === 0 ? 'selected' : ''}`}
                    onMouseOver={() => handleItemHover(0)}
                >
                    <div className="table-of-contents-item-content-wrapper">
                        <Link to="/intro" onClick={() => setLocation('/intro')}>소개</Link>
                    </div>
                </li>
                <li
                    className={`table-of-contents-item ${selectedItem === 1 ? 'selected' : ''}`}
                    onMouseOver={() => handleItemHover(1)}
                >
                    <div className="table-of-contents-item-content-wrapper">
                        <Link to="/skills" onClick={() => setLocation('/skills')}>기술 스택</Link>
                    </div>
                </li>
                <li
                    className={`table-of-contents-item ${selectedItem === 2 ? 'selected' : ''}`}
                    onMouseOver={() => handleItemHover(2)}
                >
                    <div className="table-of-contents-item-content-wrapper">
                        <Link to="/projects" onClick={() => setLocation('/projects')}>프로젝트</Link>
                    </div>
                </li>
                <li
                    className={`table-of-contents-item ${selectedItem === 3 ? 'selected' : ''}`}
                    onMouseOver={() => handleItemHover(3)}
                >
                    <div className="table-of-contents-item-content-wrapper">
                        <Link to="/contact" onClick={() => setLocation('/contact')}>연락처</Link>
                    </div>
                </li>
                <li
                    className={`table-of-contents-item ${selectedItem === 4 ? 'selected' : ''}`}
                    onMouseOver={() => handleItemHover(4)}
                >
                    <div className="table-of-contents-item-content-wrapper">
                        <Link to="/honest" onClick={() => setLocation('/honest')}>그외</Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Home