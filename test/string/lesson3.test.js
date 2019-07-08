import parseTelNumber from '../../code/string/lesson3'

test('parseTelNumber: 2', () => {
    expect(parseTelNumber('2')).toEqual(['a', 'b', 'c'])
})
test('parseTelNumber: 23', () => {
    expect(parseTelNumber('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})