import { analyzeMetafile, build, BuildOptions } from "esbuild";

const options: BuildOptions = {
    entryPoints: {
        main: "./src/main.ts",
    },
    outdir: "./dist",

    format: "cjs",
    platform: "node",
    target: "node18",

    bundle: true,
    minify: false,
    metafile: true,
};

(async () => {
    const { metafile } = await build(options);
    if (metafile) {
        const result = await analyzeMetafile(metafile);
        console.log(result);
    }
    console.log("finish");
})();
