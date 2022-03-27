export const peoplePower = (startLineNumber: number, endLineNumber: number) => {
    if (!Number.isInteger(startLineNumber)) throw new Error("startLineNumber is not an integer");
    if (!Number.isInteger(endLineNumber)) throw new Error("endLineNumber is not an integer");
    if (startLineNumber >= endLineNumber) throw new Error("startLineNumber is greater than or equal to endLineNumber");

    const lines = generateLines(startLineNumber, endLineNumber);
    lines.forEach(line => console.log(line));
}

export const generateLines = (startLineNumber: number, endLineNumber: number): string[] => {
    if (!Number.isInteger(startLineNumber)) throw new Error("startLineNumber is not an integer");
    if (!Number.isInteger(endLineNumber)) throw new Error("endLineNumber is not an integer");
    if (startLineNumber >= endLineNumber) throw new Error("startLineNumber is greater than or equal to endLineNumber");
    const lines: string[] = [];

    for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
        const line = generateLine(lineNumber);
        lines.push(line);
    }

    return lines;
}

export const generateLine = (lineNumber: number): string => {
    if (!Number.isInteger(lineNumber)) throw new Error("lineNumber is not an integer");
    const TEXT = {
        PEOPLE: "People",
        POWER: "Power",
        PEOPLE_POWER: "People Power"
    };

    if (lineNumber % (3 * 5) === 0) return TEXT.PEOPLE_POWER
    else if (lineNumber % 3 === 0) return TEXT.PEOPLE
    else if (lineNumber % 5 === 0) return TEXT.POWER
    else return String(lineNumber);
}

// Called directly
if (require.main === module) {
    const LINE_NUMBER = {
        START: 1,
        END: 100,
    };

    peoplePower(LINE_NUMBER.START, LINE_NUMBER.END);
}