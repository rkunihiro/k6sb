import { check, sleep } from "k6";
import { get } from "k6/http";

const url = __ENV["TARGET_URL"] ? __ENV["TARGET_URL"] : "http://localhost:3000/";

/** @type {import("k6/options").Options} */
export const options = {
    scenarios: {
        default: {
            executor: "constant-vus",
            vus: 1000,
            duration: "60s",
        },
    },
};

export default function test() {
    const res = get(url);
    check(res, {
        "status:200": (res) => {
            return res.status === 200;
        },
        "body:'ok'": (res) => {
            return res.body === "ok";
        },
    });
    sleep(1);
}
