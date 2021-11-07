function addToCart(quantity,productName ="Elma") {
    console.log("Sepete Ekelendi ürün :" +productName+ " adet :"+quantity)
    // fonskiyon bir yerden çağılılmal
    // fonskiyonlar genelde js dosyları içerisinde yazılır. 



    
}
//addToCart()
// bu yapı genelde diğer dillerde hatalı bir şekilde oluşur 
// undefiand null ile karıştırılmamalı
//bellekde bir şey gönderilmedi bu nedenle tanımlı olmayan şekilde tanımlandı. 
// diğer dillerde kod derlenmez!
//  herhangi bir tip tanımı belirtilmedi.
// fakat değer gönderilmesse default değerler kullanılıabilir.
addToCart(10)
// bu şekilde ilk parametreyi gönderiyormuşuz gibi 
// çağrıda parametreler sırası ile yerleşir.
// fonsiyonlarda default değer sona yazılmalıdır ki mantıksal hata ile karşılaşılmasın.
//addToCart(15)


// acmaa script ile arraw func larda kullanılabilir. 
// function ile aynı görevde kullanılabilir. 
// öncelikle bir değişken oluşturulkabilir 
// fonsiyon da bir değişkene atanabilinir 
let sayHello= ()=>{
    console.log("Hello World")
}

sayHello()

let sayHello2=function (params) {
    console.log("Hello wordl 2")
    
}
sayHello2();
// bu iki fonksiyon this keywordü ile farklılık vardır 
// ract'da bu yapı bizim için önemli'dir. 


function addToCart2(productName,quantity,unitPrice) {
    // parametreleri ayrı ayrı gönderildiğinde tercih edilmemeli. 
    // bu tip durumlar için objeler oluşturulur.

    
}
addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1={prodcutName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product) {
    // ürün objesi üzerinden işlem yapılsın 
    // önce tanım yapılsın vs
    console.log("Ürn : "+ product.prodcutName)
    //metot imzası. 
    console.log("adet : "+ product.quantity)
    console.log("fiyat : "+ product.unitPrice)



    
}
// product objesi için 

addToCart3(product1)

let product2={prodcutName:"Elma",unitPrice:10,quantity:5}
let product3={prodcutName:"Elma",unitPrice:10,quantity:5}

product2=product3
// product 2 nin ref numarası product 3 ref numarası oldu. 
// 1 veriyi iki farklı ref tutmus oldu 
// veri atanmıyotr bellekde ki adresi atanır. 

product2.prodcutName="Karpuz"
// 102'nin productName değeri karpuz oldu. 
console.log(product3.prodcutName)
// değişkenler değer tiğ ve referans tip (sayısal ve obje,array yapısı şeklinde )
// değişkenler bellekte tanımlanır 
// bellektre stack ve heap bulunmakta 
// değerler stack alanında tanımlandır 
// değer tiplerde değer direkt atanır. 
// objeler referans tipdir. 

// aynı anda birden fazla ürün sepete eklensin.
function addToCart4(x) {
    //birden fazla ürün gönderilecek ! 
    console.log(products)
    // biz x diyerek ürünlerin referansını göndermiş olduk.
    // normalde sepete eklemeye dahil olan kodlar yazılmakta dır. 

    
}
let products=[
    {prodcutName:"Elma",unitPrice:10,quantity:5},
    {prodcutName:"Armut",unitPrice:10,quantity:5},
    {prodcutName:"Karpuz",unitPrice:10,quantity:5}

]
addToCart4(products)
// elde ki tüm ürünler gönderildi.

// rest operatörü için 

function add(bisey,...numbers) { // rest operatörü
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
        // bir dizi şeklinde numbers değerlerine erişim sağlayabildik
        

    }
    console.log(total)
    console.log(bisey)
    // ilk değer biseye atandı geriye kalanlar numbers değerine atanır.
}
// .. şeklşinde is e gönderilen değerler bir array içerisine kondu
// ...numbers bütün değerler üzerine alınur

add(20,30)
// 20 ile 30 array yapıp number isminde gönderildi 
// ver arayler dönüldü
//add(20,30,40)
//add(20,30,40,50)

// değerler array şeklinde tutulmuş oluyor. 
// rest her zaman fonksiyonun sonuna bırakulmaluı 


// verinin api den geldiğini düşün 
let numbers=[30,10,500,600,120]
console.log(...numbers)
// bu şekilde dizinin elemalarına tek tek erişim sağladım 
//console.log(Math.max(...numbers))
// spread ile ayrıştırma rest ile toparlama işlemi gerçekleştirild. 

// react front end ekran olayına odaklanan bir kütüphane dir
// componentlerden oluşur 
// single page yapıdadır 
// o syafa da farklı alanlar mevcutdur. 
// componentler arası data taşınıyor. 
let [İcAnadolu,Marmara,karadeniz,[icAnadoluSehirleri]] =[
    // 145 içerisnde icAnadoluSehirlerini ayrı bir dizi içerine alarak destruck etmiş olduk
    {name:"İç Anadolu",population :"20M"},
    {name:"Marmara",population :"30M"},
    {name:"Karadeniz",population :"10M"},
    // atamar obje şeklind de olabilir.
    // içinde ki şehirler için 
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

//console.log(Marmara.name)
//console.log(İcAnadolu.population)
//  gelen veriyi yapıların farklı olduğunu ve değişkenler için ayrı ayrı bir aypı kullanılsa 
// apilerden gelen verinin formatına göre veri hızlıca parçalanır
console.log(icAnadoluSehirleri) 

// objenin de elemanları değişkenlere atansın 
let newProductName,newUnitPrice,newQuantity
({productName:newProductName ,unitPrice:newUnitPrice,quantity:newQuantity}
    ={prodcutName:"Elma",unitPrice:10,quantity:5})


console.log(newProductName)
// reac'da bir ekran parçası bulunkata örneğin login(params)









