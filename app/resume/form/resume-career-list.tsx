"use client";

import { industryCodes, jobCategoryCodes } from "@/data/codes";

interface WorkExperienceProps {
    workExperiences: {
        id: number;
        companyName: string;
        jobTitle: string;
        position: string;
        startDate: string;
        endDate: string | null;
        isCurrent: boolean;
        industry: string;
        jobCategory: string;
        description: string;
    }[];
    setWorkExperiences: (experiences: any) => void;
}

const MAX_EXPERIENCES = 5;

const WorkExperience = ({ workExperiences, setWorkExperiences }: WorkExperienceProps) => {
    const addExperience = () => {
        if (workExperiences.length < MAX_EXPERIENCES) {
            setWorkExperiences([
                ...workExperiences,
                {
                    id: Date.now(),
                    companyName: "",
                    jobTitle: "",
                    position: "",
                    startDate: "",
                    endDate: "",
                    isCurrent: false,
                    industry: "",
                    jobCategory: "",
                    description: "",
                },
            ]);
        }
    };

    const removeExperience = (id: number) => {
        const targetExp = workExperiences.find((exp) => exp.id === id);
        if (targetExp && Object.values(targetExp).some((val) => val !== "" && val !== null && val !== false)) {
            const confirmDelete = window.confirm("이 경력을 삭제하시겠습니까?");
            if (!confirmDelete) return;
        }
        setWorkExperiences(workExperiences.filter((exp) => exp.id !== id));
    };

    const updateExperience = (id: number, key: string, value: any) => {
        setWorkExperiences(
            workExperiences.map((exp) =>
                exp.id === id ? { ...exp, [key]: value, endDate: key === "isCurrent" && value ? null : exp.endDate } : exp
            )
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">경력사항</h2>

            {workExperiences.length === 0 ? (
                <button onClick={addExperience} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    + 추가
                </button>
            ) : (
                <>
                    {workExperiences.map((exp) => (
                        <div key={exp.id} className="border p-4 mb-4 rounded-lg shadow">
                            {/* 회사명, 직무 */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium">회사명 <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        value={exp.companyName}
                                        onChange={(e) => updateExperience(exp.id, "companyName", e.target.value)}
                                        className="w-full border p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">직무 <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        value={exp.jobTitle}
                                        onChange={(e) => updateExperience(exp.id, "jobTitle", e.target.value)}
                                        className="w-full border p-2 rounded"
                                    />
                                </div>
                            </div>

                            {/* 직급 */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium">직급 <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={exp.position}
                                    onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                                    className="w-full border p-2 rounded"
                                />
                            </div>

                            {/* 근무 기간 */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium">근무 기간 <span className="text-red-500">*</span></label>
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
                                        value={exp.endDate || ""}
                                        onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                                        className="border p-2 rounded"
                                        disabled={exp.isCurrent}
                                    />
                                </div>
                                <label className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        checked={exp.isCurrent}
                                        onChange={(e) => updateExperience(exp.id, "isCurrent", e.target.checked)}
                                        className="mr-2"
                                    />
                                    현재 근무중
                                </label>
                            </div>

                            {/* 업종 선택 */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium">회사업종 <span className="text-red-500">*</span></label>
                                <select
                                    value={exp.industry}
                                    onChange={(e) => updateExperience(exp.id, "industry", e.target.value)}
                                    className="w-full border p-2 rounded"
                                >
                                    <option value="">선택하세요</option>
                                    {industryCodes.map((industry) => (
                                        <option key={industry.id} value={industry.name}>
                                            {industry.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* 직종 선택 */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium">근무 직종 <span className="text-red-500">*</span></label>
                                <select
                                    value={exp.jobCategory}
                                    onChange={(e) => updateExperience(exp.id, "jobCategory", e.target.value)}
                                    className="w-full border p-2 rounded"
                                >
                                    <option value="">선택하세요</option>
                                    {jobCategoryCodes
                                        .filter((category) => category.parent_id !== 0)
                                        .map((category) => (
                                            <option key={category.id} value={category.name}>
                                                {category.name}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* 상세내용 */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium">상세내용</label>
                                <textarea
                                    value={exp.description}
                                    onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                                    className="w-full border p-2 rounded"
                                    rows={3}
                                />
                            </div>

                            {/* 삭제 버튼 */}
                            <div className="mt-4 flex justify-end gap-2">
                                <button onClick={() => removeExperience(exp.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                                    - 삭제
                                </button>
                            </div>
                        </div>
                    ))}

                    {workExperiences.length < MAX_EXPERIENCES && (
                        <button onClick={addExperience} className="px-4 py-2 bg-green-500 text-white rounded-md">
                            + 추가
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default WorkExperience;
