
// HTML DOM

// 1.Element: ID, class, tag   -- Root element"<html></html>"
//CSS selector:phần tử, HTML Collection: như là 1 array
// 2.Attribute    --ex: "href"
// 3.Text

// document đại diện cho toàn bộ website.
// muốn truy xuất từng phần tử nhỏ đều phải đi qua document.

document.write('HELLO GUYS!') // hiển thị sau phần tử cuối cùng trong body

var headingNode = document.getElementById('heading');

var listItemNodes = document.querySelectorAll('.box-1 li'); 

var boxNode = document.querySelector('.box-1');

// Công việc 1: Sử dụng tới 'boxNode'
//...
console.log(boxNode);

// Công việc 2: Sử dụng tới các li elements
//là con của '.box-1'
var listItemNodes = document.querySelectorAll('.box-1 li'); 
//or
console.log(boxNode.querySelectorAll('li'));


// GET ELEMENT 3

// 1.getElementById
// 2.getElementsByClassName
// 3.getElementsByTagName
// 4.getSelector
// 5.querySelectorAll

// 6.HTML collection

// 7.document.write


