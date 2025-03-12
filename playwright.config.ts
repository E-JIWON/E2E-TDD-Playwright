import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
    testDir: "./e2e", // 테스트 파일 위치 패턴
    fullyParallel: true, // 테스트 실행자가 사용할 최대 시간 (밀리초 단위)
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0, // 실패한 테스트만 재실행할지 여부
    workers: process.env.CI ? 1 : undefined, // 병렬 실행할 프로세스 수
    reporter: "html", // 테스트 실행 결과 리포터
    use: {
        trace: "on-first-retry", // 모든 테스트에서 자동 스크린샷 (실패 시)
        ignoreHTTPSErrors: true, // 네트워크 요청 모니터링
    },
    // 프로젝트 설정 (테스트 실행 환경)
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },

        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },

        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
    ],

    // 테스트를 실행하기 전 웹 서버 시작
    webServer: {
        command: "yarn dev",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
    },
})
