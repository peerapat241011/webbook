var product = [{
    id:1,
    img: 'https://bun-books.com/wp-content/uploads/2019/05/howluckey-8.png',
    name: 'How Lucky I am)',
    price: 220,
    description :'รวมบทความเล่าถึงเรื่องราวคนในชีวิต ที่ทำให้ พาย ภาริอร วัชรศิริ หญิงสาวที่ใครหลายคนมองว่าเธอแบกภาระหนักอึ้งไว้บนบ่า ยังรู้สึกได้ว่าตัวเองโชคดีแค่ไหน ที่ได้รู้จักและมีผู้คนเหล่านี้คอยประคับประคองชีวิตของเธอเอาไว้',
    type: 'fashion',
},{
    id:2,
    img: 'https://bun-books.com/wp-content/uploads/2019/05/From-time-to-time-8.png',
    name: 'From time to time',
    price: 240,
    description :'รวมบทความจากบทบรรณาธิการนิตยสาร a day BULLETIN ที่เคยตีพิมพ์เป็นหนังสือ If you Care Enough (ปี 2010), Everybody Hurts (2012) และ Only time will tell (2016) ที่หาซื้อที่ไหนไม่ได้ นำกลับมาคัดสรรและเรียบเรียงใหม่อีกครั้งร',
    type: 'fashion',
},{
    id:3,
    img: 'https://bun-books.com/wp-content/uploads/2021/12/im%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2.png',
    name: 'I’M ทราย THANK YOU.',
    price: 255,
    description :'19 บทความที่รวบรวมและเรียบเรียงมาจาก คำถามจากทางบ้านที่ถูกส่งเข้ามาถึง ทราย เจริญปุระ ไม่ว่าจะเป็นคำถามเกี่ยวกับโรคซึมเศร้า เช่น ‘อยากพาคนใกล้ตัวไปพบจิตแพทย์ จะทำยังไงดี’ หรือคำถามเกี่ยวกับความสัมพันธ์ในครอบครัว อย่าง ‘ขอบเขตของความกตัญญูอยู่ตรงไหน’ หรือ ‘เป็น LGBT จะเปิดตัวกับครอบครัวอย่างไรดี’ ถูกหยิบขึ้นมาตอบในรายการพอดแคสต์ I’m ทราย Thank You—รายการตอบคำถามชีวิต สไตล์ทราย เจริญปุระ ที่ได้รับความนิยมมาตลอดระยะเวลาเกือบสองปี',
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
