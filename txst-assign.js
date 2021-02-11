'use strict'

function createSquareBoard (sideLength) {
  const checkerboard = []
  for (let i = 0; i < sideLength; i++) {
    const row = []
    for (let i = 0; i < sideLength; i++) {
      row.push(placeRandomChecker())
    }
    checkerboard.push(row)
  }
  return checkerboard
}

function placeRandomChecker () {
  const checker = ['r', 'b', ' ']
  return checker[Math.floor(Math.random() * checker.length)]
}

function getColumn (board, col) {
  return board.map(value => value[col])
}

function getDiagonally (board, up = false) {
  const checkerboard = board
  const length = checkerboard.length
  const total = []
  for (let i = 0; i <= 2 * (length - 1); ++i) {
    const temp = []
    for (let j = length - 1; j >= 0; --j) {
      const x = up ? i - (length - j) : i - j
      x >= 0 && x < length && temp.push(checkerboard[j][x])
    }
    total.push(check(temp))
  }
  return total.reduce((prev, current) => current + prev, 0)
}

function check (arr) {
  let total = 0
  const amt = arr.map((checker, i, arr) => {
    // if spot is empty - return total
    if (checker === ' ') return total
    // if current checker matches previous checker
    // add 1 to total, return
    // else
    // total = 0
    return checker === arr[i - 1]
      ? (total = total + 1)
      : (total = total - total)
  })

  // if there is 4 and only 4 in a row
  if (amt.includes(3) && !amt.includes(4)) return 1
  else return 0
}

function checkBoard (board) {
  const checkerboard = board

  const diagonalDownTotal = getDiagonally(checkerboard)
  const diagonalUpTotal = getDiagonally(checkerboard, true)

  const total = checkerboard.map((row, i) => {
    const columnTotal = check(getColumn(checkerboard, i))
    const rowTotal = check(row)
    return columnTotal + rowTotal
  })
  return (
    total.reduce((prev, current) => current + prev, 0) +
    diagonalDownTotal +
    diagonalUpTotal
  )
}

const filledBoard = createSquareBoard(8)
const connect4total = checkBoard(filledBoard)

console.log(filledBoard)
console.log('4 in a row:', connect4total)

module.exports = {
  createSquareBoard,
  placeRandomChecker,
  getColumn,
  getDiagonally,
  check,
  checkBoard
}
