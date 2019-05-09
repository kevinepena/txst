const { createSquareBoard, placeRandomChecker, getColumn, getDiagonally, check, checkBoard } = require('../txst-assign');

const sideLength = 8;
const checkerBoard = createSquareBoard(sideLength);

describe('createBoard', () => {
    it('reders 8 x 8 grid', () => {
        expect(checkerBoard).toHaveLength(sideLength);
        expect(checkerBoard.map(col => col)).toHaveLength(sideLength);
    });
});

describe('placeRandomChecker', () => {
    it('returns random red, black or blank', () => {
        const possibleCheckers = ['r', 'b', ' '];
        expect(possibleCheckers).toContainEqual(placeRandomChecker())
    });
});

describe('getColum', () => {
    it('returns column that equals length', () => {
        checkerBoard.map((row, i) => expect(getColumn(checkerBoard, i)).toHaveLength(sideLength))
    });
});

describe('getDiagonally', () => {
    it('return int >= 0', () => {
        expect(getDiagonally(checkerBoard)).toBeGreaterThanOrEqual(0);
        expect(getDiagonally(checkerBoard, true)).toBeGreaterThanOrEqual(0);
    });
});

describe('check', () => {
    it('returns int >= 0', () => {
        checkerBoard.map(row => expect(check(row)).toBeGreaterThanOrEqual(0))
    });
});

describe('checkBoard', () => {
    it('returns int >= 0', () => {
        expect(checkBoard(checkerBoard)).toBeGreaterThanOrEqual(0);
    })
})
