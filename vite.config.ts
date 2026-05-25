import { defineConfig } from "vite";

/**
 * GitHub Pages는 프로젝트 사이트를 `/저장소이름/` 경로에서 제공합니다.
 * Vite의 base를 맞춰야 빌드된 CSS/JS 파일 경로가 배포 환경에서도 깨지지 않습니다.
 */
export default defineConfig({
  base: process.env.VERCEL === "1" ? "/" : "/Pokemon-sticker-collection/",
  server: {
    allowedHosts: [".lhr.life", ".loca.lt"]
  }
});
