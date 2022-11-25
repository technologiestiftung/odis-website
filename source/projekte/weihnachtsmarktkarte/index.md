---
layout: project
tags: project
title: Berliner Weihnachtsmarkt-Finder
blogLinkTitle: "Hier geht's zum Finder"
blogLink: https://weihnachtsmaerkte.odis-berlin.de/
metaDescription: Eine Webkarte mit den Berliner Weihnachtsmärkten zum Erkunden, Planen und Teilen
date: 2022-11-24
visible: true
indexImage: weihnachtsmarktfinder_placeholder2.png
heroImage: weihnachtsmarktfinder_hero.png
---

Welche Weihnachtsmärkte laden an welchen Tagen zum Besuch ein? Wo kann ich mit meinen Kolleg:innenen noch nach 19 Uhr auf eine Tasse Glühwein? Und wo ist der Eintritt kostenlos? Diese und viele weitere Fragen beantwortet der Berliner Weihnachtsmarkt-Finder, der auf offenen Daten basiert und uns in der Vorweihnachtszeit die Stadt auf neue Art und Weise erkunden lässt.
Die ODIS wünscht allen viel Spaß beim Besuch der Berliner Weihnachtsmärkte!

## Hintergrund

Alle Jahre wieder veröffentlicht die Senatsverwaltung für Wirtschaft, Energie und Betriebe (SenWEB) einen [offenen Datensatz zu den Berliner Weihnachtsmärkten](https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte-2021). Bislang existiert aber keine umfassende Übersicht zu Weihnachtsmärkten in Berlin, die es Interessierten erlaubt, das Angebot nach bestimmten Informationen oder persönlichen Bedürfnissen zu filtern und sich diese auf einer Karte anzeigen zu lassen. Auf der Webseite [Hauptstadtportal Berlin.de](ttps://www.berlin.de/weihnachtsmarkt/) kann zwar nach Weihnachtsmärkten gesucht werden, diese Informationen sind aber nur unter einzelnen Artikeln nachzulesen. 

## Was zeigt der Weihnachtsmarkt-Finder?

Auf der Webkarte werden zunächst über 60 Weihnachtsmärkte angezeigt, dargestellt mit einem Stern-Symbol. Mit einem Klick auf den Stern gelangen Nutzer:innen auf weiterführende Informationen wie Adresse, Anfahrt, Webseite, Eintrittspreise und Öffnungszeiten und weitere Informationen. Die zentrale Funktion der Anwendung sind verschiedende Filtermöglichkeiten. So können Nutzer:innen sich zum Beispiel nur Weihnachtsmärkte anzeigen lassen, die kostenlos sind, wo es spannende Attraktionen gibt oder die nah an einer U- Bahn oder S-Bahn liegen. Alle Weihnachtsmärkte, die der Filterung nicht entsprechen, werden danach ausgegraut. Zoomt man tiefer in die Karte rein, werden zusätzlich öffentliche Toilettenstandorte und Haltestationen zu öffentlichen Verkehrsmitteln sichtbar.  Die Anwendung ist so konzipiert, dass sie problemlos mit einem Smartphone bedient werden kann. Zudem können ausgewählte Weihnachtsmärkte über eine Funktion mit Anderen geteilt werden.

## Datengrundlage und Methode

Diese Anwendung basiert komplett auf offenen Daten. Die gezeigten Weihnachtsmärkte stammen aus dem Datensatz [Berliner Weihnachtsmärkte 2022](https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte-2022), der jährlich von der Senatsverwaltung für Wirtschaft, Energie und Betriebe bereitgestellt wird. Dadurch sind nur die der Senatsverwaltung gemeldeten Märkte aufgeführt und es besteht kein Anspruch auf Vollständigkeit. Weiterhin liegen in der Karte [Standorte der öffentlichen Toiletten](https://daten.berlin.de/datensaetze/standorte-der-öffentlichen-toiletten), die sich ebenfalls im Berliner Open Data Portal befinden und regelmäßig durch die Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz aktualisiert werden. Für die Identifizierung der nahelegenen [S-Bahn und U-Bahn-Stationen](https://daten.berlin.de/datensaetze/koordinaten-der-zugangsmöglichkeiten-zu-stationen) wurde ein weiterer offener Datensatz des VBB herangezogen. Weihnachtsmärkte die unter 400m Luftlinie entfernt zu diesen Haltestellen liegen werden entsprechend bei der Filterung “Kurze Wege” ausgegeben. Die Hintergrundkarte basiert auf der [OpenStreetMap](https://www.openstreetmap.de).
Einzelne Weihanchtsmärkte haben lediglich ein Platzhalter-Bild. Dies liegt daran, dass die ODIS nur auf Bilder zurückgreifen will, die in [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:First_steps/Uploading_files/de) liegen, dem zentralen und offenen Medienarchiv. 

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in [diesem](https://github.com/technologiestiftung/weihnachtsmarktkarte) Repository zu finden.
