function krediHesapla()
{
    var anaPara,vadeSayisi;
    var aylikTaksit, odenecekTutar;
    anaPara=document.getElementById("txtkrediTutari").value;
    var liste= document.getElementById("listeVadeler");
    vadeSayisi=liste.options[liste.selectedIndex].value;

    if(vadeSayisi==6)
    {
        odenecekTutar=anaPara*1.1;
    }
    else if(vadeSayisi==12)
    {
        odenecekTutar=anaPara*1.2;
    }
    else if(vadeSayisi==24)
    {
        odenecekTutar=anaPara*1.3;
    }
    else if(vadeSayisi==30)
    {
        odenecekTutar=anaPara*1.4;
    }
    aylikTaksit=odenecekTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML=" Toplam Geri Ödeme: "+odenecekTutar+"<br>"+
    "Aylık Taksit Tutarı: "+aylikTaksit.toFixed(2);



}