
import * as utils from "./MusicGenerator.utils";

describe("utils correctly extracts header data from header", () => {
    describe("all valid headers pass", () => {
        test("valid header", () => {
            let header = " Star light  \n  Mu se \n unit 4 upm 260 beat 8";
            let extracted = utils.extractHeader(header);
            expect(extracted).toEqual({
                author: "Mu se",
                title: "Star light",
                unit: 4,
                upm: 260,
                beat: 8
            });
        });

        test("valid header with differenly ordered modifiers", () => {
            let header = " Star light \n   Mu se   \t \n upm 260 beat 16  unit 4  ";
            let extracted = utils.extractHeader(header);
            expect(extracted).toEqual({
                author: "Mu se",
                title: "Star light",
                unit: 4,
                upm: 260,
                beat: 16
            });
        });
    });

    describe("invalid headers are detected", () => {
        test("missing author", () => {
            let header = "\nMu se \n unit 4 upm 260 beat 8"
            expect(() => {
                utils.extractHeader(header);
            }).toThrow();
        });

        test("missing title", () => {
            let header = " Star light   \t \n  unit 4 upm 260 beat 8  ";
            expect(() => {
                utils.extractHeader(header);
            }).toThrow();
        });

        test("missing modifier", () => {
            let header = " Star light  \n  Mu se \n unit 4 upm 260 beat ";
            expect(() => {
                utils.extractHeader(header);
            }).toThrow();
        });

        test("modifiers out of order", () => {
            let header = " Star light \n   Mu se \n unit upm 4 260 beat 8  ";
            expect(() => {
                utils.extractHeader(header);
            }).toThrow();
        });
    });
});