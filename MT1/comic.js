var product = [{
    id:1,
    img: 'https://bun-books.com/wp-content/uploads/2021/12/mamaung123.png',
    name: 'มะม่วง 123 (HARDCOVER)',
    price: 495,
    description :'มะม่วง 123 เป็นฉบับรวมผลงานคัดสรรจาก มะม่วง ทั้ง 4 เล่ม ในรอบ 9 ปีล่าสุด ที่ได้รับการตีพิมพ์ในประเทศไทย ได้แก่ เด็กหญิงมะม่วง (2555), มะม่วงเลิฟ (2556), มะม่วง memory (2557) และมะม่วงใจ (2558) ครบทุกมิติของเนื้อหาที่ไม่เคยล้าสมัย ไม่ว่าจะเป็น ความรัก ความสัมพันธ์ การใช้ชีวิต และสังคม',
    type: 'fashion',
}];

$(document).ready(() =>{
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openproduct(${i})" class="items ${product[i].type}">
                <img src="${product[i].img}">
                <p style= "font-size: 1vw;">${product[i].name}</p>
                <p style= "font-size: 0.9vw;">${product[i].price}</p>
            </div>`;
    }
    $("#plist").html(html);
});

function searchh(get) {
    var value =$('#'+get.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if (product[i].name.includes(value) ) {
        html += `<div onclick="openproduct(${i}) class="items ${product[i].type}">
                <img src="${product[i].img}">
                <p style= "font-size: 1vw;">${product[i].name}</p>
                <p style= "font-size: 0.9vw;">${product[i].price}</p>
            </div>`;
        }
    }
    $("#plist").html(html);
}

var productindex = 0;
function openproduct(index) {
    productindex = index;
    console.log(openproduct)
    $("#modalDesc").css('display','flex')
    $("#mdname").text(product[index].name)
    $("#mdprice").text(product[index].price)
    $("#mddesc").text(product[index].description)
}

function closeModal() {
   $(".modal").css('display','none')
}
