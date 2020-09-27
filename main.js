class MyString {

  reverse(str) {
    return str.split('').reverse().join('');
  }

  ucFirst(str) {
    return(str[0].toUpperCase() + str.slice(1));
  }

  ucWords(str) {
    let strArr = str.split(" ");
    let newArr = [];

    for (let i = 0; i < strArr.length; i++) {
      newArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    return newArr.join(' ');
  }
}

let str = new MyString();

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde')); 
















