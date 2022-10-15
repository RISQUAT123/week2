let challenge = ' 30 Days Of Javascript '
let sites = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
let string = '30 Days Of '
let num = '10'
let numInt = parseInt(num)
let num1 = '9.8'
let num1Float = parseFloat(num1)
let string1 = 'Python'
let string2 = 'jargon'
let string3 = 'i hope this course is not full of jargon'
let sentence2 = 'Love is the best thing in this world.Some found love and some are still looking for love.'
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!?%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence4 ='I am a teacher and i love teaching;. There is nothing; as more rewarding as educating and empowering people. ;I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30 Days of Javascript is also the result of love of teaching' 
let regEx = /\d+/g
let text = 'He earsn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx1 = /\d+/g
let a = 5000
let b = 10000
let c = 15000
let d = a + b + c
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 3))
console.log(challenge.substr(3, 19))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
console.log(sites.split(','))
console.log(sites.split())
console.log(challenge.replace('30 Days Of Javascript', '30 Days Of Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
console.log(challenge.trim(' '))
console.log(challenge.startsWith(' 30 Days Of Javascript'))
console.log(challenge.endsWith(' 30 Days Of Javascript '))
console.log(challenge.match('a'))
console.log(string.concat('Javascript'))
console.log(challenge.repeat(2))
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity,it is about love. Charity and love are the same -- with charity you give love,so dont just give money but reach out your hand instead.")
console.log(typeof num)
console.log(numInt)
console.log(num1Float)
console.log(num1Float.toFixed(0))
console.log(string1.includes('on'))
console.log(string2.includes('on'))
console.log(string3.includes('jargon'))
console.log(Math.floor(Math.random() * 100))
console.log(Math.floor(Math.random() * 100) + 50)
console.log(Math.floor(Math.random() * 255))
console.log(Math.random('Javascript'))
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')
console.log(sentence.substr(30, 24))
console.log(sentence2.match('love'))
console.log(sentence.match('because'))
console.log(sentence3.replace('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!?%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching', 'I am a teacher and i love teaching;. There is nothing; as more rewarding as educating and empowering people. ;I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30 Days of Javascript is also the result of love of teaching'))
console.log(sentence4.match(regEx))
console.log(sentence4.match(/\d+/g))
console.log(text.match(regEx1))
console.log(text.match(/\d+/g))
console.log(d)
