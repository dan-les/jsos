$('td:contains("2.0")').parent().remove(); //usunięcie wpisów z oceną 2
$('td:contains("---")').parent().remove(); //usunięcie ocen nie wpisanych, aby ich nie liczyło
$('td:contains("k.cz.")').parent().remove(); //usunięcie ocen cząstkowych

var sum=0; //suma ECTS
var mulSum=0; // suma ECTS * ocena
$('td[title="ocena"]').each(function(){
    mulSum += parseFloat($(this).text()) * parseFloat($(this).next().next().text());
    sum += parseFloat($(this).next().next().text());
    console.log(parseFloat($(this).text()), parseFloat($(this).next().next().text()));
    
});
console.log(mulSum, sum, mulSum/sum);
var sum=0; //suma ECTS 
var mulSum=0; // suma ECTS * ocena 
$('td[title="ocena"]').each(function(){
    mulSum += parseFloat($(this).text()) * parseFloat($(this).next().next().text());
    sum += parseFloat($(this).next().next().text());
    console.log(parseFloat($(this).text()), parseFloat($(this).next().next().text()));
    
});
clear();
console.log("KALKULATOR LICZĄCY ŚREDNIĄ Z WPISANYCH OCEN DO JSOS'a (nie liczy do średniej ndst)");
console.log("######################################"); 
console.log("Wymnożone ECTS't razy oceny:  " + mulSum);
console.log("Suma ECTS'ów w tym semestrze: "+ sum);
console.log("Wyliczona średnia:            "+ mulSum/sum);
console.log("######################################");
