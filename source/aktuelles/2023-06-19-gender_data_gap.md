---
layout: news
title: "Wie viel Gender Data steckt in den offenen Daten Berlins?"
metaDescription: Die Unterrepräsentanz von Frauen und frauenspezifischen Daten in Datensätzen wird zunehmend kritisch gesehen, da sie konkrete Benachteiligung in einer Vielzahl von Lebenssituationen manifestiert. Besteht auch bei den offenen Daten Berlins eine sogenannter Gender Data Gap? In diesem Blogpost nähern wir uns dieser Frage und stellen die Ergebnisse unserer Metadatenanalyse zu genderspezifischen, offenen Daten Berlins vor.
categories: aktuelles
visible: true
tags: post
urlText: Zum Blogbeitrag
---
# Gender Data und Open Data Berlin

Die Unterrepräsentanz von Frauen und frauenspezifischen Daten in Datensätzen wird zunehmend kritisch gesehen, da sie konkrete Benachteiligung in einer Vielzahl von Lebenssituationen manifestiert.
In diesem Blogpost betrachten wir die Bedeutung von Gender Data insgesamt und klären: **Was ist die Gender Data Gap und warum sind geschlechtsspezifische Daten wichtig? Besteht auch bei den offenen Daten Berlins eine Gender Data Gap?** Dazu haben wir im Rahmen dieses kleinen Forschungsprojekts einige Metadatenanalysen durchgeführt und die interessanten Erkenntnissen zusammengefasst.

## Hintergrund

### Eine Stadt für Alle? 

Morgens mit dem Auto ins Büro, abends wieder nach Hause – ein recht simples Mobilitätsverhalten, auf das jahrzehntelang die Verkehrsplanung in den meisten westlichen Städten ausgerichtet war. Dieser Alltag funktioniert aber nicht unbedingt für alle Stadtbewohner:innen. Wie man unterwegs ist und welche Anforderungen sich daraus an die Stadt ergeben, hat nicht zuletzt auch etwas mit dem sozialen Geschlecht (Gender) zu tun – mit klassischen Mann-Frau-Rollenbildern, Erwartungen & Normen, sowie gesellschaftlichen Strukturen. Frauen und insbesondere Mütter legen tendenziell die meisten Wege zurück, unter anderem für Erwerbsarbeit, Kinderbetreuung, Pflege von Angehörigen und Einkauf. Sie nutzen dabei überwiegend öffentliche Verkehrsmittel und Fußwege, welche lange in der Planung vernachlässigt wurden. Unter den Stichworten *feministische Stadtplanung* und *Gender Planning* wurde in den vergangenen Jahren dazu geforscht und berichtet, wie Städte so gestaltet werden können, dass sie für alle Bewohner:innen gut funktionieren [1,2,3]. Auch in Berlin verfolgt die Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen mit dem Konzept des *Gender Mainstreaming* das Ziel, die unterschiedlichen Lebensbedingungen und Bedürfnisse möglichst aller Berliner:innen zu berücksichtigen [4].

<center>
{% include "macro-image-section-small.html", src:"/assets/images/gender-mainstreaming-berlin.png", caption:"Cover des Berliner Handbuchs zu Gender Mainstreaming in der Stadtentwicklung, Senatsverwaltung für Stadtentwicklung, 2011" %}
</center>
<br>

### Die Bedeutung von Daten 

Diese Ungleichheit wird nicht nur in der Stadtplanung wirksam, sondern auch in weiteren zentralen Lebensbereichen wie der medizinischen Versorgung oder der politischen Teilhabe. Daten spielen in diesem Zusammenhang eine wichtige Rolle! **Durch geschlechterspezifische Daten kann Geschlechter(un)gerechtigkeit gemessen und sichtbar gemacht werden.** Dadurch werden Handlungsbedarfe sichtbar und konkrete Ziele für die Gleichstellung der Geschlechter können formuliert und gemessen werden. Datenerhebungen und Datenanalysen, die nach Geschlechtern differenzieren, können außerdem zeigen, ob und wie sich die Bedürfnisse und Lebensrealitäten der Geschlechter unterscheiden. Unterschiedliche Bedürfnisse ergeben sich dabei nicht unbedingt direkt aus dem biologischen Geschlecht, sondern auch aus Normen, gesellschaftlichen Erwartungen und strukturellen Faktoren. Nur wenn der Status Quo bekannt ist und man die unterschiedlichen Bedürfnisse und Lebensrealitäten versteht, können Politik, Wirtschaft und andere Organisationen und Institutionen zielgruppen- und gendergerechter handeln. Auch die Senatsverwaltung für Arbeit, Soziales, Gleichstellung, Integration, Vielfalt und Antidiskriminierung verweist auf ihrer Website darauf, dass „geschlechterdifferenzierte Daten […] für die Gleichstellungspolitik des Senats von zentraler Bedeutung“ sind [5].

### Daten sind mehr als Zahlen
Wichtig ist auch: Daten sind nicht nur Zahlen. Sie spiegeln immer auch Werte, Erfahrungen und Perspektiven der Menschen wider, die die Daten erheben und Datensysteme entwickeln. **Damit haben Daten auch das Potenzial, Machtstrukturen und Normen zu verinnerlichen und weiterzugeben.** Die historische und bis heute bestehende Über-Repräsentanz männlicher Perspektiven zeigt sich auch im Bereich Daten. Dabei ist die Annahme, alles Männliche sei die Norm und allgemeingültig, sowohl Grund als auch Folge der sogenannten Gender Data Gap. Zahlreiche Beispiele für diese Gender Data Gap und die Folgen davon führt Caroline Criado-Perez in ihrem Buch "Unsichtbare Frauen. Wie eine von Daten beherrschte Welt die Hälfte der Bevölkerung ignoriert" aus [6]. Welche unterschiedlichen Bedürfnisse ergeben sich aus dem unterschiedlichen Mobilitätsverhalten von Frauen und Männern bezüglich Infrastruktur, Winterdienst etc.? Profitieren Mädchen und Jungen gleichermaßen von Fördergeldern, zum Beispiel für Sportvereine? Gender Data versucht, Antworten auf solche Fragen zu liefern und damit eine Daten- und Entscheidungsgrundlage für mehr Gleichberechtigung zu geben.

### Was ist die Gender Data Gap?
Die Gender Data Gap lässt sich als geschlechterbezogene Datenlücke übersetzen. Sie bezieht sich auf drei verschiedene Arten von Gender Data:
- **Daten, die geschlechterdifferenziert erhoben und analysiert werden** und dadurch Unterschiede zwischen den Geschlechtern sichtbar machen können.
- **Daten, die Themen behandeln, die insbesondere Mädchen und Frauen betreffen**, zum Beispiel Sorgearbeit oder weibliche Gesundheit.
- **Daten, die die Wirkung des sozialen Geschlechts (Gender) und von Geschlechternormen auf die Geschlechter untersuchen.**


Das nicht zufällige sondern strukturell bedingte Fehlen von Daten in diesen Kategorien beschreibt die Gender Data Gap. Wie ein Datensatz aus der ersten Kategorie, den geschlechterdifferenzierten Daten, aussehen kann, zeigt das nachfolgende Beispiel aus dem Open Data Portal.

<center><iframe title="Beispieldatensatz: Genderstatistik KünstlerInnenförderung 2014                      " aria-label="Tabelle" id="datawrapper-chart-9dSQu" src="https://datawrapper.dwcdn.net/9dSQu/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="454" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script></center>

<br><br>

## Vorgehen und Analyse

### Gender Data im Berliner Open Data Portal

Sowohl die Potenziale von Open Data als auch von Gender Data können besser ausgeschöpft werden, wenn beide Konzepte zusammengedacht werden. In der [Berliner Open Data Strategie](https://www.berlin.de/sen/wirtschaft/digitalisierung/assets/open-data-strategie.pdf) von 2012 und der Open Data Verordnung gibt es keine Forderung nach geschlechtsspezifischen Daten, dennoch sind Gender und Geschlecht Teil von Datensätzen im Open Data Portal. In einem Forschungsprojekt im Rahmen ihres Praktikums bei der ODIS hat sich Ester Scheck damit beschäftigt, welche Rolle Gender Data im Open Data Portal Berlin spielt. **Auf Basis der Metadaten wurde der Anteil von Gender Data an den offenen Daten Berlins untersucht.** Zeitpunkt der Metadatenabfrage war der 17. Mai 2023.

Die Metadaten, welche sich über die CKAN-API des Datenregisters abrufen lassen, sind Informationen, die die eigentlichen Datensätze beschreiben, wie Titel, Herausgeber:in, Datum, Tags und Beschreibung. Die eigentlichen Datensätze wurden aufgrund des damit verbundenen Aufwands nicht ausgewertet.

Im ersten Schritt wurden die **3.227 Metadateneinträge aus dem Datenportal danach gefiltert, ob sie natürliche Personen betreffen** oder nicht, denn geschlechtsbezogene Daten machen am meisten Sinn bei Daten zu natürlichen Personen. Auf den 803 übrig geliebenen Metadateneinträgen, die natürliche Personen beschreiben, basieren alle weiteren Analysen. Dies schließt knapp ein Viertel aller Metadateneinträge mit ein.

<center><iframe title="Anzahl von Metadateneinträgen" aria-label="Torten-diagramm" id="datawrapper-chart-PJPXl" src="https://datawrapper.dwcdn.net/PJPXl/1/" scrolling="no" frameborder="0" style="width: 00; min-width: 60% !important; border: none;" height="421" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script></center>
<br>


Anschließend wurden der Titel, die Beschreibung sowie die Tags der Metadateneinträge nach bestimmten Gender-Stichworten durchsucht: „Frau“ oder „Mann“, „weiblich“ oder „männlich“, „Gender“ und „Geschlecht“. Knapp 42%, also 334 der 803 Metadateneinträge, weisen eine solche Gender-Referenz auf. Im Hinterkopf ist bei dieser Zahl zu behalten, dass wir nur die Metadateneinträge untersucht haben und nicht die Datensätze selbst. Es ist also davon auszugehen, dass noch weitere Datensätze einen Gender-Bezug aufweisen, dies jedoch nicht aus den Metadaten erkennbar ist. 

<center><iframe title="Anzahl der Metadateneinträge mit und ohne Gender-Referenz" aria-label="Pie Chart" id="datawrapper-chart-tNOqG" src="https://datawrapper.dwcdn.net/tNOqG/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 60% !important; border: none;" height="591" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script></center>
<br>

Ist ein Umfang von 42% Metadateneinträgen mit Gender-Referenz nun viel oder wenig? Das ist an dieser Stelle schwer zu beurteilen, denn es erfordert nicht-vorhandene Richtwerte oder Vergleichswerte anderer Open Data Portale. Es ist jedoch davon auszugehen, dass 100% nicht anzustreben sind, da es nicht bei allen Datensätzen zu natürlichen Personen sinnvoll oder möglich ist, das Geschlecht unter Berücksichtigung der Selbstbestimmung zu bestimmen und zu erheben. Aufschlussreicher als diese einfache Zahl ist es deshalb, die Eigenschaften der Metadateneinträge genauer zu untersuchen. 

Welche **Art von Gender-Referenz** tritt eigentlich am häufigsten bei den Metadateneinträgen auf? 'Geschlecht' ist mit Abstand der häufigste Begriff, der auf eine Gender-Referenz hinweist. Fast 98% der Gender-Referenzen beruhen auf dem Tag ‚Geschlecht‘ oder mehrfachen Referenzen. Bei den Metadateneinträgen mit mehrfachen Referenzen überwiegt ebenso das Stichwort 'Geschlecht' im Titel oder als Tag. Die Stichwörter ‚Frau/Mann' kommen am seltensten vor: im Titel eines Metadateneintrags nur einmal, in der Beschreibung oder den Tags überhaupt nicht. Sehr selten kommt auch ‚Gender’ vor und nur in Kombination mit anderen Gender-Referenzen.

<center><iframe title="Anzahl von Gender-Referenzen nach Art der Referenz" aria-label="Pie Chart" id="datawrapper-chart-qjdZS" src="https://datawrapper.dwcdn.net/qjdZS/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 60% !important; border: none;" height="429" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script></center>
<br>
<br>



<center><iframe title="Anzahl verschiedener Gender-Referenzen in der Übersicht" aria-label="Tabelle" id="datawrapper-chart-pOcAF" src="https://datawrapper.dwcdn.net/pOcAF/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="601" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script></center>
<br>

In weiteren Analysen haben wir außerdem die Kategorien, Herausgeber:innen und Tags der Metadateneinträge mit und ohne Gender-Referenz untersucht. Im Berliner Open Data Portal gibt es insgesamt 22 **Kategorien**, von denen 14 mit den Metadateneinträgen zu Datensätzen über natürliche Personen abgedeckt werden. Einige der Metadateneinträge sind keiner Kategorie zugeordnet. Die Mehrheit der Metadateneinträge mit Gender-Referenz, nämlich 325 Einträge, sind den beiden Kategorien Gesundheit und Sozialleistungen zugeordnet. Es zeigt sich, dass es auch in den Kategorien Demographie, sowie Geographie und Stadtplanung über 100 Metadateneinträge zu Datensätzen, die natürliche Personen beschreiben, gibt, unter diesen jedoch keiner bzw. nur einer eine Gender-Referenz aufweist.

<center><iframe title="Anzahl der Metadateneinträge in verschiedenen Kategorien" aria-label="Balken (gestapelt)" id="datawrapper-chart-dNC0c" src="https://datawrapper.dwcdn.net/dNC0c/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="463" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script></center>
<br>


Bei den **Herausgeber:innen der Datensätze** über natürliche Personen zeigt sich eine ähnliche Richtung wie bei den Kategorien. Die Mehrheit der Metadateneinträge insgesamt und dabei 326 der 334 Metadateneinträge mit Gender-Referenz wurde von der Senatsverwaltung für Gesundheit, Pflege und Gleichstellung angelegt, was mit den Kategorien Gesundheit und Sozialleistungen zusammen passt. Insgesamt mehr als 300 Datensätze zu natürlichen Personen wurden vom Amt für Statistik Berlin-Brandenburg und von der Senatsverwaltung für Stadtentwicklung und Wohnen veröffentlicht, jedoch hat davon nur einer bzw. keiner davon eine Gender-Referenz im Metadateneintrag.

<center><iframe title="Anzahl der Metadateneinträge nach Herausgeber:in" aria-label="Balken (gestapelt)" id="datawrapper-chart-v8RDa" src="https://datawrapper.dwcdn.net/v8RDa/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="600" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script></center>
<br>

Zum einen macht es thematisch natürlich Sinn, dass die Einträge von der Senatsverwaltung für Wissenschaft, Gesundheit und Pflege viele Datensätze zu natürlichen Personen und mit Gender-Referenz haben. Diese Datensätze korrelieren auch mit den beiden Kategorien Gesundheit und Sozialleistungen. Aber um das einzuordnen, müssen wir uns auch ein bisschen die **Hintergründe des Open Data Portals** anschauen. Das Gesundheits- und Sozialinformationssystem (GSI) von der Senatsverwaltung für Wissenschaft, Gesundheit und Pflege ist über einen Harvester angebunden. So wurden Datensätze aus dem GSI nach Themen gebündelt automatisch in das Open Data Portal übertragen. Dieser Harvesting-Prozess könnte auch dazu führen, dass überdurchschnittlich viele und standardisierte Tags vergeben wurden. Bei vielen anderen Datensätzen findet der Metadateneintrag händisch statt. Umfang und Aussagekraft von Titel, Beschreibung und Tags hängen somit stark von dem Wissen und der Bereitschaft der Person ab, die den Eintrag anlegt.
Durch die unterschiedlichen Datenbereitsteller im Datenregister lässt sich keine pauschale Aussage über die Aussagekraft der Metadaten treffen. Bei der Bewertung der Ergebnisse ist somit zu beachten, dass die Datenanalyse rein auf den von unterschiedlichen Personen angelegten Metadaten beruht.

Im letzten Schritt haben wir uns die **Top 15 Tags der Metadateneinträge** angeschaut. Bei der Auswertung der Tags wurde der Tag ‚Berlin‘ ausgeklammert, da seine Aussagekraft im Rahmen des Berliner Open Data Portals begrenzt ist. Bei den Tags ergibt sich ein unterschiedliches Bild, je nachdem ob die 15 am häufigsten verwendeten Tags aller Metadateneinträge, der Metadateneinträge mit Gender-Referenz oder der Metadateneinträge ohne Gender-Referenz in den Blick genommen werden.

Ein Blick auf die Top 15 Tags der Metadateneinträge mit Gender-Referenz kann einen ersten Eindruck davon geben, wovon die Datensätze handeln. Dabei steht selbstverständlich 'Geschlecht' weit vorne, aber auch ‚GSI‘, ‚Gesundheitsberichterstattung‘, ‚Indikator‘, ‚Altersgruppen‘ sowie ‚Regionalvergleich‘ und ‚Kinder‘. Die Top 15 weisen somit überwiegend einen starken Fokus auf Gesundheit und soziale Faktoren auf.

<center><iframe title="Anzahl der Metadateneinträge nach verwendeter Tags, Top 15 mit Gender-Referenz" aria-label="Balken (gestapelt)" id="datawrapper-chart-C09he" src="https://datawrapper.dwcdn.net/C09he/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="501" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script></center>
<br>

Sortiert nach den häufigsten Tags bei Metadateneinträgen ohne Gender-Referenz zeigen sich Potenziale, wo vielleicht noch mehr Gender Data eingebunden werden könnte. Die häufigsten Tags ‚LOR‘, ‚Geodaten‘, ‚Karten‘ und ‚Planungsräume‘ weisen auf Daten mit Raumbezug hin. 
Allerdings kann auch hier wieder das Harvesting ein Grund für in diesem Fall eine fehlende Gender-Referenz sein. Geodaten werden vom FIS-Broker geharvested, möglicherweise gibt es im FIS-Broker weniger Tags und keinen ‚Geschlecht-Tag‘.

<center><iframe title="Anzahl der Metadateneinträge nach verwendeter Tags, Top 15 ohne Gender-Referenz" aria-label="Balken (gestapelt)" id="datawrapper-chart-1k84m" src="https://datawrapper.dwcdn.net/1k84m/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="501" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script></center>
<br>

### Fazit

Die Analyse hat gezeigt, was durch die CKAN-API möglich ist und wie Open Data erkundet werden kann. Dadurch haben wir ein erstes Gefühl für das Thema 'Geschlecht' im Open Data Portal Berlin bekommen. Man sollte jedoch unbedingt berücksichtigen, dass es eine reine **Metadatenanalyse** ist und letztlich vor allem die große **Bedeutung guter und standardisierter Metadaten** aufzeigt. Verlässlichere Erkenntnisse könnten über die Analyse der Datensätze selbst erlangt werden. Zudem könnten in diesem Schritt weitere Merkmale analysiert werden, zum Beispiel die Vollständigkeit der Datensätze und die Kategorisierung von Geschlecht / Gender und auch, ob nicht-binäre Geschlechter beachtet werden.
Außerdem wurden nur Metadateneinträge aus dem Open Data Portal Berlin und somit nur ein Teil der für Berlin verfügbaren offenen Daten untersucht. Daneben gibt es noch weitere Datensysteme, zum Beispiel vom Amt für Statistik Berlin-Brandenburg oder das neue Sozial-Informations-System der Senatsverwaltung für Arbeit, Soziales, Gleichstellung, Integration, Vielfalt und Antidiskriminierung, die aktuell noch nicht automatisiert an das Open Data Portal Berlin angebunden sind und eine große Anzahl weiterer Datensätze über natürliche Personen beinhalten.
Schließlich sei im Fazit nochmal darauf hingewiesen, wie wichtig ausführliche und treffende Metadateneinträge sind, wie unsere Analyse aufgezeigt hat.

<br><br>

## Skript und Methodik

Das **Python-Skript zur Abfrage und Auswertung der Metadateneinträge** sowie ergänzende Hinweise zur Methodik lassen sich [hier](https://deepnote.com/workspace/odis-projekte-e67947f6-34e6-483f-b431-0bef2e0d8e2b/project/Gender-Data-Gap-und-Open-Data-Berlin-e46ceed5-629c-4348-843d-38bd4e9c160c/notebook/notebook-84a527e408d948f1aaa76501b00e3807) einsehen und herunterladen. Das Skript kann leicht für andere Datenportale, die auf CKAN basieren, angepasst und angewendet werden. Die **interaktiven Visualisierungen** und Tabellen haben wir mit dem Datawrapper-Online-Tool erstellt. **Datawrapper** ist ein kostenloser Service mit dem sehr schnell ansprechende Datenvisualisierungen erstellt werden können, ohne dass Programmier- oder andere technische Vorkenntnisse benötigt werden. Wie das geht, zeigen wir in einer [Tutorialreihe](/ressourcen/datenvisualisierung).

<br><br>

## Quellen

1  Peteranderl, Sonja (2020) [Feministische Stadtplanung.  Ampelfrauen sind erst der Anfang](https://www.spiegel.de/ausland/stadtplanung-wie-koennte-eine-feministische-stadt-aussehen-a-c4b7370d-81ee-4fc8-8965-84312028aaa3)

2 Jannaschk, Julia (2021) [Feministische Stadtplanung: Eine bessere Stadt für alle](https://www.watson.de/leben/analyse/530137340-feministische-stadtplanung-eine-bessere-stadt-fuer-alle)

3 Nickel, Stefanie (2021) [Die feministische Stadt](https://www.fr.de/zukunft/storys/staedte/kurze-wege-und-gemeinschaft-die-feministische-stadt-90478108.html)

4 Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen (o.J.) [Gender Mainstreaming in den Handlungsfeldern der Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen](https://www.stadtentwicklung.berlin.de/soziale_stadt/gender_mainstreaming/)

5 Senatsverwaltung für Arbeit, Soziales, Gleichstellung, Integration, Vielfalt und Antidiskriminierung (o.J.) [Gender Daten](https://www.berlin.de/sen/frauen/gleichstellung/gender-daten/)

6 Criado-Perez, Caroline (2020) [Unsichtbare Frauen. Wie eine von Daten beherrschte Welt die Hälfte der Bevölkerung ignoriert](https://carolinecriadoperez.com/book/invisible-women/)
