---
layout: news
title: "Mit dem Datawrapper-Tool Informationen veranschaulichen und greifbar machen"
metaDescription: 
categories: aktuelles
visible: true
tags: post
urlText: Zum Blogbeitrag
---
# Eine Visualisierung sagt mehr als 1000 Worte



Aus Daten können wir eine ganze Menge lernen. Große Excel-Listen mit einer Vielzahl an Daten und Tabellenblättern sind für Menschen jedoch oftmals auf Anhieb schwer zu verstehen. Um Zusammenhänge und zentrale Erkenntnisse hervorzuheben, die in Daten stecken, können Visualisierungen helfen. Mithilfe von grafischen Elementen sind Daten so visuell schneller erfassbar und auch abstraktere Informationen lassen sich leichter veranschaulichen. Visualisierungen bieten außerdem die Möglichkeit, durch ihre Gestaltung die Aufmerksamkeit der Lesenden gezielt auf wichtige Aussagen zu lenken. 

<center>
{% include "macro-image-section-small.html", src:"/assets/images/datawrapperschulung1.jpg", caption:"Schulung zur Software Datawrapper am 20.10.2023 in der Verwaltungsakademie Berlin." %}
</center>
<br>

## Hintergrund

### Eine Stadt für Alle? 

Morgens mit dem Auto ins Büro, abends wieder nach Hause – ein recht simples Mobilitätsverhalten, auf das jahrzehntelang die Verkehrsplanung in den meisten westlichen Städten ausgerichtet war. Dieser Alltag funktioniert aber nicht unbedingt für alle Stadtbewohner:innen. Wie man unterwegs ist und welche Anforderungen sich daraus an die Stadt ergeben, hat nicht zuletzt auch etwas mit dem sozialen Geschlecht (Gender) zu tun – mit klassischen Mann-Frau-Rollenbildern, Erwartungen & Normen, sowie gesellschaftlichen Strukturen. Frauen und insbesondere Mütter legen tendenziell die meisten Wege zurück, unter anderem für Erwerbsarbeit, Kinderbetreuung, Pflege von Angehörigen und Einkauf. Sie nutzen dabei überwiegend öffentliche Verkehrsmittel und Fußwege, welche lange in der Planung vernachlässigt wurden. Unter den Stichworten *feministische Stadtplanung* und *Gender Planning* wurde in den vergangenen Jahren dazu geforscht und berichtet, wie Städte so gestaltet werden können, dass sie für alle Bewohner:innen gut funktionieren [1,2,3]. Auch in Berlin verfolgt die Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen mit dem Konzept des *Gender Mainstreaming* das Ziel, die unterschiedlichen Lebensbedingungen und Bedürfnisse möglichst aller Berliner:innen zu berücksichtigen [4].


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

