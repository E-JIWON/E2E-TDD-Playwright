"use client";

interface OverseasExperienceProps {
    overseasExperiences: {
        id: number;
        country: string;
        city: string;
        startDate: string;
        endDate: string;
    }[];
    setOverseasExperiences: (experiences: any) => void;
}

const MAX_EXPERIENCES = 5;

const OverseasExperience = ({ overseasExperiences, setOverseasExperiences }: OverseasExperienceProps) => {
    const addExperience = () => {
        if (overseasExperiences.length < MAX_EXPERIENCES) {
            setOverseasExperiences([
                ...overseasExperiences,
                {
                    id: Date.now(),
                    country: "",
                    city: "",
                    startDate: "",
                    endDate: "",
                },
            ]);
        }
    };

    const removeExperience = (id: number) => {
        const targetExp = overseasExperiences.find((exp) => exp.id === id);
        if (targetExp && Object.values(targetExp).some((val) => val !== "")) {
            const confirmDelete = window.confirm("이 해외 연수/체류 정보를 삭제하시겠습니까?");
            if (!confirmDelete) return;
        }
        setOverseasExperiences(overseasExperiences.filter((exp) => exp.id !== id));
    };

    const updateExperience = (id: number, key: string, value: any) => {
        setOverseasExperiences(
            overseasExperiences.map((exp) => (exp.id === id ? { ...exp, [key]: value } : exp))
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">해외연수 및 체류 경험</h2>

            {overseasExperiences.length === 0 ? (
                <button onClick={addExperience} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    + 추가
                </button>
            ) : (
                <>
                    {overseasExperiences.map((exp) => (
                        <div key={exp.id} className="border p-4 mb-4 rounded-lg shadow">
                            <div className="grid grid-cols-2 gap-4">
                                {/* 국가명 */}
                                <div>
                                    <label className="block text-sm font-medium">국가명 <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        value={exp.country}
                                        onChange={(e) => updateExperience(exp.id, "country", e.target.value)}
                                        className="w-full border p-2 rounded"
                                        placeholder="예: 미국, 일본 등"
                                    />
                                </div>

                                {/* 도시명 */}
                                <div>
                                    <label className="block text-sm font-medium">도시명 <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        value={exp.city}
                                        onChange={(e) => updateExperience(exp.id, "city", e.target.value)}
                                        className="w-full border p-2 rounded"
                                        placeholder="예: 뉴욕, 도쿄 등"
                                    />
                                </div>

                                {/* 체류 기간 */}
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">체류 기간 <span className="text-red-500">*</span></label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="month"
                                            value={exp.startDate}
                                            onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                                            className="border p-2 rounded"
                                        />
                                        <span>~</span>
                                        <input
                                            type="month"
                                            value={exp.endDate}
                                            onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                                            className="border p-2 rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 삭제 버튼 */}
                            <div className="mt-4 flex justify-end gap-2">
                                <button onClick={() => removeExperience(exp.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                                    - 삭제
                                </button>
                            </div>
                        </div>
                    ))}

                    {overseasExperiences.length < MAX_EXPERIENCES && (
                        <button onClick={addExperience} className="px-4 py-2 bg-green-500 text-white rounded-md">
                            + 추가
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default OverseasExperience;
