export default str => {
    // 字符串按空格进行分割
    let arr = str.split(' ')
    let result = arr.map(item => {
        return item.split('').reverse().join('')
    })
    return result.join(' ')
}