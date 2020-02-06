/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
import fs from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        let personName: string = "Jóska Pista";
        let pesronDepartment: string = "Jedlik";
        res.write(`${personName} ide jár: ${pesronDepartment}`);
        //string

        let isHetvege: boolean = false;
        res.write(`\nHétvége van-e: ${isHetvege} \n`);
        //boolean

        let fruits: string[] = ["Barack", "Szilva", "Körte"];
        for (let index = 0; index < fruits.length; index++) {
            res.write(`${fruits[index]} `);
        }
        //array

        let personAge: number = 17;
        let person: [string, string, number] = [personName, pesronDepartment, personAge];
        res.write(`\nTuple: ${person}`);
        //tuple

        enum Autok {
            Lada = 1,
            Traban = 2,
            Warburg = 3,
            Skoda = 4
        }

        res.write(`\nAz auto Indexe: ${Autok.Lada}`);
        //enum

        let szovegVagySzam: string | number;
        szovegVagySzam = "ABC";
        res.write(`\n${szovegVagySzam} `);
        szovegVagySzam = 123;
        res.write(`${szovegVagySzam}`);
        //union

        let valami: any = "Hello World!";
        res.write(`\nValami: ${valami} `);
        valami = 23;
        res.write(`${valami} `);
        valami = true;
        res.write(`${valami} `);
        //any

        function sayHi(): void {
            res.write("Hello");
        }
        sayHi();

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
