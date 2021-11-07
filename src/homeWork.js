
// Soru 1

function findPrime(...sayilar) {
    
    for(let iindex =0;iindex<sayilar.length; iindex++){

        let sayac=0;
        for(let jindex=1;jindex<sayilar[iindex]-1;jindex++){
            if(sayilar[iindex]%jindex==0)
            sayac++;
        }

        if(sayac==1){
            console.log(sayilar[iindex]+"asaldır")
    
    
        }else{
            console.log(sayilar[iindex]+"asal değildir.")
        }
    }
    // spread operatörü ile değerlere tek tek erişim sağlandı.
    
    
}
findPrime(3,4,7,6)

// Soru 2
// arkadaş sayı : 6:2+3+1

function isFriendNum(valueFirst,valueSecond) {
    let tplm1=0;
    let tplm2=0;
    let firstResult = 0;
    let secondResult = 0;
    for (let i = 1; i < valueFirst-1; i++) {
        if(valueFirst % i == 0) tplm1 += i;
    }
    for (let i = 1; i < valueSecond - 1; i++) {
        if(valueSecond % i == 0) tplm2 += i;
    }
    if(valueFirst===tplm1 && valueSecond===tplm2){
        console.log("girilen sayılar arkadaş sayıdır.")
    }else{
        console.log("girilen sayılar arkadaş sayı değildir." )
    }

    
}
isFriendNum(6,220)
// Mükemmel sayılar: Soru 3 
// kendinden başa pozitif tam bölenleri toplamı kendine eşitse mükkemel sayıdır. 
// 6--> 1 2 3 
// 28 --> 1 2 4 7 14

// Soru 4
// 1000 değerine kadar tüm asal sayılar listelensin

function showAllPrimeValues() {
    let syc=0;
    for (let iindex = 2; iindex < 1001; iindex++) {  
        for (let jindex = 1; jindex <=iindex ; jindex++) {
           
            if(iindex%jindex==0){
                syc++;
            }
        }
        if(syc==2){
            console.log(iindex)
            syc=0;
        }
        else{
            syc=0;
        }
    }
}
showAllPrimeValues();


function showAllPerfectNumbers() 
{
 
    for (let iindex = 0; iindex < 1000; iindex++) {

        let toplam = 0

        for(let jindex = 0; jindex < iindex; jindex++){
            if(iindex % jindex == 0){
                toplam = toplam + jindex;
            }     
        }

        if(toplam == iindex){
            console.log(iindex+" mükemmel sayıdır")
        }
    }
}


    

showAllPerfectNumbers();









