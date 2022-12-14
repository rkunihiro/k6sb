import { createServer, IncomingMessage, ServerResponse } from "node:http";

function requestListener(req: IncomingMessage, res: ServerResponse) {
    const { method, url } = req;
    console.log(`${new Date().toISOString()} ${method} ${url}`);
    res.writeHead(200, "OK", {
        "Content-Type": "text/plain;charset=UTF-8",
        "Cache-Control": "no-store",
    }).write("ok", () => {
        res.end();
    });
}

export async function main(port = 3000) {
    return new Promise<void>((resolve, reject) => {
        const server = createServer(requestListener);
        server.on("close", () => {
            console.log(`server close`);
            resolve();
        });
        server.on("error", (err) => {
            console.log(`server error ${err}`);
            reject(err);
        });
        server.listen(port, () => {
            console.log(`start server http://localhost:${port}`);
        });
    });
}

if (require.main === module) {
    main();
}
