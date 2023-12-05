//DOM atrributes

var headingElement = document.querySelector('h1');

headingElement.title = 'Heading'; // đổi title

headingElement.id = 'heading'; // đổi id

headingElement.className = 'Heading'; // thay đổi tên class

headingElement.href = 'abc' // lỗi, tuỳ thẻ có attribute của thẻ đó mới đc sử dụng.

var a = document.querySelector('a');

a.href = 'abc'; // hợp lệ

// getAttribute, setAttribute : có thể thêm thuộc tính không cần phải hợp lệ với element đó hoặc lấy attribute ra ko cần hợp lệ

//setAttribute.
headingElement.setAttribute('class', 'headingSet');
headingElement.setAttribute('id', 'heading');
headingElement.setAttribute('href', 'heading'); // không phải atribu của h1 nhưng vẫn set được nhé


console.log(headingElement.getAttribute('class'));

// giờ tôi muốn lấy ra attribute của thẻ h1 là href
headingElement.getAttribute('href'); // cách này thì oke nhe
console.log(headingElement.href); // Như ri lỗi á cha , ko truy cập trực tiếp khi đã setAttribute
// Khi đã dùng set rồi thì lấy ra cũng phải get chứ ko truy cập trực tiếp nhé!



console.log(headingElement.getAttribute('class'));
