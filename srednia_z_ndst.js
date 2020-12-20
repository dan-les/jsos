$('td:contains("---")').parent().remove();$('td:contains("k.cz.")').parent().remove();
var sum=0;var mulSum=0;$('td[title="ocena"]').each(function(){mulSum += parseFloat($(this).text()) * parseFloat($(this).next().next().text());sum += parseFloat($(this).next().next().text());console.log(parseFloat($(this).text()), parseFloat($(this).next().next().text()));});
Math.decimal = function(n, k) {var factor = Math.pow(10, k+1);n = Math.round(Math.round(n*factor)/10);return n/(factor/10);}
console.log(mulSum, sum, mulSum/sum);var sum=0;var mulSum=0; $('td[title="ocena"]').each(function(){mulSum += parseFloat($(this).text()) * parseFloat($(this).next().next().text());sum += parseFloat($(this).next().next().text());console.log(parseFloat($(this).text()), parseFloat($(this).next().next().text()));});clear();
//console.log("############################################");
console.log("KALKULATOR LICZĄCY ŚREDNIĄ Z WPISANYCH OCEN DO JSOS'a");
console.log("(liczy do średniej ndst)"); 
console.log("");
console.log("   Wymnożone ECTS'y razy oceny:     " + mulSum);
console.log("    Suma ECTS'ów z tego okresu:     "+ sum);
console.log("");
console.log("             WYLICZONA ŚREDNIA:     "+ Math.decimal(mulSum/sum, 2) + "    <<===" );
console.log("  (z 4 miejscami po przecinku):     "+ Math.decimal(mulSum/sum, 4))  ;
//console.log("############################################");
