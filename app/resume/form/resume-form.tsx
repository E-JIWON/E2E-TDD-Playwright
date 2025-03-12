"use client";
import { useState } from "react";
import ResumeKeyword from "@/app/resume/form/resume-keyword";
import JobPreferences from "@/app/resume/form/resume-condition";
import WorkExperience from "@/app/resume/form/resume-career-list";
import Education from "@/app/resume/form/resume-school";
import LanguageSkills from "@/app/resume/form/resume-test";
import OverseasExperience from "@/app/resume/form/resume-stay";
import SpecialSkills from "@/app/resume/form/resume-specialties";
import PersonalInfo from "@/app/resume/form/resume-user-info";

export default function ResumeForm() {
    const [keyword, setKeyword] = useState("");
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        email: "",
        phoneCountryCode: "+82 (KR)",
        phoneNumber: "",
        birthYear: "",
        gender: "",
    });

    const [showFullForm, setShowFullForm] = useState(false);

    const handleSubmit = () => {
        alert("추가 내용을 입력해주세요");
        setShowFullForm(true);
    };

    const [jobPreferences, setJobPreferences] = useState({
        careerLevel: "학생/신입(2년이내)",
        desiredPosition: "",
        desiredSalary: "",
        possibleWorkDate: "즉시",
    });
    const [workExperiences, setWorkExperiences] = useState([]);
    const [highSchool, setHighSchool] = useState("");
    const [universityList, setUniversityList] = useState([]);
    const [languageSkills, setLanguageSkills] = useState([]);
    const [overseasExperiences, setOverseasExperiences] = useState([]);
    const [skills, setSkills] = useState([""]);
    const [certificates, setCertificates] = useState([""]);
    const [extracurricular, setExtracurricular] = useState([""]);
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">이력서 작성</h1>
            {/* 이력서 키워드 섹션 */}
            <ResumeKeyword keyword={keyword} setKeyword={setKeyword} />
            {/* 개인정보 섹션 */}
            <div className="mt-6">
                <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            </div>

            {/* "전송" 버튼 */}
            {!showFullForm && (
                <div className="mt-6 text-center">
                    <button onClick={handleSubmit} className="px-6 py-3 bg-blue-500 text-white rounded-md">
                        전송
                    </button>
                </div>
            )}
            {
                showFullForm && (
                    <>
                        {/* 희망 취업 조건 섹션 */}
                        <div className="mt-6">
                            <JobPreferences jobPreferences={jobPreferences} setJobPreferences={setJobPreferences} />
                        </div>
                        {/* 경력사항 섹션 */}
                        <div className="mt-6">
                            <WorkExperience workExperiences={workExperiences} setWorkExperiences={setWorkExperiences} />
                        </div>
                        {/* 학력사항 섹션 */}
                        <div className="mt-6">
                            <Education
                                highSchool={highSchool}
                                setHighSchool={setHighSchool}
                                universityList={universityList}
                                setUniversityList={setUniversityList}
                            />
                        </div>
                        {/* 어학 능력 섹션 */}
                        <div className="mt-6">
                            <LanguageSkills languageSkills={languageSkills} setLanguageSkills={setLanguageSkills} />
                        </div>

                        {/* 해외연수 및 체류 경험 섹션 */}
                        <div className="mt-6">
                            <OverseasExperience overseasExperiences={overseasExperiences} setOverseasExperiences={setOverseasExperiences} />
                        </div>

                        {/* 특기사항 섹션 */}
                        <div className="mt-6">
                            <SpecialSkills
                                skills={skills}
                                setSkills={setSkills}
                                certificates={certificates}
                                setCertificates={setCertificates}
                                extracurricular={extracurricular}
                                setExtracurricular={setExtracurricular}
                            />
                        </div>
                    </>
                )
            }



        </div>
    );
}