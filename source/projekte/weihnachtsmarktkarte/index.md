---
layout: project
tags: project
title: Weihnachtsmarktfinder
blogLinkTitle: "Hier geht's zur Karte"
blogLink: https://erfrischungskarte.odis-berlin.de/
metaDescription: Eine Webkarte mit den Berliner Weihnachtsmärkten zum Erkunden, Planen und Teilen
date: 2022-11-24
visible: true
indexImage: placeholder.png
heroImage: erfrischungskarte_hero.png
---

Welche Weihnachtsmärkte kann ich mit meinen Kolleg:innenen nach 17 Uhr besuchen? Und wo ist der Eintritt kostenlos? Diese und viele weitere Fragen beantwortet der Berliner Weihnachtsmarkt-Finder, der auf offenen Daten basiert und uns in der Vorweihnachtszeit die Stadt auf neue Art und Weise erkunden lässt.
Die ODIS wünscht allen viel Spaß beim Besuch der Berliner Weihnachtsmärkte!!

## Hintergrund

Alle Jahre wieder veröffentlicht die Senatsverwaltung für Wirtschaft, Energie und Betriebe (SenWEB) einen [offenen Datensatz zu den Berliner Weihnachtsmärkten](https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte-2021). Bislang existiert aber keine umfassende Übersicht zu Weihnachtsmärkten in Berlin, die es Interessierten erlaubt, das Angebot nach bestimmten Informationen oder persönlichen Bedürfnissen zu filtern und sich diese auf einer Karte anzeigen zu lassen. Auf der Webseite [Hauptstadtportal Berlin.de](ttps://www.berlin.de/weihnachtsmarkt/) kann zwar nach Weihnachtsmärkten gesucht werden, diese Informationen sind aber nur unter einzelnen Artikeln nachzulesen. Welche Märkte haben zu meinem Wunschdatum und -zeit offen? Welche sind kostenlos? Und auf welche Attraktionen kann man sich freuen? Diese Fragen lassen sich nun mit dem Weihnachtsmarktk-Finder der ODIS leicht beantworten. Zusätzlich wird die Karte um weitere offen verfügbare Daten wie Toilettenstandorte und Sitzbänke ergänzt.

## Was zeigt der Weihnachtsmarkt-Finder?

Auf der Webkarte werden zunächst alle Weihnachtsmarkt-Standorte angezeigt. Mit einem Klick auf den einzelnen Weihnachtsmarkt, dargestellt mit einem Stern-Symbol, gelangen Nutzer:innen auf weiterführende Informationen zum Weihnachtsmarkt wie Adresse, Anfahrt, Webseite, Eintrittspreise und Öffnungszeiten und weitere Informationen. Die zentrale Funktion der Anwendung sind verschiedende Filtermöglichkeiten. Damit lassen sich das Datum sowie ein Öffnungszeitraum mit einem Regler auswählen. Zusätzlich besteht die Möglichkeit nach Weihnachtsmärkten zu filtern, die kostenlos sind sowie nach der Kategorie Internationale Weihnachtsmärkte. Alle Weihnachtsmärkte, die der Filterung nicht entsprechen, werden danach ausgegraut. Auf einer ansteuerbaren zusätzlichen Kartenebene werden standardmäßig ÖPNV-Standorte angezeigt. Öffentliche Toilettenstandorte und Sitzbänke werden durch einen Regler optional einblendbar. Mit dem Haus-Symbol gelangen Nutzer:innen auf die Projektbeschreibung mit weiterführenden Informationen zur Datengrundlage und Funktionalitäten. Die Anwendung ist so konzipiert, dass sie problemlos mit einem Smartphone bedient werden kann. Zudem können ausgewählte Weihnachtsmärkte über eine Funktion mit Anderen geteilt werden.

## Datengrundlage und Methode

Die der Webkarte zugrundeliegenden Informationen basieren in erster Linie auf dem offenen Datensatz zu den Berliner Weihnachtsmärkten 2022, der von SenWEB auf dem Berliner Open Data Portal bereitgestellt wird. Ergänzt wird die Karte durch Daten zu Orten, die in diesem Kontext hilfreich sein könnten. Wie etwa die Standorte der [öffentlichen Toiletten](https://daten.berlin.de/datensaetze/standorte-der-öffentlichen-toiletten), die sich ebenfalls im Berliner Open Data Portal befinden und regelmäßig durch die Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz aktualisiert werden. Die Standorte der Sitzbänke wurden aus Open Street Map exportiert, einer frei zugänglichen Sammlung von Geodaten. Die ÖPNV-Standorte sind standardmäßig in der Kartengrundlage vorhanden. Für die Kartengrundlage wird der Dienst Basemap verwendet. 

Den kompletten, für diese Anwendung aufbereiteten Datensatz findet ihr hier.

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in [diesem](https://github.com/technologiestiftung/weihnachtsmarktkarte) Repository zu finden.
