"use client";

interface LanguageSkillsProps {
    languageSkills: {
        id: number;
        language: string;
        examName: string;
        score: string;
        examYear: string;
    }[];
    setLanguageSkills: (skills: any) => void;
}

const MAX_LANGUAGES = 5;
const languages = ["영어", "일어", "중국어", "기타"];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

const LanguageSkills = ({ languageSkills, setLanguageSkills }: LanguageSkillsProps) => {
    const addLanguage = () => {
        if (languageSkills.length < MAX_LANGUAGES) {
            setLanguageSkills([
                ...languageSkills,
                {
                    id: Date.now(),
                    language: "",
                    examName: "",
                    score: "",
                    examYear: "",
                },
            ]);
        }
    };

    const removeLanguage = (id: number) => {
        const targetLang = languageSkills.find((lang) => lang.id === id);
        if (targetLang && Object.values(targetLang).some((val) => val !== "")) {
            const confirmDelete = window.confirm("이 어학 정보를 삭제하시겠습니까?");
            if (!confirmDelete) return;
        }
        setLanguageSkills(languageSkills.filter((lang) => lang.id !== id));
    };

    const updateLanguage = (id: number, key: string, value: any) => {
        setLanguageSkills(
            languageSkills.map((lang) => (lang.id === id ? { ...lang, [key]: value } : lang))
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">어학 능력</h2>

            {languageSkills.length === 0 ? (
                <button onClick={addLanguage} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    + 추가
                </button>
            ) : (
                <>
                    {languageSkills.map((lang) => (
                        <div key={lang.id} className="border p-4 mb-4 rounded-lg shadow">
                            <div className="grid grid-cols-2 gap-4">
                                {/* 외국어 선택 */}
                                <div>
                                    <label className="block text-sm font-medium">외국어 <span className="text-red-500">*</span></label>
                                    <select
                                        value={lang.language}
                                        onChange={(e) => updateLanguage(lang.id, "language", e.target.value)}
                                        className="w-full border p-2 rounded"
                                    >
                                        <option value="">선택하세요</option>
                                        {languages.map((language) => (
                                            <option key={language} value={language}>
                                                {language}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* 시험명 */}
                                <div>
                                    <label className="block text-sm font-medium">시험명</label>
                                    <input
                                        type="text"
                                        value={lang.examName}
                                        onChange={(e) => updateLanguage(lang.id, "examName", e.target.value)}
                                        className="w-full border p-2 rounded"
                                        placeholder="TOEIC, JLPT 등"
                                    />
                                </div>

                                {/* 시험점수 */}
                                <div>
                                    <label className="block text-sm font-medium">시험점수</label>
                                    <input
                                        type="text"
                                        value={lang.score}
                                        onChange={(e) => updateLanguage(lang.id, "score", e.target.value)}
                                        className="w-full border p-2 rounded"
                                        placeholder="점수 입력"
                                    />
                                </div>

                                {/* 응시년도 */}
                                <div>
                                    <label className="block text-sm font-medium">응시년도</label>
                                    <select
                                        value={lang.examYear}
                                        onChange={(e) => updateLanguage(lang.id, "examYear", e.target.value)}
                                        className="w-full border p-2 rounded"
                                    >
                                        <option value="">선택하세요</option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* 삭제 버튼 */}
                            <div className="mt-4 flex justify-end gap-2">
                                <button onClick={() => removeLanguage(lang.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                                    - 삭제
                                </button>
                            </div>
                        </div>
                    ))}

                    {languageSkills.length < MAX_LANGUAGES && (
                        <button onClick={addLanguage} className="px-4 py-2 bg-green-500 text-white rounded-md">
                            + 추가
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default LanguageSkills;
