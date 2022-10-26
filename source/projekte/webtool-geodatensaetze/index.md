---
layout: project
tags: project
title: Tool zur Identifizierung von Geodatensätzen
blogLinkTitle: "Hier geht's zum Webtool"
blogLink: https://ckan-filter-tool.onrender.com
metaDescription: Geodaten automatisiert aus dem Datenportal filtern
date: 2022-10-31
visible: true
indexImage: webtool3.png
heroImage: webtool1.png
link: true
---

Im Berliner Open Data Portal sind Geodaten veröffentlicht, die noch nicht in der Geodateninfrastruktur Berlin (im Berliner Geodatenpotal, dem FIS-Broker) aufgenommen wurden. Im Rahmen der Beauftragung zum [Projekt Geodateninfrastruktur](https://service.berlin.de/verwaltungsgliederung-organigramme/) hat die ODIS ein Tool entwickelt, mit dessen Hilfe eine automatisierte Abfrage, Filterung und Priorisierung von Geodaten aus dem Open Data Portal möglich wird. Damit kann die für die Geodateninfrastruktur zuständige SenSBW potentielle Geodatensätze leichter identifizieren und bekommt eine Entscheidungshilfe zur Hand, um bei der Überführung der Datensätze in die GDI des Landes zu priorisieren. 

Die Abfrage des Datenregisters erfolgt über die CKAN-API. Dafür werden die Metadaten aller Datensatzeinträge für einen bestimmten Zeitraum nach verschiedenen Stichwörtern, durchsucht. Die Ergebnisse der Abfrage werden in einer Tabelle ausgegeben, die filter-, sortier- und editierbar ist. Durch die Spalte zur Priorisierung können die Ergebnisse außerdem bewertet werden. Das Tool macht bereits einen ersten automatischen Priorisierungsvorschlag basierend auf der räumlichen Verfügbarkeit, dem Vorhandensein eines Geoformates und eines klaren Raumbezugs.
Zuletzt kann die Ergebnisliste als XLSX oder CSV-Datei für den weiteren Gebrauch und zum Teilen exportiert werden.

Es gilt zu beachten, dass die automatische Abfrage nur eine erste Annäherung sein kann, die Ergebnisse sollten stets sorgfältig überprüft werden.
