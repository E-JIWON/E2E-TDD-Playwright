import Link from "next/link";
import ResumeForm from "@/app/resume/form/resume-form";

export default function Page() {
    return <div className="flex flex-col">
        <Link href="/">Home</Link>
        <ResumeForm/>
    </div>
}