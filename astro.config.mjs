import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import node from "@astrojs/node";
import moveServerFile from "./src/integrations/move-server-file";

const localPort = 54321;

// https://astro.build/config
export default defineConfig({
	server: {
		port: process.env.NODE_ENV === "production" ? 3000 : localPort
	},
	trailingSlash: "never",
	integrations: [sitemap(), react(), moveServerFile()],
	build: {
		format: "file"
	},
	output: "static",
	vite: {
		define: {
			global: "window",
			"process.env.API_KEY": JSON.stringify(process.env.API_KEY)
		}
	},
	adapter: node({
		mode: "middleware"
	})
});
