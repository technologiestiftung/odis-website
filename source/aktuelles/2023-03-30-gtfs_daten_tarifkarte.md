---
layout: news
tags: post
title: "GTFS-Daten und die Berliner Tarifkarte"
metaDescription: "Offene Daten bilden die Grundlage von Anwendungen wie Routenplanern und Kartendiensten für den öffentlichen Nahverkehr. Dieser Blogpost hebt die Bedeutung des offenen Datenstandards GTFS hervor und stellt die Berliner Tarifkarte vor; eine Visualisierung der ODIS, die räumliche Ausdehnungen verschiedener Tarifzonen des Berliner ÖPNV beleuchtet."
categories: aktuelles
visible: true
urlText: Zum Blogbeitrag
---

# GTFS-Daten und die Berliner Tarifkarte

<br>

Egal ob sich Berliner:innen morgens um 9 Uhr auf dem Weg zur Arbeit oder auf dem Nachhauseweg vom Club befinden. Dienste wie Google Maps, Jelbi oder die Fahrplanauskunft der S-Bahn Berlin ermöglichen es ihnen auf dem schnellsten Weg mit den öffentlichen Verkehrsmitteln von A nach B zu kommen. Dass die Services reibungslos und kostenlos funktionieren, sind auch offenen Daten in einem einheitlichen Dateiformat zu verdanken: GTFS-Daten.
<br><br>

## Was sind GTFS-Daten?

GTFS-Daten (General Transit Feed Specification) bezeichnen ein offenes Format für die Fahrpläne öffentlicher Verkehrsmittel und den zugehörigen geografischen Informationen. Entstanden ist die Idee eines einheitlichen Datenstandards Mitte der 2000er Jahre in den USA als Kooperation zwischen Google und einem Verkehrsunternehmen der Stadt Portland in Oregon, um die Integration von Nahverkehrsdaten in den Kartendienst Google Maps voranzutreiben. Heutzutage besteht ein sogenannter „Feed“, wie er auch auf dem [Berliner Datenportal](https://daten.berlin.de/datensaetze/vbb-fahrplandaten-gtfs) zu finden ist, aus einer Sammlung von sechs bis zu 15 CSV-Dateien, die Informationen über Routen, Haltestellen, Fahrkartenpreise und andere relevante Informationen beinhalten. Gemeinsam bilden diese Dateien eine Struktur, die einer Datenbank ähnelt und das Angebot des Verkehrsverbundes digital abbildet.
<br><br>

## Die Vorteile eines einheitlichen Datenstandards

Wichtig ist die standardisierte Bereitstellung von Daten besonders für Entwickler:innen, die auf ein einheitliches Format angewiesen sind, um Apps und Dienste für den öffentlichen Nahverkehr zu programmieren. Immerhin besteht der Verkehrsverbund Berlin Brandenburg (VBB) aus einem Zusammenschluss von über 30 Verkehrsbetrieben mit über 13.000 Haltestellen in Berlin und Brandenburg. Ohne einheitliches Format und Bereitstellung wäre das Zusammentragen, Formatieren und regelmäßige Aktualisieren von Daten für den gesamten Verkehrsverbund erheblich aufwendiger.

<iframe src="https://tarifkarte.odis-berlin.de/" style="height:70vh;width:100%;" title="Iframe Example"></iframe>

<br><br>

Neben der Integration von ÖPNV-Daten in bestehende Kartendienste und Routenplaner erlauben die offenen GTFS-Daten auch gänzlich neue Darstellungen und Analysen. Ein Beispiel liefert die [Tarifkarte der ODIS](https://tarifkarte.odis-berlin.de/), die eine Übersicht darüber ermöglicht, welche Gebiete des Berliner Umlands durch ein Ticket der Berliner Verkehrsbetriebe (BVG) abgedeckt sind.
<br><br>

## Die Berliner Tarifkarte

Während die Unterteilung Berlins in Tarifbereiche A und B eine verwaltungsrelevante Gliederung der Stadt widerspiegelt, ist die Ausbreitung der äußeren Tarifzone C in das Brandenburger Umland weniger klar definiert. Der Tarifbereich A der BVG mit ihrer ringförmigen S-Bahn-Strecke umschließt seit dem späten 19. Jahrhundert den gemeinhin als Innenstadt definierten Stadtkern Berlins. Die Tarifzone B wiederum verläuft entlang der Grenze des Landes Berlin. Die äußerste Tarifzone C erschließt das Umland Berlins laut [offiziellen Informationen der BVG](https://www.bvg.de/de/abos-und-tickets/tarifzonen-und-tarifbestimmungen) in einem ca. 15km weiten Radius. Ein genauerer Blick auf die Karte zeigt jedoch, dass die genaue Grenze sehr unterschiedlich verläuft. Während die Tarifzone im Norden und Nordosten Berlins, beispielsweise bei Strausberg fast 20km erreicht, liegt sie im Osten und Südosten, zum Beispiel bei Erkner, deutlich unter 15km.

Um die Visualisierung herzustellen wurden GTFS-Daten zur Position der Haltestellen aus dem Open Data Portal mit Informationen über die Tarifbereiche verschnitten. Mit Hilfe eines Voronoi-Diagramms wurde der Raum um Berlin zuerst in Regionen zerlegt. Danach wurden diejenigen wieder zusammengelegt, welche zur Zone C gehören. Die genaue Methodik und den zugrundliegenden Code zur Tarifkarte findest du in unserem [GitHub Repository](https://github.com/technologiestiftung/tarifkarte).

<br>

## Community

Von [eigenen Dateiformaten](https://github.com/public-transport/friendly-public-transport-format) bis [Telegram Chatbots](https://github.com/derhuerst/vbb-telegram) und ganze APIs; Anwendungen, die GTFS- und öffentliche Verkehrsdaten im weiteren Sinne benutzen, basieren vielerorts auf dem ehrenamtlichen Einsatz von Freiwilligen. Für eine beispielhafte Übersicht an Projekten, die in der Community entstanden sind, lohnt sich ein Blick auf die [GitHub Repositories](https://github.com/derhuerst) der jeweiligen Entwickler:innen.

<br>

## Anmerkung

Bei der Erstellung der Karte fiel auf, dass die bereitgestellten GTFS-Daten keine Informationen darüber enthalten, zu welchen Stadttarifen die einzelnen Stationen gehören. Zwar stießen wir nach eigener Recherche auf der Seite der VBB auf eine PDF, welches die Informationen enthält. Allerdings lässt sich die Datei im proprietären (und damit nicht offenen Format) nur schwer weiternutzen. Auf unsere Anfrage, ob diese Informationen maschinenlesbar, offen und unter einer stabilen, sich nicht ändernden URL eröffentlicht werden könnten, wurden wir vom VBB API-Team, welches auch die GTFS-Daten pflegt, unterstützt.
Wir bedanken uns für das Engagement und freuen uns, dass die Informationen nun ebenfalls unter [diesem Link](https://www.vbb.de/fileadmin/user_upload/VBB/Dokumente/API-Datensaetze/vbb-alle-zielorte.csv) abrufbar sind.
<br>
Danke VBB API-Team!
