// Function declaration
// Statement:
function calcRectArea(width, height) {
    return width * height;
  }
  
  console.log(calcRectArea(5, 6));
  // Expected output: 30
  

// function expression
const getRectArea = function (width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));
  // Expected output: 12
  

// Hoisting:
//  Khái niệm hoisting biểu thị function hay biến có thể được "gọi" ngay từ dòng code đầu tiên, trước khi chúng được khai báo.
// Function Declaration có thuộc tính hoisting còn Function Expression thì không, điều này dễ dàng được biểu thị qua hai ví dụ sau:

handleStuff(); // này oke nè

function handleStuff() {
    // do stuff
}

handleStuff(); // Nay bi error

const handleStuff = function() {
    // do stuff
}

//TONG KET:
// chúng ta sử dụng function declartion khi muốn tạo ra function để sử dụng ở bất cứ đâu trong toàn bộ mã code
//  và sử dụng function expression khi function bị giới hạn vùng sử dụng, giúp global scope nhẹ và sạch hơn.