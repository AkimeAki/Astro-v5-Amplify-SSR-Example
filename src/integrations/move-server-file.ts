import type { AstroIntegration } from "astro";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export default function moveServerFile(): AstroIntegration {
	return {
		name: "astro-move-server-file",
		hooks: {
			"astro:build:done": async ({ dir, logger }) => {
				const sourceFileRelative = "src/server.mjs";
				const projectRoot = process.cwd();
				const sourcePath = path.join(projectRoot, sourceFileRelative);
				const destDir = path.join(fileURLToPath(dir), "../server");
				const destPath = path.join(destDir, "server.mjs");

				try {
					await fs.access(sourcePath);
					await fs.mkdir(destDir, { recursive: true });
					await fs.copyFile(sourcePath, destPath);
					logger.info(`✅ ${sourceFileRelative} を dist/server/server.mjs にコピーしました。`);
				} catch (e) {
					logger.error("❌ 失敗しました。：");
					logger.error(String(e));
				}
			}
		}
	};
}
