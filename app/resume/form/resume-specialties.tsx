"use client";

interface SpecialSkillsProps {
    skills: string[];
    setSkills: (skills: string[]) => void;
    certificates: string[];
    setCertificates: (certificates: string[]) => void;
    extracurricular: string[];
    setExtracurricular: (activities: string[]) => void;
}

const MAX_ITEMS = 5;

const SpecialSkills = ({ skills, setSkills, certificates, setCertificates, extracurricular, setExtracurricular }: SpecialSkillsProps) => {
    const addItem = (type: "skills" | "certificates" | "extracurricular") => {
        const setter = type === "skills" ? setSkills : type === "certificates" ? setCertificates : setExtracurricular;
        const list = type === "skills" ? skills : type === "certificates" ? certificates : extracurricular;

        if (list.length < MAX_ITEMS) {
            setter([...list, ""]);
        }
    };

    const removeItem = (type: "skills" | "certificates" | "extracurricular", index: number) => {
        const setter = type === "skills" ? setSkills : type === "certificates" ? setCertificates : setExtracurricular;
        const list = type === "skills" ? skills : type === "certificates" ? certificates : extracurricular;

        if (list.length === 1) {
            setter([""]); // 최소 1개 유지
        } else {
            setter(list.filter((_, i) => i !== index));
        }
    };

    const updateItem = (type: "skills" | "certificates" | "extracurricular", index: number, value: string) => {
        const setter = type === "skills" ? setSkills : type === "certificates" ? setCertificates : setExtracurricular;
        const list = type === "skills" ? skills : type === "certificates" ? certificates : extracurricular;

        setter(list.map((item, i) => (i === index ? value : item)));
    };

    return (
        <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">특기사항</h2>

            {/* 특기 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">특기</label>
                {skills.map((skill, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                        <input
                            type="text"
                            value={skill}
                            onChange={(e) => updateItem("skills", index, e.target.value)}
                            className="w-full border p-2 rounded"
                            placeholder="예: 디자인, 코딩 등"
                        />
                        {skills.length > 1 && (
                            <button onClick={() => removeItem("skills", index)} className="px-2 bg-red-500 text-white rounded">-</button>
                        )}
                    </div>
                ))}
                {skills.length < MAX_ITEMS && (
                    <button onClick={() => addItem("skills")} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
                        + 추가
                    </button>
                )}
            </div>

            {/* 자격증 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">자격증</label>
                {certificates.map((certificate, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                        <input
                            type="text"
                            value={certificate}
                            onChange={(e) => updateItem("certificates", index, e.target.value)}
                            className="w-full border p-2 rounded"
                            placeholder="예: 정보처리기사"
                        />
                        {certificates.length > 1 && (
                            <button onClick={() => removeItem("certificates", index)} className="px-2 bg-red-500 text-white rounded">-</button>
                        )}
                    </div>
                ))}
                {certificates.length < MAX_ITEMS && (
                    <button onClick={() => addItem("certificates")} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
                        + 추가
                    </button>
                )}
            </div>

            {/* 과외, 단체활동 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">과외, 단체활동</label>
                {extracurricular.map((activity, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                        <input
                            type="text"
                            value={activity}
                            onChange={(e) => updateItem("extracurricular", index, e.target.value)}
                            className="w-full border p-2 rounded"
                            placeholder="예: 동아리, 프로젝트 참여"
                        />
                        {extracurricular.length > 1 && (
                            <button onClick={() => removeItem("extracurricular", index)} className="px-2 bg-red-500 text-white rounded">-</button>
                        )}
                    </div>
                ))}
                {extracurricular.length < MAX_ITEMS && (
                    <button onClick={() => addItem("extracurricular")} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
                        + 추가
                    </button>
                )}
            </div>
        </div>
    );
};

export default SpecialSkills;
