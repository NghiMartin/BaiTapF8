// 1.Element
// 2.Attribute
// 3.Text

//innerText , textContent

//getter

// setter 
var headingElement = document.querySelector('.heading');

console.log(headingElement.textContent = 'hello1');
console.log(headingElement.innerText = 'hello2');


//textContent : cơ bản là nó lấy tất cả textnode có trong element được lấy, có nghĩa là:
// cho dù mình có dùng css ẩn chữ trong thẻ, textContent nó đều lấy ra hết mà ko cần biết có ảnh hưởng hay ko, lấy cả khoảng cách nhé!

// innerText: thèn này thì lấy những gì nó hiển thị mà bạn thấy.

// Và 2 thèn này không thể thêm thẻ vào nội dung được như thèn innerHTML

headingElement.textContent = '<h1>hello</h1>'; // như ri là nó in ra luôn '<h1>hello</h1>'

headingElement.textContent = ` 

<h1>hello</h1>

`;

// ở innerText: nếu có khoảng cách trong textnode thì nó sẽ hiển thị thẻ <br> ở chỗ xuống dòng trong textnode ở phần element khi ấn F12.
// ở textContent: chả cần biết khoảng cách, nó hiển thị ở element trong F12 là khoảng cách luôn.