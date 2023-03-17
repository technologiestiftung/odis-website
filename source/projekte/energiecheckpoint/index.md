---
layout: project
tags: project
title: Berliner EnergieCheckpoint
blogLinkTitle: "Hier geht's zur Anwendung"
blogLink: https://energiecheckpoint.odis-berlin.de
metaDescription: Mit einer Webkarte Energieverbauch und Sanierungspotentiale öffentlicher Gebäude erkunden
date: 2023-03-22
visible: true
indexImage: energiecheckpoint_placeholder2.png
heroImage: energiecheckpoint_hero.jpeg
---


Wie hoch ist der jährliche Energieverbrauch des Friedrichstadtpalast? Welchen Beitrag zur Energieeinsparung kann die energetische Sanierung des Roten Rathauses leisten? Mit welchem Energieträger wird die Berliner Philharmonie versorgt? 
Der **Berliner EnergieCheckpoint öffnet Daten zu Energieverbrauch und Energieeinsparungen öffentlicher Gebäude** am Beispiel der Daten der BIM Berliner Immobilien Management GmbH und visualisiert diese über einzelne Standorte auf einer Berlin-Karte. 

## Hintergrund

Berlin möchte bis spätestens 2045 klimaneutral werden. Dazu ist im [Berliner Klimaschutz- und Energiewendegesetz (EWG Bln)](https://www.berlin.de/sen/uvk/klimaschutz/klimaschutzpolitik-in-berlin/energiewendegesetz/) als Ziel eine Reduktion der Kohlendioxidemissionen um mindestens 95% im Vergleich zum Jahr 1990 festgelegt. Öffentliche Gebäude wie Schulen und Kultureinrichtungen sollen durch Energieeinsparungen und Sanierungen eine Vorbildrolle einnehmen. Doch welche Gebäude verbrauchen wie viel Energie und welche Einsparpotentiale stecken in der Sanierung einzelner Gebäude? 

Die ODIS hat sich die vorhandenen offenen Daten angesehen und bemerkt, dass die Datenlage in diesem Bereich in Bezug auf die Aktualität, Kontinuität und Maschinenlesbarkeit ausbaufähig ist. Mit der interaktiven Webkarte „Berliner EnergieCheckpoint“ haben wir daher eine prototypische Anwendung programmiert, die Aufmerksamkeit für das Energiewendegesetz und das Thema Energieeinsparung erzeugen und gleichzeitig als Gesprächsgrundlage zur Verbesserung der (offenen) Datenlage der behördlichen Stellen in den Bereichen Gebäudedaten und Energiemonitoring dienen kann.


## Was zeigt der EnergieCheckpoint?

Der EnergieCheckpoint visualisiert die von der BIM Berliner Immobilienmanagement GmbH regelmäßig veröffentlichten Energieverbrauchsdaten und Einsparmaßnahmen für über 300 Standorte wie Schulen, Feuerwehren oder Kultureinrichtungen.

Mit einem Klick auf einen Standort erhalten Nutzer:innen Informationen zum Gebäudetyp, Wärme bzw. Energieverbrauch oder Art der Wärmeversorgung (Gas, Fernwärme etc.). 

Prinzipiell lassen sich die Verbrauchsinformationen über einen Button zwischen Wärme- und Stromverbrauch jederzeit umschalten. Die Ranking-Funktion erlaubt es, die Karte weiter zu explorieren und die Einrichtungen nacheinander durchzugehen. Es kann zur Liegenschaft mit dem nächsthohen bzw. nächstniedrigen Verbrauch gesprungen werden. Für ein besseres Verständnis wird der Stromverbrauch der einzelnen Standorte mit dem Verbrauch eines durchschnittlichen Fünfpersonenhaushalts verglichen. 
Je Gebäude oder Gebäudeteile der Liegenschaft werden darüber hinaus Sanierungsdaten angezeigt, die Kosten und Flächen der Sanierungsvorhaben darstellen. Die farbige Fläche markiert die geschätzte Fläche der Liegenschaft, ist aber nur eine Annäherung, da sich Gebäude auch außerhalb der Fläche befinden können.

Mit verschiedenen Filterfunktionen lassen sich die die öffentlichen Einrichtungen nach bestimmten Merkmalen eingrenzen und anzeigen, wie zum Beispiel nach dem Gebäudetyp "Schulen", nach Gebäuden die über Gas beheizt werden oder nach Gebäuden mit besonders hohem Einsparpotential. Die Filterauswahl lässt sich als CSV-Datei exportieren.

Für einen leichteren Einstieg in die Anwendung wird bei einem Klick auf Erkunden in der Infobox eine neunteilige Tour angeboten, bei der die einzelnen Funktionen genauer erklärt und eingeordnet werden. 

Die Anwendung ist so konzipiert, dass in der Ansicht zwischen der 2D-Perspektive und der Liegenschafts-Perspektive gewechselt werden kann. Die Anwenung kann problemlos mit einem Smartphone bedient werden.

## Datengrundlage und Methode

**Diese Anwendung basiert komplett auf (eingeschränkt) offenen Daten der BIM Berliner Immobilienmanagement GmbH**, die jährlich unter [Berichte und Reports](https://www.bim-berlin.de/presse/publikationen/) die Energieverbrauchsübersicht und den Sanierungsfahrplan als PDF-Dateien veröffentlichen. Die Daten liegen (noch) nicht als maschinenlesbare Daten auf dem Berliner Datenportal bereit, weswegen wir in diesem Fall von eingeschränkt offenen Daten sprechen. Die aktuelle Energieverbrauchsübersicht liegt für 2020 vor, die Daten zum Sanierungsfahrplan haben den Stand 04.05.2022. Um die einzelnen Adresspunkte zu Grundstücken zuordnen zu können, haben wir offene Daten zu ALKIS verwendet. Für drei Adressen (Wallstr. 32’, WRD Feuerwehr SILB, Dorfstr. 3) konnten nur Sanierungsdaten angezeigt werden.

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in [diesem](https://github.com/technologiestiftung/energiekarte) Repository zu finden.


### Hinweis zur eingeschränkten Aussagekraft der Sanierungsdaten

*Der Sanierungsfahrplan, der eine zielorientierte Abarbeitungsreihenfolge der erforderlichen Gebäudesanierungen aufzeigt, dient den Bezirken und der BIM als strategisches Instrument bei der Sanierungsplanung. Die hierin enthaltene Grobkostenschätzung stellt lediglich eine überschlägige informative Angabe zum Anteil der energetischen Sanierungskostenanteile dar und entspricht dem Stand der Erstellung des Sanierungsfahrplans. Über eine energetische Sanierung hinausgehende Sanierungs- und Modernisierungsbedarfe, die im Rahmen einer Gebäudesanierung mit umgesetzt werden, sind hier kostenseitig nicht enthalten. Gleiches gilt für Planungskosten sowie markt- bzw. inflationsbedingte Kostensteigerungen. Die tatsächlichen Sanierungskosten können somit abhängig vom Beginn und Umfang der konkreten Sanierungsmaßnahmen davon abweichen.*


