import ArrowButtons from './components/arrow.jsx'
function Contact({ selectedItem, setSelectedItem }) {
    return (
        <div className="wrapper">
            <div className="contact-section">
                <h2>연락처</h2>
                <div className="contact-details">
                    <p>
                        <strong>이메일:</strong> wekuly@naver.com
                    </p>
                    <p>
                        <strong>전화번호:</strong> <a className="phone-link" href="tel:01097675806">010-9767-5806</a>
                    </p>
                    <p>
                        <strong>GitHub:</strong> <a href="https://github.com/wekuly" target="_blank" rel="noopener noreferrer">github.com/wekuly</a>
                    </p>
                </div>
            </div>
            <ArrowButtons selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Contact
