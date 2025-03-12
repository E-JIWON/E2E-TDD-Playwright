"use client";

interface EducationProps {
    highSchool: string;
    setHighSchool: (value: string) => void;
    universityList: {
        id: number;
        schoolName: string;
        major: string;
        gpa: string;
        maxGpa: string;
        startDate: string;
        endDate: string;
        description: string;
    }[];
    setUniversityList: (list: any) => void;
}

const MAX_UNIVERSITIES = 5;

const Education = ({ highSchool, setHighSchool, universityList, setUniversityList }: EducationProps) => {
    const addUniversity = () => {
        if (universityList.length < MAX_UNIVERSITIES) {
            setUniversityList([
                ...universityList,
                {
                    id: Date.now(),
                    schoolName: "",
                    major: "",
                    gpa: "",
                    maxGpa: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                },
            ]);
        }
    };

    const removeUniversity = (id: number) => {
        const targetEdu = universityList.find((edu) => edu.id === id);
        if (targetEdu && Object.values(targetEdu).some((val) => val !== "")) {
            const confirmDelete = window.confirm("이 학력을 삭제하시겠습니까?");
            if (!confirmDelete) return;
        }
        setUniversityList(universityList.filter((edu) => edu.id !== id));
    };

    const updateUniversity = (id: number, key: string, value: any) => {
        setUniversityList(
            universityList.map((edu) => (edu.id === id ? { ...edu, [key]: value } : edu))
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">학력사항</h2>

            {/* 고등학교 학력 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">고등학교 학력사항 (선택)</label>
                <input
                    type="text"
                    value={highSchool}
                    onChange={(e) => setHighSchool(e.target.value)}
                    className="w-full border p-2 rounded"
                    placeholder="고등학교명 입력 (선택)"
                />
            </div>

            <h3 className="text-md font-semibold mb-2 mt-4">대학교/대학원</h3>

            {universityList.length === 0 ? (
                <button onClick={addUniversity} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    + 추가
                </button>
            ) : (
                <>
                    {universityList.map((edu) => (
                        <div key={edu.id} className="border p-4 mb-4 rounded-lg shadow">
                            <div className="grid grid-cols-2 gap-4">
                                {/* 학교명 */}
                                <div>
                                    <label className="block text-sm font-medium">학교명 <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        value={edu.schoolName}
                                        onChange={(e) => updateUniversity(edu.id, "schoolName", e.target.value)}
                                        className="w-full border p-2 rounded"
                                    />
                                </div>

                                {/* 전공 */}
                                <div>
                                    <label className="block text-sm font-medium">전공 <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        value={edu.major}
                                        onChange={(e) => updateUniversity(edu.id, "major", e.target.value)}
                                        className="w-full border p-2 rounded"
                                    />
                                </div>

                                {/* 평점 */}
                                <div>
                                    <label className="block text-sm font-medium">평점 <span className="text-red-500">*</span></label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={edu.gpa}
                                            onChange={(e) => updateUniversity(edu.id, "gpa", e.target.value)}
                                            className="w-full border p-2 rounded"
                                            placeholder="점수"
                                        />
                                        <span>/</span>
                                        <input
                                            type="text"
                                            value={edu.maxGpa}
                                            onChange={(e) => updateUniversity(edu.id, "maxGpa", e.target.value)}
                                            className="w-full border p-2 rounded"
                                            placeholder="만점"
                                        />
                                    </div>
                                </div>

                                {/* 재학 기간 */}
                                <div>
                                    <label className="block text-sm font-medium">재학 기간 <span className="text-red-500">*</span></label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="month"
                                            value={edu.startDate}
                                            onChange={(e) => updateUniversity(edu.id, "startDate", e.target.value)}
                                            className="border p-2 rounded"
                                        />
                                        <span>~</span>
                                        <input
                                            type="month"
                                            value={edu.endDate}
                                            onChange={(e) => updateUniversity(edu.id, "endDate", e.target.value)}
                                            className="border p-2 rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 추가 내용 */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium">추가내용</label>
                                <textarea
                                    value={edu.description}
                                    onChange={(e) => updateUniversity(edu.id, "description", e.target.value)}
                                    className="w-full border p-2 rounded"
                                    rows={2}
                                />
                            </div>

                            {/* 삭제 버튼 */}
                            <div className="mt-4 flex justify-end gap-2">
                                <button onClick={() => removeUniversity(edu.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                                    - 삭제
                                </button>
                            </div>
                        </div>
                    ))}

                    {universityList.length < MAX_UNIVERSITIES && (
                        <button onClick={addUniversity} className="px-4 py-2 bg-green-500 text-white rounded-md">
                            + 추가
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default Education;
