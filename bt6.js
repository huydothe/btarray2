let str = ['-','-','V','0','i','e','-','-','-'];
for(let i=0; i<str.length; i++){
    if(str[i]== '-') {
        str.splice(1,1, '_')
    }
}document.write(str);
// let newStr = 'hello';
// newStr = newStr.replace('l', 'L');
// document.write(str);