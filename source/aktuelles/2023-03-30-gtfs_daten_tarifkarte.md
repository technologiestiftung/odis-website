---
layout: news
tags: post
title: "GTFS-Daten und die Berliner Tarifkarte"
metaDescription: "Offene Daten bilden die Grundlage von Anwendungen wie Routenplanern und Kartendiensten für den öffentlichen Nahverkehr. Dieser Blogpost stellt die Bedeutung des offenen Datenstandards GTFS näher und stellt die Berliner Tarifkarte vor; eine Visualisierung der ODIS, die die räumliche Ausdehnung verschiedener Tarifzonen des Berliner ÖPNV beleuchtet."
categories: aktuelles
visible: true
urlText: Zum Blogbeitrag
---

# GTFS-Daten und die Berliner Tarifkarte

<br>

Egal ob sich Berliner:innen morgens um 9 auf dem Weg zur Arbeit oder auf dem Nachhauseweg vom Club befinden, Dienste wie Google Maps, Jelbi, oder die Fahrplanauskunft der S-Bahn Berlin ermöglichen es ihnen, auf dem schnellsten Weg mit den öffentlichen Verkehrsmitteln von A nach B zu kommen. Dass dies reibungslos und kostenlos möglich ist, ist unter Anderem offenen Daten in einem einheitlichen Dateiformat zu verdanken: GTFS-Daten.
<br><br>

## Was sind GTFS-Daten?

GTFS-Daten (General Transit Feed Specification) bezeichnen ein offenes Format für die Fahrpläne öffentlicher Verkehrsmittel und zugehörige geografische Informationen. Geboren war die Idee eines einheitlichen Datenstandards Mitte der 2000er Jahre in den USA als Kooperation zwischen Google und einem Verkehrsunternehmen der Stadt Portland, Oregon, um die Integration von Nahverkehrsdaten in den Kartendienst Google Maps voranzutreiben. Heutzutage besteht ein sogenannter „Feed“, wie er auch auf dem [Berliner Datenportal](https://daten.berlin.de/datensaetze/vbb-fahrplandaten-gtfs) zu finden ist, aus einer Sammlung von sechs bis zu 15 CSV-Dateien, die Informationen über Routen, Haltestellen, Fahrkartenpreise und andere relevante Informationen beinhalten. Gemeinsam bilden diese Dateien eine Datenbank-ähnliche Struktur, die das Angebot des Verkehrsverbundes digital abbildet.
<br><br>

## Die Vorteile eines einheitlichen Datenstandards

Ausschlaggebend ist die standardisierte Bereitstellung von Daten besonders für Entwickler:innen, die auf ein einheitliches Format angewiesen sind, um Apps und Dienste für den öffentlichen Nahverkehr zu betreiben. Immerhin besteht der Verkehrsverbund Berlin Brandenburg (VBB) aus einem Zusammenschluss von über 30 Verkehrsbetrieben mit über 13.000 Haltestellen in Berlin und Brandenburg. Ohne einheitliches Format und Bereitstellung wäre das Zusammentragen, Formatieren und regelmäßige Aktualisieren von Daten für den gesamten Verkehrsverbund erheblich schwerer zu bewerkstelligen.

Neben der Integration von ÖPNV-Daten in bestehende Kartendienste und Routenplaner erlauben die offenen GTFS-Daten auch komplett neue Darstellungen und Analysen. Ein Beispiel liefert die Tarifkarte der ODIS, die eine Übersicht darüber ermöglicht, wie viel des Berliner Umlandes ein Ticket der Berliner Verkehrsbetrieben (BVG) erschließt.
<br><br>

## Die Berliner Tarifkarte

Während die Unterteilung Berlins in Tarifbereiche A und B eine verwaltungsrelevante Gliederung der Stadt widerspiegelt, ist die Ausbreitung der äußeren Tarifzone C in das Brandenburger Umland weniger klar definiert. Der Tarifbereich A der BVG mit ihrer ringförmigen S-Bahn-Strecke umschließt seit dem späten 19. Jahrhundert den gemeinhin als Innenstadt definierten Stadtkern Berlins. Die Tarifzone B wiederum verläuft entlang der Grenze des Landes Berlin. Die äußerste Tarifzone C erschließt das Umland Berlins laut [offiziellen Informationen der BVG](https://www.bvg.de/de/abos-und-tickets/tarifzonen-und-tarifbestimmungen) in einem ca. 15km weiten Radius. Ein genauerer Blick auf die Karte zeigt jedoch, dass die genaue Grenze sehr unterschiedlich verläuft. Während die Tarifzone im Norden und Nordosten Berlins, wie beispielsweise bei Strausberg fast 20 km erreicht, liegt sie im Osten und Südosten, zum Beispiel bei Erkner, deutlich unter 15 km.

<iframe src="https://tarifkarte.odis-berlin.de/" style="height:70vh;width:100%;" title="Iframe Example"></iframe>

<br>

Die Karte läßt sich über folgenden Link auch in einem seperaten Fenster öffnen: [tarifkarte.odis-berlin.de](https://tarifkarte.odis-berlin.de/)

<br><br>
Um die Visualisierung herzustellen, wurden GTFS-Daten zur Position der Haltestellen aus dem Open Data Portal mit Informationen über die Tarifbereiche verschnitten. Mit Hilfe eines Voronoi-Diagramms wurde der Raum um Berlin zuerst in Regionen zerlegt. Danach wurden diejenigen wieder zusammengelegt, welche zur Zone C gehören. Den Code zum Projekt findest du in unserem Github Repository

<br>
Bei der Erstellung der Karte viel auf, dass die GTFS Daten keine Informationen enthalten, zu welchen Stadttarifen die Stationen gehören. Nach eigener Recherche, fanden wir auf der Seite der VBB zwar ein PDF, wo die Informationen enthalten sind, allerdings ist die Datei nicht maschienenlesbar. Die ODIS hat bei der VBB angefragt, ob diese Informationen maschienenlesbar, offen und unter eine stabilen URL (also eine URL die sich nicht ändern sollte) verfügaber sein können. Dank des Engagements des VBB API Teams, welche auch die die GTFS Daten pflegen, finden sich nun die Informationen unter diesem Link:

Danke VBB API Team!
