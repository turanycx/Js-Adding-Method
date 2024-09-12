let turan={
    ad:'Turan',
    soyad:'Yilancioglu',
    yas: 12,
    sinif:12,
    dersler:['matematik','fizik','kimya'],
    

    login(){
       console.log('Sisteme giriş yapıldı');
    },

    logout(){
        console.log('Sistemden çıkış yapıldı');
    },
    printlessen(){
        console.log(this.dersler);
    }
};
console.log(turan);
console.log(turan.ad);

console.log(turan.yas);
turan.yas= 20;
console.log(turan.yas);

turan.login();
turan.logout();

turan.printlessen();