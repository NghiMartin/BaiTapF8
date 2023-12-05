var emailKey = 'email';

var myInfo = {
    name : 'Son Dang',
    age: 19,
    address: "HaNoi,VN",
    [emailKey]: 'sondn@fullstack.edu.vn' ,
    _getName : function () {
        return this.name;
    }, 
}

// tại sao dùng this.name : thực chất dùng như này để mỗi khi đổi ob myInfo thành 1 tên khác thì phải đổi toàn bộ à, nên dùng this cho chắc hi
// phuong thuc:method
//thuoc tinh: property





//Constructor: mô tả thiết kế đối tượng

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function ()  {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Son','Dang','AVATAR');
var user = new User('Son','Dang','AVATAR');
// Có thể thêm prototype cho object bằng cách:
author.title = "Chia sẻ dạo tại F8";
user.comment = 'Lieu co khoa asp.net khong ad :>';
console.log(author);
console.log(user);


// Chốt lại constructor mục đích để thiết kế một đối tượng, 
//khi gọi một đối tượng mới chỉ cần new object chứ không phải viết lại mắc công


// OBJECT PROTOTYPE: sử dụng để thêm một phương thức
//Nhưng khác cái ở trên là phải khai báo kiểu: 
User.prototype.className = "F8"; 

author.className = "F10"; // ghi đè lên className
console.log(author.className);




// OBJECT DATE

var date = new Date(); // typeof: object
var date = Date(); // typeof:string

console.log(date);


var year = date.getFullYear();
var month = date.getMonth() +1; // cai nay tu 0-11
var day = date.getDate();
var hours = date.getHours();
var m = date.getMinutes();
var sc = date.getSeconds();

console.log(`&{year} / &{month} / &{day}`);
