---
layout: project
tags: project
title: Berliner Weihnachtsmärkte
blogLinkTitle: "Hier geht's zur Karte"
blogLink: https://erfrischungskarte.odis-berlin.de/
metaDescription: Eine Webkarte mit den Berliner Weihnachtsmärkten zum Erkunden, Planen und Teilen
date: 2022-11-24
visible: true
indexImage: placeholder.png
heroImage: erfrischungskarte_hero.png
---

Welche Weihnachtsmärkte kann ich mit meinen Kollegen nach 17 Uhr besuchen? Und wo ist der Eintritt kostenlos? Diese und viele weitere Fragen beantwortet die Berliner Weihnachtsmarktkarte, die auf offenen Daten basiert und uns in der Vorweihnachtszeit die Stadt auf neue Art und Weise erkunden lässt.
Die ODIS wünscht allen viel Spaß bei der Erkundung der Weihnachtsmärkte!

## Hintergrund

Alle Jahre wieder veröffentlicht die Senatsverwaltung für Wirtschaft, Energie und Betriebe (SenWEB) einen [offenen Datensatz zu den Berliner Weihnachtsmärkten](https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte-2021). Bislang existiert aber keine umfassende Übersicht über Weihnachtsmärkte in Berlin, die es Interessierten erlaubt, die Weihnachstmärkte zu erkunden und nach Informationen zu filtern und sich diese in einer Karte anzeigen zu lassen. Auf der Webseite [Hauptstadtportal Berlin.de](ttps://www.berlin.de/weihnachtsmarkt/) kann zwar nach Weihnachtsmärkten gesucht werden, diese Informationen sind aber nur unter einzelnen Artikeln nachzulesen. Eine wirkliche Erkundung der Märkte und Filterung nach individuellen Bedürfnissen ist nicht gegeben. Welche Märkte haben zu meinem Wunschdatum und -zeit offen? Welche sind kostenlos? Und auf welche Attraktionen kann man sich freuen? Diese Fragen lassen sich nun mit der Berliner Weihnachtsmarktkarte der ODIS leicht beantworten. Zusätzlich wird die Karte um weitere offen verfügbare Daten wie Toilettenstandorten und Sitzbänken ergänzt.

## Was zeigt die Weihnachtsmarktkarte?

Auf der Webkarte werden zunächst alle Weihnachtsmarkt-Standorte angezeigt. Mit einem Klick auf den einzelnen Weihnachtsmarkt, dargestellt mit einem Stern-Symbol, gelangt die Nutzer:in auf weiterführende Informationen zum Weihnachtsmarkt wie Adresse, Anfahrt, Webseite, Eintrittspreise, Öffnungszeiten und weiteren Informationen. Die zentrale Funktion der Anwendung sind verschiedende Filtermöglichkeiten. Damit lässt sich ein Datum udn ein Öffnungszeitraum mit einem Regler auswählen. Zusätzlich besteht die Möglichkeit nach Weihnachtsmärkten zu filtern, die kostenlos sind sowie nach der Kategorie internationale Weihnachtsmärkte. Entsprechend werden alle Weihnachtsmärkte, die der Filterung nicht entsprechen, ausgegraut. Auf einer ansteuerbaren zusätzlichen Kartenebene werden standardmäßig ÖPNV-Standorte angezeigt. Öffentliche Toilettenstandorte udn Sitzbänke werden durch einen Regler optional einblendbar. Mit dem Haus-Symbol gelangt die Nutzer:in auf die Projektbeschreibung mit weiterführenden Informationen zur Datengrundlage und Funktionalitäten. Die Anwendung ist so konzipiert, dass sie problemlos mit einem Smartphone bedient werden kann. Die Nutzer:in kann zudem einen Kartenausschnitt über eine Funktion mit Anderen teilen.

## Datengrundlage und Methode

Die der Webkarte zugrundeliegenden Informationen basieren in erster Linie auf dem offenen Datensatz zu den Berliner Weihnachtsmärkten 2022, die von SenWEB auf dem Berliner Open Data Portal bereitgestellt wird. Ergänzt wird die Karte durch nützliche Orte. Die Standorte der [öffentlichen Toiletten](https://daten.berlin.de/datensaetze/standorte-der-öffentlichen-toiletten) finden sich ebenfalls im Berliner Open Data Portal und werden regelmäßig durch die Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz aktualisiert. Die Standorte der Sitzbänke wurden aus Open Street Map exportiert, einer frei zugänglichen Sammlung von Geodaten. Die ÖPNV-Standorte sind standardmäßig in der Kartengrundlage vorhanden. Für die Kartengrundlage wird der Dienst Basemap verwendet. 

Den kompletten, für diese Anwendung aufbereiteten Datensatz findet ihr hier.

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in [diesem](https://github.com/technologiestiftung/weihnachtsmarktkarte) Repository zu finden.
