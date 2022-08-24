 function krediHesapla()
{
    var anaPara,vadeSayisi;
    var aylikTaksit, odenecekTutar;
    anaPara=document.getElementById("txtkrediTutari").value;
    var liste= document.getElementById("listeVadeler");
    vadeSayisi=liste.options[liste.selectedIndex].value;

    if(vadeSayisi==6)
    {
        odenecekTutar=anaPara*2.3;
    }
    else if(vadeSayisi==12)
    {
        odenecekTutar=anaPara*3.6;
    }
    else if(vadeSayisi==24)
    {
        odenecekTutar=anaPara*3.8;
    }
    else if(vadeSayisi==30)
    {
        odenecekTutar=anaPara*4.0;
    }
    aylikTaksit=odenecekTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML=" Toplam Geri Ödeme: "+odenecekTutar+"<br>"+
    "Aylık Taksit Tutarı: "+aylikTaksit.toFixed(2);



}