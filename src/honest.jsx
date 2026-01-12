import ArrowButtons from './components/arrow.jsx'

function Honest({ selectedItem, setSelectedItem }) {
    return (
        <div className="wrapper">
            <div className="honest-section">
                <h2>그외</h2>
                <div className="honest-details">
                    <p>
                        자차 보유, 운전경력 10년, 운전면허 1종
                        <br />
                        <br />
                        디자인에는 재능 없습니다.
                        <br />
                        <br />
                        사람들과 커뮤니케이션 원활 합니다.
                        <br />
                        <br />
                        AI 활용 개발 가능 , Cursor , chatgpt , gemini 적극 사용
                        <br />
                        <br />

                    </p>
                </div>
            </div>
            <ArrowButtons selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Honest