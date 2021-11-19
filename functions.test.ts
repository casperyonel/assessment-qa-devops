const {shuffleArray} = require('./utils')

const {bots} = require('./data.js')

describe('shuffleArray should', () => {
    // test("Whether or not shuffleArray returns an array", () => {
    //     let answerArray = shuffleArray(bots)
    //     expect(typeof answerArray).toBe("array")
    // })
    test("Whether or not shuffleArray returns an array", () => {
        let answerArray = shuffleArray(bots)
        expect(bots).not.toBe(answerArray)
    })
    test("The length of the array", () => {
        let answerArray = shuffleArray(bots)
        expect(answerArray.length).toBe(bots.length)
    })
})
