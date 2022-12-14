---
layout: news
tags: post
title: 1. Vernetzungstreffen zu Parkplatzdaten 
metaDescription: Parkplätze nehmen auf den ersten Blick viel Raum ein. Doch wie können Parkplatzdaten erfasst und genutzt werden? Um sich diesen Fragestellungen zu nähern fand ein erstes Vernetzungstreffen zwischen verschiedenen Initiativen und Vertreter:innen der Berliner Verwaltung statt.
categories: aktuelles
visible: true
urlText: Zum Blogbeitrag
---
# Beim 1. Parkplatz-Vernetzungstreffen kommen Ehrenamt und Verwaltung zusammen

Das Interesse am ersten Vernetzungstreffen zu Parkplatzdaten am 22.11.22 war groß. Der Eventraum im CityLAB füllte sich trotz später Uhrzeit bis auf den letzten Platz. Mehrere ehrenamtliche Initiativen sowie Vertreter:innen der Verwaltung folgten der Einladung von Hans Hack (ODIS) und Professor Sebastian Meier (FH Potsdam). **Alle Teilnehmer:innen einte der Wunsch sich eine Übersicht über die bestehende Datenlage zu Parkplätzen und mögliche Anwendungsfälle zu verschaffen und sich auszutauschen.** 

## Die Initiativen stellen sich vor

**Vielerorts fehlt es an einer guten Datengrundlage und an systematisches Wissen, wo es wie viele Parkplätze gibt.** Initiativen wollen diese Datenlücke schließen und stellten vor mit welchen Methoden und Werkzeugen Parkplatzdaten erhoben und visualisiert werden können und auf welche Hürden sie stoßen. Hier stellen wir die einzelnen Initiativen kurz vor:

### OSM Parkraum Projekt
Aus der ehrenamtlich aktiven OpenStreetMap-Community wurde ein "Subtraktives Modell" als Datenerhebungsmethodik vorgestellt. Dabei werden verschiedene Elemente wie Parkstreifen, Einfahrten, Parkverbote oder Haltestellen auf Fahrbahnen getagged. Darauf aufbauend wird ein Parkraummodell erstellt und die Daten visualisiert. Am [Beispiel des Bezirks Neukölln](https://strassenraumkarte.osm-berlin.org/about) konnte die OSM-Community 40.000 Stellplätze ermitteln. Nach eigenen Angaben liegt die Datenqualität mit der gewählten Methodik bei 99,9 %. Die Daten stehen als offene Daten zur Verfügung und sind beispielsweise als GeoJSON exportierbar. 


<center>
{% include "macro-image-section-small.html", src:"/assets/images/OSMCommunity.png",  caption:"Ausschnitt aus dem OSM-Tool" %}
</center>
<br>

### Parkplatz Transform 
Aus der Perspektive heraus, dass Parkraum im öffentlichen Raum deutlich zu hohen Stellenwert genießt und eine Transformation von Parkraum hin zu öffentlich nutzbaren Raum notwendig ist, gründete sich 2019 die ehrenamtliche, parteiübergreifende Initiative [Parkplatz Transform](https://www.xtransform.org/) Aufgrund fehlender Parkplatzdaten hat man mit Freiwilligen und lokalen Initiativen auf der Straße Kartierungen organisiert und mithilfe einer App dokumentiert. So konnte eine Sammlung detaillierter Daten in einer Datenbank erreicht werden. Innerhalb des S-Bahnrings konnte die Gesamtzahl der Parkplätze ermittelt werden: 229.249 Kfz-Parkplätze! Parkplatz Transform stellt die Daten (als Open Data) und Kartierungstool auf dieser [Webseite](app.xtransform.org/) bereit.
  

<center>
{% include "macro-image-section-small.html", src:"/assets/images/Parkplatztransform.png",  caption:"Mithilfe der Daten lassen sich zum Beispiel Aussagen über das Verhältnis von Grünfläche und Parkraum treffen" %}
</center>
<br>


### Project Car Tagger
Mitorganisator Hans Hack stellte ein weiteres Datenerhebungsprojekt vor: Das selbst programmierte Tool Car Tagger kann fahrende oder parkende Autos anhand ihres Umrisses mit Satellitenbildern ausfindig machen und markieren. Ein Aufruf an die Community, sich zu beteiligen, führte schließlich dazu, dass auf mittlerweile 50% der Fläche Berlins ca. 500.000 Autos getagged wurden. Wenngleich auch hier wie in vielen Community-Projekten die Datenpflege als große Herausforderung besteht, kann das Tool aufgrund seiner Nachvollziehbarkeit und niedrigschwelligen Einstieg überall genutzt werden und somit eine weitere Datenquelle bieten. Die Daten stehen als offene Daten zur Verfügung. Eine spannende Visualisierung der Daten hat Hans in [dieser Anwendung](https://hanshack.com/howmanycars/?viewRatio=false&zoom=13.084933259369187&lng=13.443490099742121&lat=52.47016553456325) vorgenommen, die das Verhältnis von parkenden und fahrenden Autos in Berlin zeigt. Die genaue Methodik zum Project Car Tagger liegt in diesem [Githup-Repo](https://github.com/hanshack/car-tagging-data-berlin/) ab.


<center>
{% include "macro-image-section-small.html", src:"/assets/images/ParkendeAutos.png",  caption:"Meist sind Autos gar nicht in Bewegung, wie der Kartenausschnit exemplarisch zeigt" %}
</center>
<br>

### Paperplanes 
Etwas visionärer und futuristischer gestaltete sich der Vortrag von [paper planes e.V.](https://www.paper-planes.net/) Der Verein stellt unter dem Leitbild der Stadt der kurzen Wege verschiedene Thesen auf, wie wir in Zukunft leben könnten. Dabei kommt dem öffentlichen Straßenraum eine besondere Rolle zuteil. Denn nach Ansicht von paper planes würde eine Befreiung der Straßen von Autos und damit natürlich auch von Parkplätzen die Chance bieten, das Zusammenleben in der Stadt ganz neu zu gestalten. Einige Ideen werden im Berliner Stadtbild bereits erkennbar, wie zum Beispiel Parklets, die Parkbuchten in Orte des Verweilens und Zusammenkommens umwandeln und damit Alternativen zu Parkräumen entstehen. Für paper planes wäre eine umfassende Datenlage zu Parkplätzen eine wichtige Grundlage für weitere Aktivitäten.

<center>
{% include "macro-image-section-small.html", src:"/assets/images/paperplanes.png",  caption:"Parkplätze werden zu Begegnungsorten." %}
</center>
<br>

### Pasymo – Partizipative System Modellierung

Ein Mobilitätsprojekt aus der Wissenschaft präsentierte  [Pasymo](https://www.fh-potsdam.de/studium-weiterbildung/projekte/pasymo/). Das Forschungsprojekt ist am Institut für angewandte Forschung (IaF) Urbane Zukunft der FH Potsdam angesiedelt mit dem Ziel gemeinsam mit städtischen Akteuren und Bürgerschaft eine Toolbox bestehend aus Modellen, Computersimulationen und Workshop-Konzepten zu entwickeln. Als besonders innovativ gestaltet sich der Ansatz Planungs- und Beteiligungsformate durch die Visualisierung von was-wäre-wenn Szenarien städtischer Entwicklungsprozesse zu ergänzen. Die Forschungsgruppe kann dabei auch auf ein Lastenrad zurückgreifen und mit dem Modell zu Bürgern und politischen Entscheidungsträgern vor Ort gelangen. Auch für das Forschungsprojekt wäre eine gute Datenlage Grundlage für evidenzbasierte Politik und Stadtplanung.

## Perspektiven aus der Berliner Verwaltung
Neben den Gruppen aus Zivilgesellschaft und Wissenschaft, die Daten erfassen oder benötigen, steigt auch in der Berliner Verwaltung das Interesse an einer umfangreichen und verlässlichen Datengrundlage. Denn im Zuge der Verkehrswende wird Verkehrsraum immer stärker neu verteilt. Es kommt vielerorts zu politischen Diskussionen und zu Nutzungskonflikten um den öffentlichen Straßenraum. **Daten über die Anzahl und Verteilung von Auto-Parkplätzen kann daher also eine immer wichtigere Ressource für Diskussionen rund um Verkehrswende, Stadtentwicklung und Mobilität werden.**

### SenUMVK startet mit der Datenerhebung
Mit einer [Parkraumkartierung und Parkdatenanalyse](https://testfeldstadtverkehr.berlin/euvm/parkdatenanalyse/) durch einen externen Dienstleister will die SenUMVK die Datenlücke sukzessive schließen. Dafür soll eine Kartierung von öffentlichen Parkplätzen innerhalb des S-Bahn Rings und angrenzenden Gebieten erfolgen, sowie eine Erfassung von Auslastung, Parkverhalten und Parksuchverkehr vor und nach Einführung von neuen Parkzonen. Gerade mit den dynamischen Daten zum Beispiel zum Parksuchverkehr soll so die Grundlage geschaffen werden, verkehrspolitische Maßnahmen wie zum Beispiel die Einführung von Parkzonen zu bewerten. Aber auch für angrenzende Themen wie die Messung der Luftqualität sollen die Daten herangezogen werden. Aus Open-Data-Sicht erfreulich: Die Kartierungsdaten werden auf der Digitalen Plattform Stadtverkehr ab März 2023 frei zugänglich zur Verfügung gestellt. Und auch die Analysedaten rund um die Einführung der neuen Parkzonen werden 2023 erhoben und voraussichtlich bis Mitte 2024 veröffentlicht. 

<center>
{% include "macro-image-section-small.html", src:"/assets/images/SenUMVK_Parkplatztreffen.png",  caption:"Der gesamte Bereich innerhalb sowie einige Bereiche außerhalb des S-Bahnrings werden kartiert. Teile von Charlottenburg-Wilmersdorf wurden bereits vom zuständigen Bezirk von einem externen Dienstleister kartiert." %}
</center>
<br>

### Auch die Bezirke benötigen Parkplatzdaten
Der Vertreter des Grünflächenamts Friedrichshain-Kreuzberg nannte als letzter Vortragende nochmal seine Wünsche an mögliche Parkplatzdaten. So sollten die Daten eine gewisse Nachvollziehbarkeit haben sowie maschinenlesbar sein, um sie ideal weiternutzen zu können. Die Bezirke benötigen die Daten nicht nur für die Planung und Bewirtschaftung des Straßenraums, sondern auch um Gesetze und Anordnungen umzusetzen. Auch für eine Parkraumbewirtschaftung sind Daten aus seiner Sicht unerlässlich, um Analysen zu den Effekten der Maßnahmen machen zu können. Seit 2022 arbeitet der Bezirk mit der OSM-Community und FixMyCity zusammen, um in einer gemeinsamen Kampagne zusammen mit zivilgesellschaftlichen Akteuren Parkraumdaten für den Bezirk zu erfassen. Teil des Projektes ist auch, die Datenqualität zusammen mit dem Bezirksamt zu prüfen.


## Mit dem Vernetzungstreffen ist der erste Schritt getan

 Die Teilnehmer:innen waren sich im Anschluss an die Impulsvorträge einig: **Aufbauend auf dem ersten Kennenlernen der Akteure und Vorhaben soll ein weiteres Treffen stattfinden, um gemeinsam zu überlegen, wie eine systematische Datenerfassung und Datennutzung möglich wird.** Auch der Vorschlag von Hans Hack alle Initiativen in Berlin auf einer gemeinsamen Plattform zusammenzuführen, wurde begrüßt. Bei Brezeln und kühlen Getränken klang damit das erste Vernetzungstreffen gemütlich aus. Die ODIS freut sich auf die Fortführung des Austauschs und steht gerne wieder als Host bereit!
