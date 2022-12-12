---
layout: news
tags: post
title: 1. Vernetzungstreffen zu Parkplatzdaten 
metaDescription: Parkplätze nehmen auf den ersten Blick viel Raum ein. Doch wie können Parkplatzdaten erfasst und genutzt werden? Um sich diesen Fragestellungen zu nähern fand ein erstes Vernetzungstreffen zwischen verschiedenen Initiativen und Vertreter:innen der Berliner Verwaltung statt.
categories: aktuelles
visible: true
urlText: Zum Blogbeitrag
---
# Große Resonanz und spannende Impulse beim ersten Vernetzungstreffen zu Parkplatzdaten im CityLAB

Das Interesse an dem ersten Vernetzungstreffen zu Parkplatzdaten am 22.11.22 war groß. Der Eventraum im CityLAB füllte sich trotz später Uhrzeit bis auf den letzten Platz. Mehrere Initiativen sowie Vertreter:innen der Verwaltung folgten der Einladung von Hans Hack von der ODIS und Sebastian Meier, Professor für die Gestaltung von Wissensvermittlung an der FH Potsdam. Alle Teilnehmer:innen einte der Wunsch sich eine Übersicht über die bestehene Datenlage zu Parkplätzen in der Stadt zu verschaffen und sich auszutauschen. 

## Die Initiativen stellen sich vor

Vielerorts fehlt es an einer guten Datengrundlage und es fehlt an systematischen Wissen, wo es wie viele Parkplätze gibt. Initiativen wollen diese Datenlücke schließen und stellten vor mit welchen Methoden und Werkzeugen Parkplatzdaten erhoben und visualisiert werden können und auf welche Hürden sie stoßen. Hier stellen wir die einzelnen Initiativen vor:

### OSM Parkraum Projekt
Aus der ehrenamtlich aktiven OpenStreetMap-Community wird ein "Subtraktives Modell" als Datenerhebungsmethodik vorgestellt. Dabei werden verschiedene Elemente wie Parkstreifen, Einfahrten, Parkverbote oder Haltestellen auf Fahrbahnen getagged. Darauf aufbauend wird ein Parkraummodell erstellt und die Daten Visualisiert. Am  [Beispiel des Bezirks Neukölln](https://strassenraumkarte.osm-berlin.org/about) konnte die OSM-Community 40.000 Stellpätze ermitteln, was 6,5 Prozent der Gesamtfläche des Bezirks entspricht. Nach eigenen Angaben liegt die Datenqualität mit der gewählten Methodik bei 99,9 %. Die Daten stehen als offene Daten zur Verfügung und sind besiepislweise als Geojsn exportierbar. Seit 2022 haben sich Aktive aus der OSM-Community mit dem Bezirksamt Friedrichshain-Kreuzberg (Xhain) und FixMyCity zusammengeschlossen, um in einer gemeinsamen Kampagne zusammen mit zivilgesellschaftlichen Akteuren Parkraumdaten für Xhain zu erfassen. Teil des Projektes ist auch, die Datenqualität zusammen mit dem Bezirksamt zu prüfen.

[Hier](https://parkraum.osm-verkehrswende.org/) gehts zur Präsentation.

<center>
{% include "macro-image-section-small.html", src:"/assets/images/OSMCommunity.png",  caption:"Ausschnitt aus dem OSM-Tool" %}
</center>
<br>

### Parkplatz Transform 
Aus der Perspektive heraus, dass Parkraum im öffentlichen Raum deutlich zu hohen Stellenwert genießt und eine Transformation von Parkraum hin zu öffentlich nutzbaren Raum notwendig ist, gründetete sich 2019 die ehrenamtliche, parteiübergreifende Initiative [Parkplatz Transform](https://www.xtransform.org/) Aufgrund fehlender Parkplatzdaten hat man mit Freiwilligen und lokalen Initiativen auf der Straße Kartierungen organisiert und mithilfe einer App dokumentiert. So konnte eine Sammlung detaillierter Daten in einer Datenbank erreicht werden. Innerhalb des S-Bahnrings konnte die Gesamtzahl der Parkplätze ermittelt werden: 229.249 Kfz-Parkplätze! Parkplatz Transform stellt die Daten (als Open Data) und Kartierungstool auf dieser [Webseite](app.xtransform.org/) bereit.
  
[Hier](https://docs.google.com/presentation/d/1fB2jyy-_FIl_ueetVBwP6WTOk46wKjc6EEnMorLRR98/edit#slide=id.g16ec39b1b53_0_0/) gehts zur Präsentation.

<center>
{% include "macro-image-section-small.html", src:"/assets/images/Parkplatztransform.png",  caption:"Mithilfe der Daten lassen sich zum Beispiel Aussagen über das Verhältnis von Grünfläche und Parkraum treffen" %}
</center>
<br>


### Project Car Tagger
Mitorganisator Hans Hack stellte ein weiteres Datenerhebungsprojekt vor: Car Tagger ist eim Tool, dass er programmiert hat, um fahrende oder parkende Autos anhand ihres Umrisses mit Satellitenbildern ausfindig zu machen und zu markieren. Ein Aufruf an die Community, sich zu beteiligen, führte schließlich dazu, dass mittlerweile 50% der Fläche Berlins ca. 500.000 Autos getagged wurden. Wenngelich auch hier wie in vielen Community-Projekten die Datenpflege als große Herausforderung besteht, kann das Tool aufgrund seiner Nachvollziehbarkeit und niedrigschwelligen Einstieg überall genutzt werden und somit eine weitere Datenquelle bieten. Die Daten stehen als offene Daten zur Verfügung. Eine spannende Visualiserung der Daten hat Hans in [dieser Anwendung](hhttps://hanshack.com/howmanycars/?viewRatio=false&zoom=13.084933259369187&lng=13.443490099742121&lat=52.47016553456325) vorgenommen, die das Verhältnis von parkenden und fahrenden Autos in Berlin anzeigt.

[Hier](https://docs.google.com/presentation/d/1Fl1ojF1nl01fnM8WdUI4JA4WP-k0fnCN-4FK7kwbLOY/edit#slide=id.g194b3b5c622_0_11/) gehts zur Präsentation.
Die genaue Methodik zum Project Car Tagger liegt in diesem [Githup-Repo](github.com/hanshack/car-tagging-data-berlin/) ab.

<center>
{% include "macro-image-section-small.html", src:"/assets/images/ParkendeAutos.png",  caption:"Meist sind Autos gar nicht in Bewegung, wie der Kartenausschnit exemplarisch zeigt" %}
</center>
<br>

### Paperplanes 
Etwas visionärer und futuristischer gestaltete sich der Vortrag von [paper planes e.V.] (https://www.paper-planes.net/) Der Verein stellt unter dem Leitbild der Stadt der kurzen Wege verschiedene Thesen auf, wie wir in Zukunft leben könnten. Dabei kommt dem öffentlichen Straßenraum eine besondere Rolle zuteil. Denn nach Ansicht von paper planes würde eine Befreiung der Straßen von Autos und damit natürlich auch von Parkplätzen die Chance bieten, das Zusammeneleben in der Stadt ganz neu zu gestalten. Einige Ideen werden im Berliner Stadtbild bereits erkennbar wie zum Beispiel Parklets, die Parkbuchten in Orte des Verweilens und Zusammenkommens umwandeln und damit Alternativen zu Parkräumen entstehen. Für paper planes wäre eine umfassende Datenlage zu Parkplätzen eine wichtige Grundlage für weitere Aktivitäten.

[Hier](src:"/assets/file-download/preasentation_paperplanes.pdf") gehts zur Präsentation.

<center>
{% include "macro-image-section-small.html", src:"/assets/images/paperplanes.png",  caption:"Parkplätze werden zu Begegnungsorten." %}
</center>
<br>

### Pasymo – Partizipative System Modellierung

Ein Mobilitätsprojekz aus der Wissenschaft präsentierte Pasymo. Das Forschungsprojekt ist am Institut für angewandte Forschung (IaF) Urbane Zukunft der FH Potsdam angesiedelt mit dem Ziel gemeinsam mit städtischen Akteuren und Bürgerschaft eine Toolbox bestehend aus Modellen, Computersimulationen und Workshop-Konzepten zu entwickeln. Als besonders innovativ gestaltet sich der Ansatz Planungs- und Beteiligungsformate durch die Visualisierung von was-wäre-wenn Szenarien städtischer Entwicklungsprozesse zu ergänzen. Die Forschungsgruppe kann dabei auch auf ein Lastenrad zurückgreifen und mit dem Modell zu den Bürgern und politischen Entscheidungsträgern vor Ort gelangen. Auch für das Forschungsprojekt wäre eine gute Datenlage Grundlage für evidenzbasierte Politik und Stadtplanung

[Hier](https://www.fh-potsdam.de/studium-weiterbildung/projekte/pasymo/) gehts zum Forschungsprojekt. 

## Perspektiven aus der Berliner Verwaltung
Neben den Gruppen aus Zivilgesellschaft und Wissenschaft, die Daten erfassen oder benötigen, steigt auch in der Berliner Verwaltung das Interesse an einer umfangereichen und verlässlichen Datengrundlage. Denn im Zuge der Verkehrswende wird Verkehrsraum immer stärker neu verteilt, es kommt vielerorts zu politischen Diskussionen und zu Nutzunksfonflikten um den öffentlichen Straßenraum. Daten über die Anzahl und Verteilung von Auto-Parkplätzen kann daher also eine immer wichtigere Ressource für Diskussionen rund um Verkehrswende, Stadtentwicklung und Mobilität werden. 

### SenUMVK startet mit der Datenerhebung
Mit einer Parkraumkartierung und Parkdatenanalyse durch einen externen Dienstleister will die SenUMVK die Datenlücke sukzessive schließen. Dafür soll eine Kartierung von öffentlichen Parkplätzen innerhalb des S-Bahn Rings + angrenzenden Gebieten erfolgen sowie eine Erfassung von Auslastung, Parkverhalten und Parksuchverkehr vor und nach Einführung von neuen Parkzonen. Gerade mit den dynamsichen Daten zum Beispiel zum Parksuchverkehr soll so die Grundlage geschaffen werden, verkehrpolotische Maßnahmen wie zum Beispiel die Einführung von Parkzonen zu bewerten. Aus Open Data sicht erfreulich: Die Kartierungsdaten werden auf der Digitalen Plattform Stadtverkehr ab März 2023 frei zugänglich zur Verfügung gestellt. Und auch die Analysedaten rund um die Einführung der neuen Parkzonen werden 2023 erhoben und voraussichtlich bis Mitte 2024 veröffentlicht. 

[Hier](src:"/assets/file-download/Vorstellung_eUVM_Pardatenanalyse.pdf") gehts zur Präsentation.

<center>
{% include "macro-image-section-small.html", src:"/assets/images/SenUMVK_Parkplatztreffen.png",  caption:"Der gesamte Bereich innerhalb sowie einige Bereiche außerhalb des S-Bahnrings werden kartiert. Teile von Charlottenburg-Wilmersdorf wurden bereits vom zuständigen Bezirk von einem externen Dienstleister kartiert." %}
</center>
<br>

### Auch die Bezirke benötigen Parkplatzdaten
Der Vertreter des Grünflächenamtes Friedrichshain-Kreuzberg nannte als letzter Vortragende nochmal seine Wünsche an mögliche Parpkplatzdaten. So sollten die Daten eine gewisse Nachvollziehbarkeit haben sowie maschinenlesabr sein, um sie ideal weiternutzen zu können. Die Bezirke benötigen die Daten nicht nur für die Planung und Bewirtschaftung des Straßenraums sondern auch um Gesetze und Anordnungen umzusetzen. Auch für eine Parkraumbewirtschaftung sind Daten aus seiner Sicht unerlässlich um Analysen zu den Effekten der Maßnahmen machen zu können.


## Mit dem Vernetzungstreffen ist der erste Schritt getan

 Nachdem ein erster Austausch und ein Überblick über die verschiedenen Aktivitäten rund um das Thema Parkplatdaten erfolgte, waren sich die Teilnehmer:innen einig, dass ein zweites Treffen wünschenswert ist, um vertieft gemeinsam zu überlegen, wie eine systematische Datenerfassung und Datennutzung möglich wird und um weiter im Austausch zu bleiben. Bei Brezeln und kühlen Getränken klang damit das erste Vernetzungstreffen gemütlich aus. Die ODIS freut sich auf die Fortführung des Dialogs!
