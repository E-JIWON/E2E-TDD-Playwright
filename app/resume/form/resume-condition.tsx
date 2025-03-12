"use client";


interface JobPreferencesProps {
    jobPreferences: {
        careerLevel: string;
        desiredPosition: string;
        desiredSalary: string;
        possibleWorkDate: string;
    };
    setJobPreferences: (preferences: any) => void;
}

const careerLevels = [
    { value: "학생/신입(2년이내)", label: "학생/신입(2년이내)" },
    { value: "사원(5년 이내)", label: "사원(5년 이내)" },
    { value: "대리.과장(5년 이상)", label: "대리.과장(5년 이상)" },
    { value: "관리자(10년 이상)", label: "관리자(10년 이상)" },
    { value: "임원", label: "임원" },
    { value: "최고경영자", label: "최고경영자" },
];

const possibleWorkDates = [
    { value: "즉시", label: "즉시" },
    { value: "1개월이내", label: "1개월이내" },
    { value: "1-3개월", label: "1-3개월" },
    { value: "3개월이상", label: "3개월이상" },
    { value: "협상가능", label: "협상가능" },
];

const JobPreferences = ({ jobPreferences, setJobPreferences }: JobPreferencesProps) => {
    return (
        <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">희망 취업 조건 <span className="text-red-500">*</span></h2>

            {/* 커리어 수준 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">커리어 수준 <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                    {careerLevels.map((level, index) => (
                        <label key={level.value} className="flex items-center">
                            <input
                                type="radio"
                                name="careerLevel"
                                value={level.value}
                                checked={jobPreferences.careerLevel === level.value || (index === 0 && jobPreferences.careerLevel === "")}
                                onChange={() => setJobPreferences({ ...jobPreferences, careerLevel: level.value })}
                                className="mr-2"
                            />
                            {level.label}
                        </label>
                    ))}
                </div>
            </div>

            {/* 희망 직급 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">희망 직급 <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    value={jobPreferences.desiredPosition}
                    onChange={(e) => setJobPreferences({ ...jobPreferences, desiredPosition: e.target.value })}
                    className="w-full border p-2 rounded"
                    placeholder="예: 팀장, 매니저 등"
                />
            </div>

            {/* 희망 연봉 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">희망 연봉 <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    value={jobPreferences.desiredSalary}
                    onChange={(e) => setJobPreferences({ ...jobPreferences, desiredSalary: e.target.value })}
                    className="w-full border p-2 rounded"
                    placeholder="예: 5,000만원"
                />
            </div>

            {/* 근무 가능 시점 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">근무 가능 시점 <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                    {possibleWorkDates.map((date, index) => (
                        <label key={date.value} className="flex items-center">
                            <input
                                type="radio"
                                name="possibleWorkDate"
                                value={date.value}
                                checked={jobPreferences.possibleWorkDate === date.value || (index === 0 && jobPreferences.possibleWorkDate === "")}
                                onChange={() => setJobPreferences({ ...jobPreferences, possibleWorkDate: date.value })}
                                className="mr-2"
                            />
                            {date.label}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobPreferences;
