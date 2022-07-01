---
layout: project
tags: project
title: Was kostet wo wie viel?
metaDescription: Ideation für eine interaktive Visualisierung offener Verwaltungsdaten
date: 2022-03-28
visible: true
indexImage: thumb_image.png
heroImage: hero_image.png
datatable: true
---

## Offene Daten bereitstellen und präsentieren: Von der PDF zur Storytelling-Anwendung 

Der Betrieb von Bildungseinrichtungen, die Instandhaltung der Infrastruktur oder die Verfolgung von Straftaten: Im alltäglichen Leben der Berliner Bürger:innen übernimmt die Verwaltung eine Vielzahl wichtiger Aufgaben. Im Jahr 2021 beispielsweise konnten Hauptverwaltungen und Bezirke mit rund 32 Mrd. Euro für ihre Dienstleistungen aus dem Haushalt planen.  
<br> 
 
### Die Ausgangslage 
 
Informationen darüber bereitzustellen, wo wieviel öffentliche Gelder ausgegeben werden, ist ein wichtiger Aspekt im Sinne einer transparent agierenden Verwaltung. Die Senatsverwaltung für Finanzen (SenFin) veröffentlicht daher seit dem Jahr 2000 jährlich die Broschüre [„Was kostet wo wie viel?”](https://www.berlin.de/sen/finanzen/haushalt/downloads/artikel.6347.php) zum Download im Internet. Darin werden auf knapp 70 PDF-Seiten Verwaltungskosten aufgeschlüsselt nach Bezirken und Fachbereichen dargestellt. 
 
Ein Blick in die Broschüre zeigt aber: Die Übersichtlichkeit und Anordnung der Daten sowie die Vergleichbarkeit zwischen Verwaltungseinheiten und Themenfeldern werden einer modernen, digitalen Datenpräsentation nicht gerecht. Aus Open-Data-Sicht problematisch: Die Informationen sind zwar von jeder und jedem einsehbar, liegen aber nicht im eigentlichen Sinne als offene Daten vor. Die reine Veröffentlichung von Daten im PDF-Format erschwert die Weiterverarbeitung. Potentiell interessierte Nutzer:innen, die die Daten für eigene Analysen oder Präsentationsformen verwenden möchten, müssen die Daten umständlich aus der PDF extrahieren oder gar abtippen.  
 <center><a href="https://www.berlin.de/sen/finanzen/haushalt/downloads/wkwwv_hv_2017.pdf">
{% include "macro-image-section-small.html", src:"broschüre.png", caption:"Ausschnitt aus der PDF-Broschüre 'Was kostet wo wie viel?'" %}</a>
</center>
<br>

### Das Vorgehen 
 
Vor diesem Hintergrund haben wir mit der SenFin die Bereitstellung von offenen, maschinenlesbaren Verwaltungsdaten in Kombination mit ansprechenden Präsentationsformen diskutiert. Gemeinsam haben wir einen Vorschlag für eine alternative Darstellungen der Broschüre „Was kostet wo wie viel?“ und eine integrierte Bereitstellung von Daten in offenen Dateiformaten erarbeitet. 
 
**Eine Grundlage schaffen – Datenschema und Datenqualität**  
In einem ersten Schritt wurden ein geeignetes Schema und Datenformat für die zugrunde liegenden Daten abgestimmt. Die SenFin stellte dafür Daten für einen ausgewählten Themenbereich der Broschüre im CSV-Format zur Verfügung und passte diese nach Hinweisen der ODIS an, damit sie später in einer Anwendung leicht weiterverarbeitet werden können. 
 
**Das Problem erkennen und Lösungen finden – Anforderungen und Use-Cases**  
Die erste Grundlage für die Überlegungen zur Datenpräsentation bildete eine Ausarbeitung von Zielgruppen, Zieldefinition und Anforderungen an die Visualisierung durch die SenFin. Darauf basierend arbeitete die ODIS in einem internen Workshop gemeinsam mit Kolleg:innen des CityLAB eine Ideensammlung aus, um mögliche Use-Cases, die Bedürfnisse der Zielgruppen und eine langfristige Zieldefinition des Projekts auf verschiedene Art und Weise zu adressieren. Für die Auseinandersetzung mit dem Thema haben wir uns unter anderem folgende Fragen gestellt:  
- Wie kann man die Informationen der Broschüren präsentieren, um Interesse für das Thema zu fördern? 
- Wie können die Daten leicht verstanden werden und wie beugt man Fehlinterpretation vor? 
- Wie können offene (Roh-)Daten in die Anwendung eingebunden und mit dem Berliner Open Data Portal verknüpft werden? 
- Wie muss die Anwendung aufgebaut sein und wie müssen die Daten standardisiert werden, damit das Einpflegen zukünftiger Daten von den zuständigen Verwaltungsmitarbeiter:innen möglichst einfach und ohne viel Zeitaufwand abläuft?  
 
**Einen Lösungsvorschlag ausarbeiten – Ideation-Phase**  
Im nächsten Schritt entschieden wir uns dafür, eine Variante zur Datenpräsentation mittels „Storytelling” weiter auszuarbeiten. Das Storytelling bietet den Vorteil, dass Informationen besser in einen größeren Kontext gesetzt werden und die Betrachter:innen praktisch mittels eines roten Fadens durch die Daten geführt werden. Im Gegensatz zu einem simplen Daten-Dashboard, erfordert es allerdings deutlich mehr Arbeit in der Konzeption und im Design. Dafür wurde die Story, also die Wahl und Anordnung verschiedene Elemente zur Datenpräsentation (Graphen, Texte, Karten), grob skizziert. Mit Unterstützung eines Interface-Designers der Technologiestiftung Berlin wurde daraus ein sogenannter Wireframe erstellt.  
<br>
 
### Das Ergebnis  
 
Der Wireframe zeigt den konkreten Aufbau, Grafiken und Textbausteine, sowie erste leichte Andeutungen von Design-Elementen (er ist allerdings kein fertiger Designentwurf) für eine Homepage und eine thematische Unterseite für das von SenFin bereitgestellte Datenthema „Bauen, Wohnen, Vermessen und Verkehr”. Die Anwendung kann also für sich alleine stehen, z.B. als eigenständige Website. Die Besucher der Seite werden dabei vom „Groben ins Feine” durch die Daten geführt. Alle Graphen sind interaktiv: Schieberegler und klickbare Karten bieten die Möglichkeit, sowohl die Veränderungen der Kosten über die Zeit als auch im Vergleich zwischen den Bezirken zu betrachten und zu vergleichen. Kurze, präzise Texte setzen die Informationen in den nötigen Kontext und verweisen auf weiterführende Informationen. 
Besonders wichtig ist es aus unserer Sicht, die Daten als Open Data maschinenlesbar zur Verfügung zu stellen. Dies könnte über eine separate Datenbank im Backend realisiert werden. Über eine Programmierschnittstelle werden die Daten in das Frontend geladen, können aber ebenso von interessierten Nutzer:innen mittels eigener Programmcodes abgefragt oder auch als csv-Dateien über Download-Buttons heruntergeladen werden.  
 <center>
{% include "macro-image-section-small.html", src:"wireframe2.png", caption:"Ausschnitt aus dem Wireframe für die interaktiven Datenvisualisierungen" %} </center>
<br> 

### Wie geht’s weiter? 
 
Das Storytelling-Mockup wurde dem Projektteam der SenFin vorgestellt und soll nun als Grundlage dienen, um intern weiter über die Bereitstellung von Open Data und eine moderne Datenpräsentation für Bürger:innen und weitere Zielpersonen zu diskutieren und Veränderungen anzustoßen. Es handelt sich dabei nicht um ein komplett fertiges Konzept oder einen Anforderungskatalog, sondern eher um eine Entscheidungshilfe, um weiter zu überlegen, welche Präsentationsform letztendlich gewünscht ist und ganz konkrete Anforderungen an die Umsetzung zu definieren. Dieser Ansatz kann auch als Anregung für viele andere Datenprojekte und Themen in der Berliner Verwaltung dienen.  

Wir bedanken uns an dieser Stelle bei der SenFin für die Kontaktaufnahme und freuen uns, die Berliner Verwaltungsakteur:innen auch künftig auf dem Weg zu einer modernen, Open Data basierten Verwaltung unterstützen zu können.