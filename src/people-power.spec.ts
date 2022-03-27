import {
    peoplePower,
    generateLines,
    generateLine
} from "./people-power";

describe("peoplePower", () => {
    let logToConsole;

    beforeEach(() => {
        logToConsole = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it.each([
        {start: 0, end: 1, expectedLinesCount: 2},
        {start: 10, end: 19, expectedLinesCount: 10},
        {start: 1, end: 100, expectedLinesCount: 100},
    ])("logs out the expected number of lines", ({start, end, expectedLinesCount}) => {
        const logToConsole = jest.spyOn(console, "log").mockImplementation(() => {});

        peoplePower(start, end);

        expect(logToConsole).toHaveBeenCalledTimes(expectedLinesCount);
    });

    it.each([
        {start: 0, end: NaN, expectedError: new Error("endLineNumber is not an integer")},
        {start: 0, end: 0.5, expectedError: new Error("endLineNumber is not an integer")},
        {start: 0, end: Infinity, expectedError: new Error("endLineNumber is not an integer")},
        {start: NaN, end: 1, expectedError: new Error("startLineNumber is not an integer")},
        {start: 0.5, end: 1, expectedError: new Error("startLineNumber is not an integer")},
        {start: Infinity, end: 1, expectedError: new Error("startLineNumber is not an integer")},
    ])("throws an error if start or end line is not an integer", ({start, end, expectedError}) => {
        expect(() => peoplePower(start, end)).toThrowError(expectedError);
    });

    it.each([
        {start: 0, end: 0},
        {start: 0, end: -1},
        {start: 10, end: 9},
    ])("throws an error if end line is greater than or equal to end line", ({start, end}) => {
        expect(() => peoplePower(start, end)).toThrowError(new Error("startLineNumber is greater than or equal to endLineNumber"));
    });
})

describe("generateLines", () => {
    it.each([
        {start: 0, end: 1, expectedLines: ["People Power", "1"]},
        {start: 10, end: 19, expectedLines: ["Power", "11", "People", "13", "14", "People Power", "16", "17", "People", "19"]},
    ])("generates the expected lines", ({start, end, expectedLines}) => {
        const lines = generateLines(start, end);

        expect(lines).toStrictEqual(expectedLines);
    });

    it.each([
        {start: 0, end: NaN, expectedError: new Error("endLineNumber is not an integer")},
        {start: 0, end: 0.5, expectedError: new Error("endLineNumber is not an integer")},
        {start: 0, end: Infinity, expectedError: new Error("endLineNumber is not an integer")},
        {start: NaN, end: 1, expectedError: new Error("startLineNumber is not an integer")},
        {start: 0.5, end: 1, expectedError: new Error("startLineNumber is not an integer")},
        {start: Infinity, end: 1, expectedError: new Error("startLineNumber is not an integer")},
    ])("throws an error if start or end line is not an integer", ({start, end, expectedError}) => {
        expect(() => generateLines(start, end)).toThrowError(expectedError);
    });

    it.each([
        {start: 0, end: 0},
        {start: 0, end: -1},
        {start: 10, end: 9},
    ])("throws an error if end line is greater than or equal to end line", ({start, end}) => {
        expect(() => generateLines(start, end)).toThrowError(new Error("startLineNumber is greater than or equal to endLineNumber"));
    });
})

describe("generateLine", () => {
    it.each([
        {lineNumber: -3, expectedLine: "People"},
        {lineNumber: -2, expectedLine: "-2"},
        {lineNumber: -1, expectedLine: "-1"},
        {lineNumber: 0, expectedLine: "People Power"},
        {lineNumber: 1, expectedLine: "1"},
        {lineNumber: 2, expectedLine: "2"},
        {lineNumber: 3, expectedLine: "People"},
        {lineNumber: 14, expectedLine: "14"},
        {lineNumber: 15, expectedLine: "People Power"},
        {lineNumber: 16, expectedLine: "16"},
    ])("generates the expected line", ({lineNumber, expectedLine}) => {
        const line = generateLine(lineNumber);

        expect(line).toStrictEqual(expectedLine);
    });

    it.each([
        {lineNumber: NaN},
        {lineNumber: 0.5},
        {lineNumber: Infinity}
    ])("throws an error if start or end line is not an integer", ({lineNumber}) => {
        expect(() => generateLine(lineNumber)).toThrowError(new Error("lineNumber is not an integer"));
    });
})