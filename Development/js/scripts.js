// <!-- 👇🏻👇🏻التمرين الأول -->

// <!-- :قم ببناء الدوال الآتية  -->

// <!-- 1. logger():

// تأخذ مصفوفة
// تطبع كل قيمة من قيم المصفوفة في ال
// console -->

// let name = ["fatmah","nada","haya","nora"]

// function n(name){
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// }

// logger(name);


// another solution

// function logger(x){
// for (let i = 0; i< x.length; i++){
//         console.log(x[i]);
// }
// }
// logger(name);

// logger(array);



// // another solution


var index = 0; 
let array1 = [ 1, 2, 3, 4, 5, 6 ]; 
  
array1.forEach(myFunction); 
function myFunction(item, index) 
{ 
    console.log(item); 
}

// // <!-- 2. hottestDays():

// let num = 37
// let hot = ["38","37","39"]

// function hottestDays(num){
// if(num > hot[0]){
//     console.log("الحراره مرتفعه نسبيا")
// }
// else if (num == hot[1]){
//     console.log("الحراره طبيعيه")
// }
// else{
//     console.log("الحراره جدا عاليه")
// }
// }
// hottestDays();


// let temps1 =[20,30,50,60];
// let value = 40;
// let temps2 =[];

// function hottestDays(array,th, empty_array){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > th){
//             empty_array.push(array[i]);
//         }
//     }
// }
// hottestDays();




// تأخذ قيمتين: مصفوفة من درجات الحرارة وقيمة أولية
// ترجع مصفوفة تحتوي على كل درجة حرارة أكبر من القيمة المبدئية أو الأولية  -->

// <!-- 3. getBookById(bookId, books):

// let name = [
//  {a:"book1", bookId:"77"},
//  {a:"book2", bookId:"66"},
//  {a:"book3", bookId:"44"}
// ]
// search = (key, id2 ,inputArray) => {
//     for (let i=0; i < inputArray.length; i++) {
//         if (inputArray[i].a === key && inputArray[i].bookId === id2) {
//             return inputArray[i];
//         }
//     }
//   }
//  var book = prompt("book");
//  var id1  = prompt("bookId");

  
//   var resultObject = search(book, id1, name);
//   console.log(resultObject);



// bookId <= الخاص بكتاب IDتستلم محدد أو ال
// books  <= من الكتب objects تستلم مصفوفة من الكائنات أو
// IDالذي يطابق ال book objectترجع ال
// undefined ترجع الدالة كلمة ID إن لم يوجد كتاب مطابق لل -->

// <!-- 🔥بونص التمرين الأول -->
// <!-- for في بناء الدوال بدلاً من Array Iteration Methods استخدم -->

// <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->

// <!-- 👇🏻👇🏻التمرين الثاني -->

// <!-- في هذا التمرين، ستقوم ببناء برنامج لمساعدة محاسب في جمعية تعاونية
//      سيقوم المحاسب بإدخال السلع أو الأغراض المبتاعة
//      وفي النهاية سيتم طباعة الفاتورة عند إدخال كلمة انتهيت  -->

// <!-- ملاحظة: شاهد الفيديو — المرفق لتحصل على فكرة أوضح  -->

// <!-- :الخطوات -->

// <!-- تقوم بمراقبة القيمة المدخلة من قبل المستخدم while قم بإنشاء جملة -->
// <!-- عن العمل while لو أدخل المستخدم "انتهيت" بدلاً من السلعة الجديدة يتوقف كود -->
// <!-- قم بحفظ القيم المدخلة من المستخدم (اسم السلعة، الكمية، السعر) داخل كائن 
//      .وقم بإضافة كل كائن يدخله المستخدم إلى مصفوفة 
//      .هذه المصفوفة تتكون من كائنات وكل كائن يمثل سلعة -->
// <!-- for loop مر على جميع الكائنات داخل المصفوفة وقم بطباعة الفاتورة باستخدام -->

// <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->

let userInput ="";
let output = [];

userInput = prompt("السلعه");
while (userInput != "انتهيت"){
   
    // if (userInput == "انتهيت") break;
    let price = parseFloat(prompt("السعر"));
    let quantity = parseInt(prompt("الكميه"));

let object = { 
name: userInput,
price: price,
quantity: quantity,
};

output.push(object);


userInput = prompt("السلعه");
}




let totalPrice = 0
for (let i = 0 ; i < output.length ; i++){
    console.log(
        output[i].quantity +
         " " +
     output[i].name+
     " " + 
    output[i].quantity * output[i].price 
    );
    totalPrice +=  output[i].quantity * output[i].price 
}

console.log()
