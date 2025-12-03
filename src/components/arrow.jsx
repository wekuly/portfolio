import { useNavigate } from "react-router-dom";

function ArrowButtons({ selectedItem, setSelectedItem }) {
    const paths = ["/intro", "/skills", "/projects", "/contact"];
    const navigate = useNavigate();
    return (
        <div className="arrow-buttons">
            {/* ------------------------------------------------이전 버튼 시작 */}
            <button
                className="arrow-prev"
                onClick={() => {
                    setSelectedItem(prev => {
                        const newIndex = prev - 1;
                        navigate(paths[newIndex]);
                        return newIndex;
                    });
                }}
                disabled={typeof selectedItem !== "number" || selectedItem <= 0}
            >
                ◀ 이전

            </button >
            {/* ------------------------------------------------이전 버튼 끝 */}


            {/* ------------------------------------------------첫화면 버튼 시작 */}
            <button
                className="arrow-first"
                onClick={() => {
                    setSelectedItem(prev => {
                        navigate("/");
                        return 0;
                    });
                }}
            >
                첫화면 가기
            </button>
            {/* ------------------------------------------------첫화면 버튼 끝 */}


            {/* ------------------------------------------------다음 버튼 시작 */}
            <button
                className="arrow-next"
                onClick={() => {
                    setSelectedItem(prev => {
                        const newIndex = prev + 1;
                        navigate(paths[newIndex]);
                        return newIndex;
                    });
                }}
                disabled={typeof selectedItem !== "number" || selectedItem >= paths.length - 1}
            >
                다음 ▶
            </button>
            {/* ------------------------------------------------다음 버튼 끝 */}

        </div>
    );
}

export default ArrowButtons;
