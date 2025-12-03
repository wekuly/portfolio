import ArrowButtons from './components/arrow.jsx'
function Contact({ selectedItem, setSelectedItem }) {
    return (
        <div className="contact-section">
            <h2>연락처</h2>
            <div className="contact-details">
                <p>
                    <strong>이메일:</strong> example@email.com
                </p>
                <p>
                    <strong>전화번호:</strong> 010-1234-5678
                </p>
                <p>
                    <strong>GitHub:</strong> <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">github.com/username</a>
                </p>
                <p>
                    <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">linkedin.com/in/username</a>
                </p>
            </div>
            <ArrowButtons selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
    )
}

export default Contact
