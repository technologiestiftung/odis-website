---
layout: project
tags: project
title: Berliner Weihnachtsmärkte
blogLinkTitle: "Hier geht's zur Karte"
blogLink: https://erfrischungskarte.odis-berlin.de/
metaDescription: Eine Webkarte mit den Berliner Weihnachtsmärkten zum Erkunden, Planen und Teilen
date: 2022-11-30
visible: true
indexImage: placeholder.png
heroImage: erfrischungskarte_hero.png
---

Die Berliner Weihnachtsmarktkarte bietet allen Interessierten eine Übersicht zu den Angeboten mit weiterführenden Informationen wie Öffnungszeiten, besondere Attraktionen oder Eintrittspreisen. So können Weihnachstmärkte erkundet werden und der Besuch unter Berücksichtigung spezifischer Interessen im Voraus geplant werden. Die Anwendung zeigt das Potenzial offener Daten insbesondere auch durch die Kombination weiterer frei verfügbarer Daten. Damit zeigt die Anwendung, dass mit auf den ersten Blick vermeintlich unspektakulären Daten ein Mehrwert für die Stadtgesellschaft und auch für den Touristenstandort Berlin generiert werden kann. Die ODIS wünscht allen eine besinnliche Weihnachtszeit und viel Spaß auf den Berliner Weihnachtsmärkten.

## Hintergrund

Alle Jahre wieder veröffentlicht die Senatsverwaltung für Wirtschaft, Energie und Betriebe (SenWEB) einen [offenen Datensatz zu den Berliner Weihanchtsmärkten](https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte-2021). Bislang existiert aber keine umfassende Übersicht über Weihnachtsmärkte in Berlin, die es Interessierten erlaubt, die Weihanchstmärkte zu erkunden und nach Informationen zu filtern und sich diese in einer Karte anzeigen zu lassen. Auf der Webseite [Hauptstadtportal Berlin.de](ttps://www.berlin.de/weihnachtsmarkt/) kann zwar nach Weihnachtsmärkten gesucht werden, diese Informationen sind aber nur unter einzelnen Artikeln nachzulesen. Eine wirkliche Erkundung der Märkte und Filterung nach individuellen Bedürfnissen ist nicht gegeben. Wann haben die einzelnen Märkte offen? Kostet der Besuch Eintritt? Und auf welche Attraktionen kann man sich freuen? 
Diese Lücke schließt die ODIS mit der Berliner Weihnachtsmarktkarte. Dabei wird die Karte mit weiteren offen verfügbaren Daten wie Toilettenstandorten und ÖPNV-Standorten kombiniert, um weiteren Bedürfnissen bei einem Weihnachtsmarktbesuch nachzukommen.

## Was zeigt die Weihnachtsmarktkarte?

Auf der Webkarte werden zunächst alle Weihnachtsmarkt-Standorte angezeigt. Mit einem Klick auf den einzelnen Weihnachtsmarkt, dargestellt mit einem Tannenbaum-Symbol, gelangt die Nutzer:in auf weiterführende Informationen zum Weihnachtsmarkt wie Adresse, Anfahrt, Webseite, Eintrittspreise, Öffnungszeiten und weiteren Informationen, die im zugrunde liegende Datensatz enthalten sind. Ein besonderes Feature der Anwendung ist eine Filterfunktion, mit der ein Datum und ein Öffnungszeitraum ausgewählt werden kann. Zusätzlich besteht die Möglichkeit nach Weihanchtsmärkten zu filtern, die kostenlos sind sowie nach der Kategorie internationale Weihnachtsmärkte. Entsprechend werden alle Weihnachtsmärkte, die der Auswahl nicht entsprechen, ausgegraut. Auf einer ansteuerbaren zusätzlichen Kartenebene werden standardmäßig ÖPNV-Standorte angezeigt. Öffentliche Toilettenstandorte sind durch einen Regler optional einblendbar. Die Karte verfügt auch über eine Projektbeschreibung und begleitende Textbeschreibungen zu den Funktionen Daten. Die Anwendung ist so konzipiert, dass sie problemlos mit einem Smartphone bedient werden kann. Die Nutzer:in kann zudem einen Kartenausschnitt über eine Funktion mit Anderen teilen.


## Datengrundlage und Methode

Die der Webkarte zugrundeliegenden Informationen basieren im Wesentlichen auf dem offenen Datensatz zu den Berliner Weihnachtsmärkten 2022, die von SenWEB auf dem Berliner Open Data Portal bereitgstellt wird. 

Ergänzt wird die Karte durch mit einem Weinhanchtsmarktbesuch nützlichen Orten. Die Daten zu den ÖPNV-Haltestellen wurden aus einem Datensatz zum [ÖPNV-Haltestellen](https://daten.berlin.de/datensaetze/grünanlagenbestand-berlin-einschl-der-öffentlichen-spielplätze-grünanlagen-wfs) wird durch die bezirklichen Straßen- und Grünflächenämter gepflegt und im Berliner Geodatenportal zur Verfügung gestellt. Die Standorte der [öffentlichen Toiletten](https://daten.berlin.de/datensaetze/atkis-sonstiges-bauwerk-oder-sonstige-einrichtung-punkte-wfs)
finden sich ebenfalls im Geodatenportal, und sind Bestandteil des umfangreichen ATKIS-Datensatzes, der regelmäßig durch die bezirklichen Vermessungsämter aktualisiert wird.

Den kompletten, für diese Anwendung aufbereiteten Datensatz findet ihr hier.

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in [diesem](https://github.com/technologiestiftung/weihnachtsmarktkarte) Repository zu finden.
