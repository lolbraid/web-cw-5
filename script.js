// الكلاس وورك 1
/*
alert('عبد العزيز ياسر');
console.log(17);
// change log color
console.warn('أنا في الصف 12');
// جافاسكربت ليست جافا
*/

// classwork 2
/*
let budget = 20; 
console.info(80 >= budget && budget >= 30)
console.log('---------------------------------------------------------')
budget += 30
console.info(80 >= budget && budget >= 30)
*/

// classwork 3
const grade = parseInt(prompt("قم بادخال درجتك:"));
/*
if (grade > 100) {
    alert('لا تستهبل حط درجتك لا تحاتي ما في حد رح يعرفها😂')
}else if (grade >= 90) {
    alert('لقد حصلت على امتياز 🥳')
}else if (grade >= 80) {
    alert('لقد حصلت على جيد جداً🤩')
}else if (grade >= 70) {
    alert('لقد حصلت على جيد🙂')
}else if (grade >= 60) {
    alert('لقد حصلت على مقبول😕')
}else if (grade >= 50) {
    alert('لقد حصلت على ضعيف☹️')
}else {
    alert('راسب💔')
}
*/

// classwork 3 SWITCH
switch (true) {
  case grade > 100:
    alert("لا تستهبل حط درجتك لا تحاتي ما في حد رح يعرفها😂");
  break;
  case grade >= 90:
    alert("لقد حصلت على امتياز 🥳");
    break;
  case grade >= 80:
    alert('لقد حصلت على جيد جداً🤩')
    break;
  case grade >= 70:
    alert('لقد حصلت على جيد🙂')
    break;
  case grade >= 60:
    alert('لقد حصلت على مقبول😕')
    break;
  case grade >= 50:
    alert('لقد حصلت على ضعيف☹️')
    break;
  default:
    alert('راسب💔')
}
