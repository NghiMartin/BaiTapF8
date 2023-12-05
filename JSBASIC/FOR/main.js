/* ARRAY METHODS:

Array methods:
    forEach(): duyệt qua tất cả phần tử, sử dụng cơ bản
    every() :sử dụng cho bài toán kiểm tra tất cả  phải thoả mãn 1 điều kiện, every trả về là 1 true fasle
    some() : ngược lại ở trên là sử dụng để ktra tất cả chỉ cần thoả mãn 1 điều kiện, nó sẽ trả về fasle
    find() : lặp qua, trả về cái phần tử được tìm thấy thoả mãn điều kiện(có thể tìm kiếm theo tên, hoặc id, sdt ...) TRẢ VỀ chỉ 1 phần tử thôi nhé
    filter() : giống find nhưng trả về tất cả phần tử được tìm thấy
    map() : trả về một arr, trong function truyền vào return cái gì thì nó trả về phần tử đó lưu vào mảng đó
    reduce(): 
*/


//LƯU Ý :   every(), some() ,find() , filter()  4 thèn này phải return lại, thường dùng để ktra blabla...

var users = [{
    id: 1,
    name : 'Son Dang',
    age: 19,
    address: "HaNoi,VN",
   
},
{
    id: 2,
    name : 'Son Dang',
    age: 20,
    address: "QN,VN",
   
},
{
    id: 3,
    name : 'Son Dang',
    age: 19,
    address: "DN,VN",
   
},
{
    id: 4,
    name : 'Son Dang',
    age: 19,
    address: "HaNoi,VN",
   
},
{
    id: 5,
    name : 'Son Dang',
    age: 19,
    address: "HaNoi,VN",
   
}
]


// Nói về map nè
var funcId = function(user) {
    return user.id;
}
var newUser = users.map(funcId); // nếu không truyền vào function nó sẽ báo lỗi, thèn reduce cũng thế nhá để viết ở dướI
console.log(newUser); // ouput  [1, 2, 3, 4, 5]
//Nói chung user trong func là tham số duyệt qua mảng, ưng làm gì làm vớI nó, nếu không return thì nó chả có gì để output
// Thường dùng vô bài toán kiểu xử lí để return lại nhiều html để hiển thị á
function userHandler (user) {
    return `<h2> ${user.name} </h2>`;
}
var newUser1 = users.map(userHandler);
const content = document.getElementsByClassName('.content');
console.log(newUser1); // ouput  ['<h2> Son Dang </h2>', '<h2> Son Dang </h2>', '<h2> Son Dang </h2>', '<h2> Son Dang </h2>', '<h2> Son Dang </h2>']

// Nói về reduce nè
//Biến lưu trữ: accumulator
// Thực hiện việc lưu trữ
var i = 0;
function idHandler(accumulator, curentValue, currentIndex, originArray){ //curentValue: giá trị hiện tại đang duyệt qua của mảng
    //currentIndex: vị trí của phần tử đang duyệt qua mảng
    //originArray: cái mảng mà mình đang xử lí duyệt qua nè   
    i++;
    console.table({
        'Lượt chạy: ' : i,
        'Biến tích trữ: ' : accumulator
    });
    return accumulator + curentValue.id; // cộng dồn lên cái id thì ra idTotal
} 

var totalId = users.reduce(idHandler, 0); // 0 nó không bắt buộc, còn được gọi là intial value(giá trị khởi tạo) nhưng không phải bài nào cũng bỏ nó ra được nhá!
// Bạn truyền giá trị khởi tạo là gì thì cái lưu trữ nó lưu lại cũng là giá trị kiểu dữ liệu đó
var totalId = users.reduce((a,b) => a +b.id, 0); // code arrow func ES6 thì hắn ngắn như ri luôn.

// Bài toán không cần truyền intial value

//Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1,2,[3,4], 5,6,[7,8,9]];

var flatArray = depthArray.reduce(function(flatOutput,depthItem){
    return flatOutput.concat(depthItem);  // mảng nối mảng
},[]);

console.log(flatArray);




