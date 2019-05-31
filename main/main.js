module.exports = function main(num) {
    var str_num = num.toString();
    var len = str_num.length;
    var res="";
    var sig = [' ','...', '._.', '|.|','..|','._|','|..','|_.','|_|'];
    var arr = [[2,3,8],[1,4,4],[2,5,7],[2,5,5],[1,8,4],[2,7,5],[2,7,8],[2,4,4],[2,8,8],[2,8,4]];
    for(var i=0;i<3*len;i++){
        var row = 
        res = res + sig[arr[parseInt(str_num[i%len])][Number(i>=len)+Number(i>=2*len)+Number(i>=3*len)]];
        if(i%len==(len-1)){    res = res + '\n';}
        else{    res = res +' ';}
        
    }
    console.log(res);
    return res;
};
