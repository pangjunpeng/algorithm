import revertByWord from '../../code/string/lesson1'

test('revertWord:', () => {
    expect(revertByWord('let it go')).toBe('tel ti og')
})