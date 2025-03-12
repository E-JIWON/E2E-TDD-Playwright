"use client";
interface ResumeUserInfoProps {
    personalInfo: {
        name: string;
        email: string;
        phoneCountryCode: string;
        phoneNumber: string;
        birthYear: string;
        gender: string;
    };
    setPersonalInfo: (info: any) => void;
}

const PersonalInfo = ({ personalInfo, setPersonalInfo }: ResumeUserInfoProps) => {
    const currentYear = new Date().getFullYear();
    const birthYears = Array.from({ length: 60 }, (_, i) => (currentYear - i).toString());
    const countryCodes = ["+82 (KR)", "+1 (US)", "+44 (UK)", "+81 (JP)", "+86 (CN)"];

    return (
        <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">개인정보 <span className="text-red-500">*</span></h2>

            {/* 이름 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">이름 <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    value={personalInfo.name}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                    className="w-full border p-2 rounded"
                    placeholder="이름을 입력하세요"
                />
            </div>

            {/* 이메일 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">이메일 <span className="text-red-500">*</span></label>
                <input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                    className="w-full border p-2 rounded"
                    placeholder="이메일을 입력하세요"
                />
            </div>

            {/* 연락처 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">연락처 <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                    <select
                        value={personalInfo.phoneCountryCode}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, phoneCountryCode: e.target.value })}
                        className="border p-2 rounded"
                    >
                        {countryCodes.map((code) => (
                            <option key={code} value={code}>
                                {code}
                            </option>
                        ))}
                    </select>
                    <input
                        type="tel"
                        value={personalInfo.phoneNumber}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })}
                        className="w-full border p-2 rounded"
                        placeholder="전화번호 입력"
                    />
                </div>
            </div>

            {/* 출생년도 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">출생년도<span className="text-red-500">*</span></label>
                <select
                    aria-label="출생년도" // ✅ `aria-label`을 사용하여 직접 검색 가능
                    value={personalInfo.birthYear}
                    onChange={(e) => setPersonalInfo({...personalInfo, birthYear: e.target.value})}
                    className="w-full border p-2 rounded"
                >
                    <option value="">선택하세요</option>
                    {birthYears.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            {/* 성별 */}
            <div className="mb-3">
                <label className="block text-sm font-medium">성별 <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={personalInfo.gender === "male" || personalInfo.gender === ""}
                            onChange={() => setPersonalInfo({...personalInfo, gender: "male"})}
                        />
                        남성
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={personalInfo.gender === "female"}
                            onChange={() => setPersonalInfo({ ...personalInfo, gender: "female" })}
                            className="mr-2"
                        />
                        여성
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;