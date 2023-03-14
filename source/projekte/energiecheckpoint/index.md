---
layout: project
tags: project
title: Berliner EnergieCheckpoint
blogLinkTitle: "Hier geht's zur interaktiven Karte"
blogLink: https://energiecheckpoint.odis-berlin.de
metaDescription: Mit einer Webkarte Energieverbauch und Sanierungspotentiale öffentlicher Gebäude erkunden
date: 2023-03-22
visible: true
indexImage: energiecheckpoint_placeholder.png
heroImage: energiecheckpoint_hero.jpeg
---


Wie hoch ist der jährliche Energieverbrauch des Friedrichstadtpalast? Welchen Beitrag zur Energieeinsparung kann die energetische Sanierung des Roten Rathauses leisten? Mit welchem Energieträger wird die Berliner Philharmonie versorgt? 
Der Berliner EnergieCheckpoint visualisiert offene Daten zu Energieverbrauch und Energieeinsparungen öffentlicher Gebäude am Beispiel der Daten der BIM Berliner Immobilien Management GmbH und erlaubt damit eine Erkundung der einzelnen Standorte.

## Hintergrund

Berlin möchte bis spätestens 2045 klimaneutral werden. Dazu ist im [Berliner Klimaschutz- und Energiewendegesetz (EWG Bln)](https://www.berlin.de/sen/uvk/klimaschutz/klimaschutzpolitik-in-berlin/energiewendegesetz/) als Ziel eine Reduktion der Kohlendioxidemissionen um mindestens 95% im Vergleich zum Jahr 1990 festgelegt. Öffentliche Gebäude wie Schulen und Kultureinrichtungen sollen durch Energieeinsparungen und Sanierungen eine Vorbildrolle einnehmen. Doch welche Gebäude verbrauchen wie viel Energie und welche Einsparpotentiale stecken in der Sanierung einzelner Gebäude? 

Als Betreiber öffentlicher Gebäude sind die BIM Berliner Immobilienmanagement GmbH ebenso wie die Bezirke im Rahmen des Berliner Klimaschutz- und Energiewendegesetzes (EWG Bln) verpflichtet zu Energieverbrauchsdaten und Einsparmaßnahmen regemäßig und vollständig zu berichten.

Die ODIS hat sich die vorhandenen offenen Daten angesehen und bemerkt, dass die Datenlage in diesem Bereich in Bezug auf die Aktualität, Kontinuität und Maschinenlesbarkeit ausbaufähig ist. Mit der interaktiven Webkarte „Berliner EnergieCheckpoint“ haben wir daher eine prototypische Anwendung programmiert, die Aufmerksamkeit für das Energiewendegesetz und das Thema Energieeinsparung erzeugen und gleichzeitig als Gesprächsgrundlage zur Verbesserung der (offenen) Datenlage der behördlichen Stellen in den Bereichen Gebäudedaten und Energiemonitoring dienen kann.


## Was zeigt der EnergieCheckpoint?

Auf der Webkarte werden zunächst über 60 Weihnachtsmärkte angezeigt, dargestellt mit einem Stern-Symbol. Mit einem Klick auf den Stern gelangen Nutzer:innen auf weiterführende Informationen wie Adresse, Anfahrt, Webseite, Eintrittspreise und Öffnungszeiten und weitere Informationen. Die zentrale Funktion der Anwendung sind verschiedende Filtermöglichkeiten. So können Nutzer:innen sich zum Beispiel nur Weihnachtsmärkte anzeigen lassen, die kostenlos sind, wo es spannende Attraktionen gibt oder die nah an einer U- Bahn oder S-Bahn liegen. Alle Weihnachtsmärkte, die der Filterung nicht entsprechen, werden danach ausgegraut. Zoomt man tiefer in die Karte rein, werden zusätzlich öffentliche Toilettenstandorte und Haltestationen zu öffentlichen Verkehrsmitteln sichtbar.  Die Anwendung ist so konzipiert, dass sie problemlos mit einem Smartphone bedient werden kann. Zudem können ausgewählte Weihnachtsmärkte über eine Funktion mit Anderen geteilt werden.

## Datengrundlage und Methode

Diese Anwendung basiert auf (eingeschränkt) offenen Daten. Die gezeigten Weihnachtsmärkte stammen aus dem Datensatz [Berliner Weihnachtsmärkte 2022](https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte-2022), der jährlich von der Senatsverwaltung für Wirtschaft, Energie und Betriebe bereitgestellt wird. Dadurch sind nur die der Senatsverwaltung gemeldeten Märkte aufgeführt und es besteht kein Anspruch auf Vollständigkeit. Weiterhin liegen in der Karte [Standorte der öffentlichen Toiletten](https://daten.berlin.de/datensaetze/standorte-der-öffentlichen-toiletten), die sich ebenfalls im Berliner Open Data Portal befinden und regelmäßig durch die Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz aktualisiert werden. Für die Identifizierung der nahelegenen [S-Bahn und U-Bahn-Stationen](https://daten.berlin.de/datensaetze/koordinaten-der-zugangsmöglichkeiten-zu-stationen) wurde ein weiterer offener Datensatz des VBB herangezogen. Weihnachtsmärkte die unter 400m Luftlinie entfernt zu diesen Haltestellen liegen werden entsprechend bei der Filterung “Kurze Wege” ausgegeben. Die Hintergrundkarte basiert auf der [OpenStreetMap](https://www.openstreetmap.de).
Einzelne Weihanchtsmärkte haben lediglich ein Platzhalter-Bild. Dies liegt daran, dass die ODIS auf Bilder zurückgreifen will, die in [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:First_steps/Uploading_files/de) liegen, dem zentralen und offenen Medienarchiv. 

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in [diesem](https://github.com/technologiestiftung/energiekarte) Repository zu finden.
