interface ResumeKeywordProps {
    keyword: string;
    setKeyword: (keyword: string) => void;
}

const ResumeKeyword = ({ keyword, setKeyword }: ResumeKeywordProps) => {
    return (
        <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">이력서 키워드 <span className="text-red-500">*</span></h2>
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="이력서 키워드를 입력하세요"
            />
        </div>
    );
};

export default ResumeKeyword;
