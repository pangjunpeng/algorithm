export default s => {
    let res = []
    for(let i = 0, len = s.length - 1; i < len; i++){
        let r = match(s.slice(i))
        if(r){
            res.push(r)
        }
    }
    function match(str){
        let p = str.match(/^(0+|1+)/)[0]
        let q = (p[0]^1).toString().repeat(p.length)
        let reg = new RegExp(`^(${p}${q})`)
        if(reg.test(str)){
            return RegExp.$1
        }
    }
    return res
}