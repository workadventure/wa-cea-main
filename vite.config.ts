import 'dotenv/config';
import { defineConfig, PluginOption } from "vite";
import fs from "fs";
import { getMaps, getMapsOptimizers, getMapsScripts, LogLevel, OptimizeOptions } from "wa-map-optimizer-vite";

const maps = getMaps();

let optimizerOptions: OptimizeOptions = {
    logs: process.env.LOG_LEVEL && process.env.LOG_LEVEL in LogLevel ? LogLevel[process.env.LOG_LEVEL] : LogLevel.NORMAL,
};

if (process.env.TILESET_OPTIMIZATION && process.env.TILESET_OPTIMIZATION === "true") {
    const qualityMin = process.env.TILESET_OPTIMIZATION_QUALITY_MIN ? parseInt(process.env.TILESET_OPTIMIZATION_QUALITY_MIN) : 0.9;
    const qualityMax = process.env.TILESET_OPTIMIZATION_QUALITY_MAX ? parseInt(process.env.TILESET_OPTIMIZATION_QUALITY_MAX) : 1;

    optimizerOptions.output = {
        tileset: {
            compress: {
                quality: [qualityMin, qualityMax],
            }
        }
    }
}

// Get all file with the extension .wam
const getWamFiles = () => {
    let mapFiles: string[] = [];
    for (const file of fs.readdirSync(".")) {
        if (file.endsWith(".wam")) {
            mapFiles.push(file);
        }
    }
    return mapFiles;
}

// Option to copy all .wam files to the dist folder
const copyWamFiles = (path: string) => {
    const files = getWamFiles();
    files.forEach((file: string) => {
        fs.copyFileSync(`${file}`, `dist/${file}`);
    });
}

// Create a new plugin to copy all .wam files to the dist folder
const copyWamFilesPlugin = (): PluginOption => {
    return {
        name: 'copy-wam-files',
        apply: 'build',
        writeBundle() {
            copyWamFiles("src");
        }
    }
}


export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            input: {
                index: "./index.html",
                ...getMapsScripts(maps),
            },
        },
    },
    plugins: [
        ...getMapsOptimizers(maps, optimizerOptions),
        copyWamFilesPlugin(),
    ],
    server: {
        host: "localhost",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "Cache-Control": "no-cache, no-store, must-revalidate",
        },
        open: "/",
    },
});
