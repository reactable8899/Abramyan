//Вывести первый элемент массива
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.first(arr))

//массив массивов
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.chunk(arr,2))

//получить только значения
// var arr = [1,5,67,undefined,false,1,5,67];
// console.log(_.compact(arr))

//удалить первый элемент
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.drop(arr,5))
// console.log(arr)

//удалить элементы справа
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.dropRight(arr,5))
// console.log(arr)

//удаление элементов по условию
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
//
// console.log(_.dropWhile(arr,function(item) {
//   return item < 10;
// }))
// console.log(arr)

//замена элементов
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.fill(arr,"hello"))
// console.log(arr)

//создание массива
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.fill(Array(6),7))
// console.log(arr)

//нахождение индекса
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.findIndex(arr,function(a) { return a === 3}))
// console.log(arr)

// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.indexOf(arr,1))

//удаление из массива
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.pull(arr,4))
// console.log(arr)

//соединение элементов массива
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.join(arr,"+"))

//перевернуть массив
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.reverse(arr))

//удаление с сохранением исходного массива
// var arr = [2,4,6,8,1,3,9,12,54,6,125]
// console.log(_.without(arr,2,4,6))
// console.log(arr)

//соединение массивов
// var a = [2,5,1];
// var b = ['a','b','c',]
// var c = [true,false,true]
//
// console.log(_.zip(a,b,c))

//разделение
// var a = [2,5,1];
// var b = ['a','b','c',]
// var c = [true,false,true]
// var zipped = _.zip(a,b,c)
// console.log(_.unzip(zipped))


// let study = {
//   name:"olim",
//   age: 19,
//   study: "msu",
//   sayhi() {
//     return this.name
//   }
// }
// var ko = study.sayhi()
// console.log(ko)
