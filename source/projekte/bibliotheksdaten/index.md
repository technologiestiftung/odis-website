---
layout: project
tags: project
title: Dashboard der Stadtbibliothek Pankow
blogLinkTitle: "Hier geht's zum Dashboard"
blogLink: https://bibliotheksdaten.odis-berlin.de/pankow/
metaDescription: Ein interaktives Dashboard als Analysetool für offene Bibliotheksdaten
date: 2023-03-14
visible: true
indexImage: placeholder.png
heroImage: bibdaten_hero.png
---

Welches Buch wurde am häufigsten entliehen? In welchem Pankower Kiez wohnen die meisten bzw. aktivsten Bibliotheksnutzer:innen? Wie werden die Bibliotheken über den Jahresverlauf genutzt? Sind Disney-Medien oder "Die drei Fragezeichen" beliebter? Diese und eine Vielzahl weiterer Fragen können anhand der offenen Daten zu Ausleihen der Pankower Stadtbibliothek 2022 beantwortet werden. 

Wir haben die Veröffentlichung dieses umfassenden Datensatzes zum Anlass genommen, in einem **interaktiven Dashboard** die Daten exemplarisch auszuwerten und zu visualisieren. Das Dashboard kann insbesondere für die Stadtteilbibliothek ein wirklungsvolles **Analyseinstrument** darstellen, das eine leichte Abfrage und Analyse der Daten ermöglicht. So kann die Stadtteilbibliothek Rückschlüsse auf das Nutzungsverhalten der Berliner:innen ziehen und das Angebot der Bibliothek auf die Bedarfe anpassen.


## Hintergrund
Die Leitung der Janusz-Korczak-Bibliothek in Pankow startete im vergangenen Jahr mit dem Vorhaben, **Bibliotheksdaten als offene Daten bereitzustellen**. In der Zusammenarbeit zwischen der Stadtteilbibliothek Pankow, dem bezirklichen Open-Data-Beauftragten Karsten Gartner und der ODIS konnte ein interessanter Datensatz auf dem Open Data Portal veröffentlicht werden, der Informationen zu über 1,5 Mio. Ausleihen und Verlängerungen in Pankower Bibliotheken im Jahr 2022 beinhaltet. Wie wir im Vorfeld der Veröffentlichung den Rohdatensatz aufbereitet und anonymsiert haben, um keine Rückschlüsse auf sensible Daten zuzulassen, ist in unserem [Blogpost](../../aktuelles/2023-03-14-bibliotheksdaten_pankow) nachzulesen.

## Was zeigt das Dashboard?
Das Dashboard zeigt exemplarisch, welche Auswertungen anhand der Daten möglich sind und betrachtet verschiedene Themenbereiche. Den Beginn macht eine Übersicht über die **absoluten Ausleihen und Verlängerungen im Jahr 2022** sowie den **beliebstesten 1.000 Ausleihungen**. Dabei fällt auf: Die beliebstesten Medien sind für Kinder. Eine Übersicht der **Ausleihen nach Medientypen** zeigt, dass die Bibliothek viel mehr im Angebot hat als Bücher. DVDs, Zeitschriften aber auch Audiomedien wie CDs und Tonie-Figuren gehören längst zum Bibliotheksangebot 

Besonders interessant aus Sicht der Stadtteilbliothek ist es, auch zu untersuchen, wo die Menschen gemeldet sind, die die einzelnen Standorte nutzen. In einer Karte werden diese **Standorte sowie die Ausleihen pro Berliner Teilverkehrszelle** dargestellt. Welche Menschen nutzen eigentlich die Bibliothek? Ein Abschnitt zu den persönlichen Merkmalen schlüsselt die **Ausleihen nach Benutzer:innengruppe, Geschlecht und Altersgruppe** auf. Es zeigt sich, dass insbesondere weibliche Personen das Bibliotheksangebot nutzen. Beispielhaft ist außerdem einzusehen, welche Medien von Personen mit Fluchterfahrung am häufigsten ausgeliehen werden.

Die Medien der Bibliothek sind verschiedenen **Sachgruppen** zugeordnet. Die Sachgruppen geben eine Idee davon, welchem Genre das Medium angehört. Eine Tabelle zeigt, wie viele Ausleihen es pro Sachgruppe gab. Auch die Top 50 Autor:innen aus der Sachgruppe 'Roman' oder die Top 6 Sachgruppen im Bereich Sachliteratur lassen sich einsehen. Den Abschluss des Dashboards machen eine Übersicht über die Entwicklung der **Ausleihen im Jahresverlauf** sowie ein paar **spezielle Abfragen**, zum Beispiel zur Anzahl der Ausleihen nach bestimmten Sichwörten oder nach der Art des Ausleih-/Verängerungs-Vorgangs. Dabei zeigt sich, dass im gesamten Jahr 2022 unter 1% der Ausleihen online getätigt wurden, dafür aber 89% der Verlängerungen.

## Datengrundlage und Methode
Die [Daten](https://daten.berlin.de/datensaetze/ausleihen-%C3%B6ffentlichen-bibliotheken-pankow-2022) sowie zugehörigen Schlüsseltabellen und Dokumentationen sind über das Berliner Open Data Portal verfügbar.
Das Dashboard wurde mit der Open-Source-Anwendung [Grafana](https://github.com/grafana/grafana) erstellt. Die Graphen wurden durch SQL-Abfragen generiert. Entsprechend können leicht weitere Auswertungen und angepasste, interne Dashboards z.B. von den einzelnen Stadtteilbibliotheken erstellt und genutzt werden. 