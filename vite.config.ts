import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: true,
	},
	plugins: [react(), viteTsconfigPaths()],
});
