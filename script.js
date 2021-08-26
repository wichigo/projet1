function sujet(sujet, sujetT){
    let sujet2 = document.getElementsByClassName(sujet);
    let sujetT2 = document.getElementsByClassName(sujetT);
    sujet2[0].style.visibility = "visible";
    color1 = Math.floor(Math.random() * 255);
    color2 = Math.floor(Math.random() * 255);
    color3 = Math.floor(Math.random() * 255);
    sujetT2[0].style.color = "rgb("+ color1+"," + color2 + ","  + color3 +")";
    for (i = 1; i <= 8; i++){
        let a = 'sujet' + i;
        let b = 'sujet' + i + i;
        if (a !== sujet){
            let sujet3 = document.getElementsByClassName(a);
            let sujetT3 = document.getElementsByClassName(b);
            sujetT3[0].style.color = "black";
            sujet3[0].style.visibility = "hidden";
        }
    }
}
