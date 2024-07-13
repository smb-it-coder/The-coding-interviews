function reverStr(str : string) : string {
    let strReverse = "";
    let strArr : string[] = str.split("");
    strReverse = strArr.reverse().join("");

    return strReverse;

}


const str: string = "Hello World!";

console.log(reverStr(str));