import revert from '../../code/string/lesson2'

test('revert', () => {
    expect(revert('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})