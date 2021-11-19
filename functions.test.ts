const {shuffleArray} = require('./utils')

const {bots} = require('./data.js')

describe('shuffleArray should', () => {
    test("Testing to see if shuffleArray actually shuffled the array", () => {
        let input = [1, 2, 3, 4, 5]
        let answerArray = shuffleArray(input)
        expect(answerArray.join('')).not.toBe(input.join(''))
    })
    test("The length of the array thats returned is similar in length to input array", () => {
        let answerArray = shuffleArray(bots)
        expect(answerArray.length).toBe(bots.length)
    })
})