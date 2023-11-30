---
layout: news
tags: post
title: "Analysen mit Luftgütedaten: Beispielhafte Abfragen an eine API-Schnittstelle"
metaDescription: Seit Mai 2022 übermittelt die zuständige SenMVKU Luftgütemessdaten über eine offene API-Schnittstelle an das Berliner Open Data Portal. Wir haben uns intensiv mit den Daten beschäftigt und beispielhaft aufgezigt wie die API abgefragt werden kann, um mit den Luftgütedaten zu arbeiten.
categories: aktuelles
visible: true
urlText: Zum Blogbeitrag
---
# Datenanalysen dank APIs: Das Beispiel der Berliner Luftgütedaten"
Hohe Luftqualität ist eine zentrale Voraussetzung für eine lebenswerte Stadt und steht in direktem Zusammenhang mit der Gesundheit ihrer Bewohner:innen. Die Belastung der Luft in Städten hängt dabei von einer Vielzahl von Faktoren ab, die sowohl von Menschen beeinflusst werden als auch von witterungsbedingten natürlichen Faktoren. Auf Länder-, Bundes-, und europäischer Ebene zielen zahlreiche Programme auf eine stetige Verbesserung der Luftqualität ab, wie zum Beispiel Fahrverbote, bessere Filteranlagen und die Regulierung von Industrie und Gewerbe. Um Programme genau zu steuern und ihren Erfolg abschätzen zu können, ist eine solide Datengrundlage und damit einhergehende regelmäßige und genaue Messungen wichtig. Wir zeigen in diesem Blogpost auf, wie mit den offenen Luftgütedaten dank einer API-Schnittstelle diese Daten abgefragt und weiterverwendet werden können.

## Luftgütedaten als wichtiger Kontrollwert zur Einhaltung von Grenzwerten 

Wie stark die Luft belastet ist, wird seit 1975 durch das Berliner Luftgüte-Messnetz (BLUME) kontinuierlich gemessen. Das Messnetz aus 17 ortsfesten Messstationen erhebt an Hauptverkehrsstraßen, in Wohngebieten und an den Rändern bzw. Wäldern der Stadt Daten über die Luftqualität. Aus jeder Station werden alle fünf Minuten die Werte diverser Schadstoffe, wie Feinstaub, Stickstoffe und Schwefelmono- und dioxide, zur Messzentrale übertragen und daraus die Stunden- und Tageswerte als Basis für die weitere Auswertung berechnet. 

Eine kontinuierliche Messung der Berliner Luftqualität dient damit nicht nur der Information der Öffentlichkeit, sondern ist ganz konkrete Grundlage für die Ursachenermittelung der Luftverunreinigung und der Verfolgung der Wirksamkeit von Maßnahmen zur Luftreinhaltung. Darüber hinaus muss das Land Berlin auf Grundlage europäischen und nationalen Rechts Grenzwerte einhalten. Für Komponenten wie Feinstaub, Ozon oder Stickstoff gibt es EU-weite [Immisionsgrenzwerte und Schwellenwerte.](https://www.umweltbundesamt.at/umweltthemen/luft/daten-luft/luft-grenzwerte)

Gleichwohl eine Verbesserung der Luftqualität in den letzten Jahren durch eine Vielzahl an Maßnahmen z. B. aus dem Luftreinhalteplan erreicht wurde, werden die von der [Weltgesundheitsorganisation (WHO) vorgeschlagenen Zielwerte](https://www.who.int/news/item/22-09-2021-new-who-global-air-quality-guidelines-aim-to-save-millions-of-lives-from-air-pollution) weiterhin zum Teil stark überschritten. Auch bestimmte EU-weit festgelegte Ozon-Kennwerte, die lokal kaum beeinflusst werden können, werden nicht eingehalten. Das Land Berlin will mit einer neuen Luftreinhaltestrategie 2030 daher ambitioniertere Ziele analog zu den WHO-Empfehlungen erreichen. Die Überwachung der Luftqualität wird dabei weiter eine wichtige Rolle einnehmen.

## Luftgütemessdaten als offene Datenschnittstelle abrufbar

Seit Mai 2022 übermittelt die zuständige Senatsverwaltung die Luftgütemessdaten an das Berliner Open Data Portal über eine offene API-Schnittstelle und betreibt darüber hinaus den Internetauftritt des Luftgütemessnetzes unter [https://luftdaten.berlin.de.](https://luftdaten.berlin.de/) Auf der Webseite stellt die Senatsverwaltung für Mobilität, Verkehr, Klimaschutz und Umwelt einige Übersichten zum aktuellen Luftqualitätsindex, den täglichen Messwerten und der jährlichen Anzahl von Grenzwertüberschreitungen zur Verfügung. Diese Daten stehen als CSV-Download zur Verfügung und können direkt im Browser visualisiert werden.

<iframe src="https://luftdaten.berlin.de/station/mc010" height="600" width="1000" title="Die interaktive Ansicht der Daten, die beispielshaft von einer der Messstationen erhoben werden."></iframe>
<br>
<br>

Weitaus interessanter für Datenverarbeitende ist hingegen die Programmierschnittstelle, die die Senatsverwaltung betreibt und über die Daten heruntergeladen werden können. Eine Schnittstelle bietet sich im Falle der Luftdaten aus mehreren Gründen an: Aus Sicht der Datenbereitstellenden ist eine automatisierte Art, die Daten zusammenzuführen, wichtig. Viele Datensätze und Statistiken, die sich beispielweise im Open Data Portal finden, werden von Mitarbeitenden in der Verwaltung einzeln zusammengetragen, abgespeichert und hochgeladen.

Im Falle der Luftqualität wäre ein händisches Zusammentragen aller Stationsdaten jedoch sehr zeitintensiv und zugleich anfällig für Fehler. Da alle 17 Stationen stündliche Werte für bis zu 9 Schadstoffe bereitstellen, generiert das Luftgütemessnetz bereits nach einem Tag mehr als hundert individuelle Werte. Aus Sicht der Datennutzenden bietet eine automatisierte Schnittstelle die Möglichkeit, die Daten für bestimmte Zeiträume, Messtationen oder Schadstoffe herunterzuladen, und somit Zeit und Rechenleistung zu sparen, da keine einzelne, sehr große Datei mit überflüssigen Informationen heruntergeladen werden muss. Besonders hilfreich ist die automatisierte Datenbereitstellung auch für Programmierer:innen, die Apps oder Webseiten betreiben und eine regelmäßige Aktualisierung der Daten benötigen. So kann eine automatisierte Abfrage der Daten einmal konfiguriert werden und die Werte automatisch aktualisieren.

## REST-API

Damit möglichst viele Nutzer:innen effizient und intuitiv mit den Schnittstellen arbeiten können, folgen offene APIs, wie die Luftgüte-API, einer einheitlichen Funktionsweise und werden so auch als REST-API beschrieben. REST steht hier für *representational state transfer* und bedeutet, dass eine API auf einem Satz von klaren, einheitlichen Prinzipien basiert. In einer REST-API werden Ressourcen, also Dokumente und Informationen, durch eindeutige Identifikatoren, sogenannte URIs (Uniform Resource Identifiers), repräsentiert. Eine URL ist hier eine bestimmte Art von URI, die anzeigt, wo im Internet eine bestimmte Ressource, wie beispielsweise dieser Blogbeitrag zu finden ist. 

REST-APIs verwenden HTTP-Protokollmethoden wie GET, POST, PUT und DELETE, um auf Ressourcen zuzugreifen, und beispielsweise Daten herunter-(GET) und hochzuladen (POST). Die entstehenden Daten werden in der Regel als Datei im .json- oder .xml-Format übermittelt und können dann von Nutzer:innen weiterverarbeitet werden. Ein Client (Nutzer:innen tun dies zum Beispiel über das Anklicken bestimmter Elemente einer Website über den Browser) sendet eine HTTP-Anfrage an den Server, woraufhin der Server eine Antwort an den Client zurücksendet. Die Antwort enthält Statusinformationen über die Anfrage (beispielsweise ob sie erfolgreich war) und zeigt den angeforderten Inhalt an. Um zum Beispiel den Text dieses Blogbeitrags anzuzeigen, generieren Nutzer:innen im Browser mit der Eingabe der URL und einem Druck auf die ‘Enter’-Taste eine GET-Request, die den Text von einem Server abruft, und auf der Website anzeigt. 

Die einheitlichen Standards ermöglichen es also Entwicklern, Dokumente und Informationen, wie beispielsweise Webseiten über HTTP anzusprechen und zu bearbeiten. Dies führt zu leicht verständlichen und gut strukturierten APIs, die skalierbar und vielseitig weiterverwendbar sind. REST-APIs werden häufig in Webanwendungen und mobilen Apps eingesetzt, da sie eine einfache und effiziente Möglichkeit bieten, auf Ressourcen und Daten zuzugreifen.

## Das Berliner Luftgütemessnetz (BLUME): API-Abfragen generieren

Für die Luftgüte-API steht eine Dokumentation, also eine Art digitale Gebrauchsanweisung bereit, die die Funktionsweise der API erläutert. Gleichzeitig stellt sie ein grafisches Interface zur Verfügung, mit der sich diverse Messwerte abfragen lassen. So können beispielsweise stündliche Werte zu einzelnen Komponenten wie Ozon oder Feinstaub aus einzelnen Stationen abgefragt werden. Über [https://luftdaten.berlin.de/api/doc](https://luftdaten.berlin.de/api/doc) können Nutzer:innen die Dokumentation der Schnittstelle aufrufen und eigene Anfragen generieren. Durch eine graphische Benutzeroberfläche ist sie direkt im Browser bedienbar und so auch für Nutzer:innen ohne Programmierkenntnisse zugänglich. Um eine GET-Request, also eine HTTP-Anfrage, zu generieren und Informationen abzurufen, ist es hilfreich sich zunächst mit der Übersicht der verfügbaren Elemente vertraut zu machen.

Unter dem ersten Dropdown-Menüs des Reiters “Kernkomponenten” und der dazugehörigen URL [api/components ](https://luftdaten.berlin.de//api/components) lässt sich eine Übersicht über die gemessenen Komponenten generieren. Um eine GET-Request zu stellen, wählen Nutzer:innen ‘Try It Out’ aus, setzen das Parameter ‘active’ auf TRUE und klicken ´Execute´. Unter ‘Request URL’ wird eine URL generiert, die den Inhalt der Abfrage liefert. 

<center>
{% include "macro-image-section-small.html", src:"/assets/images/luftgüte_request_url.png", caption:"Die Parameter listen verschiedene Elemente auf, die zusammen die Request URL ergeben." %}
</center>
<br>

Der Inhalt dieser URL kann separat im Browser aufgerufen oder direkt unter ‘Server Response’ bzw. ‘Response Body’ eingesehen werden. Im Fall der Messkomponenten besteht die Antwort des Servers aus einer Auflistung und Beschreibung der Metadaten des Luftgüte-Messnetzes.

<center>
{% include "macro-image-section-small.html", src:"/assets/images/luftgüte_request_url2.png", caption:"Der Inhalt der nutzer:innengenerierten Request URL" %}
</center>
<br>

Um beispielsweise die Messwerte einer bestimmten Station abzufragen, machen wir uns zunächst mit den verschiedenen Messtationen und ihren Metadaten vertraut. So können wir im Untermenü ‘Stationen’ (/api/stations) wahlweise eine Liste aller Stationen und der erhobenen Komponenten anzeigen oder über eine binäre ja/nein bzw. TRUE/FALSE Eingabe eine Auswahl von Messtationen abrufen. Dafür wählen wir aus, ob wir nur spezielle, aktive, inaktive, oder alle Arten von Stationen abfragen wollen. Zusätzlich können wir mit stationgroup_codes[] ein bestimmtes Wort eintragen, wie beispielsweise ‘suburb’ (Vorort) für Messtationen außerhalb des dichter besiedelten Stadtkerns von Berlin. 

<center>
{% include "macro-image-section-small.html", src:"/assets/images/luftgüte_api_stations.png", caption:"Die obige Auswahl liefert die Werte für aktive Messtationen in Vororten" %}
</center>
<br>

Die resultierende URL spiegelt die verschiedenen Elemente unserer [Abfrage bzw. Request](https://luftdaten.berlin.de/api/stations?active=true&include_hidden=true&stationgroup_codes%5B%5D=suburb) wider:  und kann auch direkt in den Browser eingegeben, geteilt oder weiterverschickt werden. Der erste Eintrag beispielsweise zeigt Informationen zur Messtation in Marienfelde, mitsamt Stations-ID (“mc027”), Adresse ("12307 Berlin, Schichauweg 60”), gemessenen Komponenten, und einem Link zu einem kurzen [Informationsblatt](https://www.stadtentwicklung.berlin.de/umwelt/umweltatlas/extra/3_12/d312_MC027.htm) über die Messtation auf der Seite der Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen.

<center>
{% include "macro-image-section-small.html", src:"/assets/images/luftgüte_browser.png", caption:"Darstellung des Inhalts der Abfrage im Browser (Mozilla Firefox)" %}
</center>
<br>

Bisher haben wir uns hauptsächlich über die Metadaten, also die Struktur der Daten, informiert. Möchten wir nun tatsächliche Werte für bestimmte Zeiträume abfragen, können wir dies unter dem Reiter “Stationen” und /api/stations/{code}/data tun. Erinnern wir uns an das Beispiel der Station Marienfelde in der vorherigen Abfrage, können wir mit dem ‘code’, also der Eingabe der Stations-ID “mc027”, und einer bestimmten Komponente, beispielsweise “no2”, die Werte für Stickstoffdioxid abfragen. Zusätzliche Eingaben für Zeitperiode (z.B. ‘24h’) und -spanne (’currentmonth’) konkretisieren die Abfrage. Die generierte Abfrage-URL [https://luftdaten.berlin.de/api/stations/mc027/data?core=no2&period=24h&timespan=currentmonth](https://luftdaten.berlin.de/api/stations/mc027/data?core=no2&period=24h&timespan=currentmonth) gibt also die Daten für Stickstoffdioxid pro Tag, erhoben von der Station 027 für den aktuellen Monat, zurück. 

Die angefragten Daten werden als .json-Datei herausgegeben und können nun von Datenverarbeitenden beispielsweise in Visualisierungen eingebunden werden. In ihrer Rohform sehen die Daten mitsamt Zeitstempel so aus:




Die resultierenden Daten können nun auf verschiedene Weise weiterverarbeitet oder visualisiert werden. So funktioniert zum Beispiel die eingangs verlinkte Visualisierung verschiedener Stationen des Berliner Luftgütemessnetzes. Durch das Ausfüllen von Werten unter [https://luftdaten.berlin.de/station/mc027#station-data](https://luftdaten.berlin.de/station/mc027#station-data) generieren Nutzer:innen eine jeweilige API-Abfrage, die sofort als Diagramm angezeigt wird und deren zugrunde liegenden Daten als Excel-Datei heruntergeladen werden können. 

Abschließend zeigt dieses kurze Beispiel, dass sich per API bereitgestellte Daten praktisch und effizient herunterladen und weiterverarbeiten lassen. Zwar erfordert jede API anfänglich eine gewisse Zeit zur Einarbeitung. Sobald man sich allerdings mit dem Aufbau und der Funktionsweise der API vertraut gemacht hat, folgen alle Abfragen einem ähnlichen Schema. Dies spart besonders Zeit für die Datennutzer:innen, die Daten speziell für ihre Zwecke herunterladen können. Gleichzeitig können APIs allerdings auch die datenbereitstellenden Stellen entlasten, da interessierte Personen nicht einzelne Anfragen für Zeiträume und Stationen verfassen müssen, die unter Umständen manuell erfüllt und beantwortet werden.