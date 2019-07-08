import { template } from "@babel/core";

export default str => {
    // 建立电话号码键盘映射
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

    // 把输入字符串按单字符分隔变成数组， 234 => [2,3,4]
    let num = str.split('')
    // 保存键盘映射后的字母内容， 23 => ['abc', 'def']
    let code = []
    num.forEach(item => {
        map[item] && code.push(map[item])
    })
    function comb(arr){
        let tmp = []
        for(var i=0, il=arr[0].length; i<il; i++){
            if(!arr[1]){
                tmp.push(`${arr[0][i]}`)
            }else {
                for(var j=0, jl=arr[1].length; j<jl; j++){
                    tmp.push(`${arr[0][i]}${arr[1][j]}`)
                }
            }
        }
        arr.splice(0, 2, tmp)
        if(arr.length > 1){
            return comb(arr)
        }else {
            return tmp
        }
    }
    return comb(code)
}