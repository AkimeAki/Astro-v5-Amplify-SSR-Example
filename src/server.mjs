import { createServer } from "node:http";
import { handler as astroHandler } from "./entry.mjs";

createServer((req, res) => {
	try {
		res.on("error", (err) => {
			console.error("❌ レスポンスストリームでエラーが発生しました。", err);
		});

		astroHandler(req, res);
	} catch (e) {
		console.error("❌ AstroのSSRでエラーが発生しました。", e);

		if (!res.headersSent) {
			res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
			res.end("サーバーでエラーが発生しました。");
		}
	}
}).listen("3000", () => {
	console.log("🚀 ポート3000でサーバーが起動しました。");
});
