import * as rc from "react-dom/server";
import Contactus from "./src/components/contactus/Contactus";
import * as fs from "fs";

const html = rc.renderToString(Contactus());

fs.writeFileSync("./html", html, { encoding: "utf-8" });
