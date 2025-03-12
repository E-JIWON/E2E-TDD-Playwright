import Link from 'next/link'

export default function Page() {
  return (
      <div className="h-screen flex flex-col items-center justify-center">
        <Link href="/resume">이력서 정보</Link>
      </div>
  )
}