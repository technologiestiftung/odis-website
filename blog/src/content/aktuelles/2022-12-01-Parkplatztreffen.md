---
tags: ["post"]
title: Vernetzungstreffen zu Parkplatzdaten
metaDescription: 1,24 Millionen Autos sind in Berlin zugelassen. Doch die
  Datengrundlage zum Thema Parken ist lückenhaft. Wie viel Raum nehmen Autos im
  Straßenraum ein? Wie können Parkplatzdaten erfasst und genutzt werden? Um sich
  diesen Fragestellungen zu nähern fand ein erstes Vernetzungstreffen zwischen
  verschiedenen Initiativen und Vertreter:innen der Berliner Verwaltung statt.
categories: aktuelles
visible: true
urlText: Zum Blogbeitrag
date: 2022-12-01
---

## Vernetzungstreffen zu Parkplatzdaten: Ehrenamt trifft auf Verwaltung

1,24 Millionen Autos sind in Berlin zugelassen. Wenn sie nicht in einer Garage stehen, parken sie meist im öffentlichen Straßenraum. Eine gute Datengrundlage zum Thema ist wichtig, aber leider sehr lückenhaft.
Kein Wunder also, dass das Interesse am ersten Vernetzungstreffen zu Parkplatzdaten am 22. November 2022 groß war. Der Eventraum im [CityLAB Berlin](https://citylab-berlin.org/de/start/) füllte sich trotz später Uhrzeit bis auf den letzten Platz. Mehrere ehrenamtliche Initiativen sowie Vertreter:innen der Verwaltung folgten der Einladung von Hans Hack (ODIS/CityLAB) und Prof. Dr. Sebastian Meier (FH Potsdam). Die Teilnehmer:innen einte der Wunsch sich eine Übersicht über die bestehende Datenlage zu Parkplätzen zu verschaffen und über mögliche Anwendungsfälle auszutauschen.

## Die ehrenamtlichen Initiativen stellen sich vor

**Wo gibt es wie viele Parkplätze? Vielerorts fehlt es an einer guten Datengrundlage und an systematischem Wissen.** Verschiedene unabhängige Initiativen wollen diese Datenlücke nun schließen. Bein Meetup tauschten sie sich zu Methoden und Werkzeugen aus, mit denen Parkplatzdaten erhoben und visualisiert werden können, sowie über Erfolge und Hürden. Folgende Akteure stellten sich vor:

#### OSM-Verkehrswendegruppe - Mit der OpenStreetMap den Straßenraum kartieren

Die ehrenamtlich aktive OpenStreetMap-Community nutzt ein "Subtraktives Modell" als Datenerhebungsmethodik. Dabei werden verschiedene Elemente wie Parkstreifen, Einfahrten, Parkverbote oder Haltestellen auf Fahrbahnen getagged auf denen nicht geparkt werden darf. Darauf aufbauend wird ein Parkraummodell erstellt und die Daten visualisiert. Am [Beispiel des Bezirks Neukölln](https://strassenraumkarte.osm-berlin.org/about) konnte die OSM-Community 40.000 Stellplätze ermitteln. Nach eigenen Angaben liegt die Datenqualität mit der gewählten Methodik bei 80%. Die Daten stehen offen zur Verfügung und sind unter anderem als GeoJSON exportierbar.

{% render "macro-image-section-small", src:"/images/OSMCommunity.png",  caption:"Ausschnitt aus dem OSM-Tool" %}

<br>

#### Parkplatz Transform - Mit einer App zu mehr Flächengerechtigkeit

Aus der Annahme heraus, dass Parkraum im öffentlichen Raum einen deutlich zu hohen Stellenwert genießt und eine Transformation von Parkraum hin zu öffentlich nutzbaren Raum notwendig ist, gründete sich 2019 die ehrenamtliche, parteiübergreifende Initiative [Parkplatz Transform](https://www.xtransform.org/). Aufgrund fehlender Parkplatzdaten hat man mit Freiwilligen und lokalen Initiativen auf der Straße Kartierungen organisiert und mithilfe einer App dokumentiert. So konnte eine umfassende Datenbank erstellt werden. Innerhalb des S-Bahnrings wurde so eine Gesamtzahl von 229.249 Kfz-Parkplätzen ermittelt! Parkplatz Transform stellt die offenen Daten und das Kartierungstool auf dieser [Webseite](app.xtransform.org/) bereit.

{% render "macro-image-section-small", src:"/images/Parkplatztransform.png",  caption:"Mithilfe der Daten lassen sich zum Beispiel Aussagen über das Verhältnis von Grünfläche und Parkraum treffen" %}

<br>

#### Project Car Tagger - Mit Satellitenbilder Fahrzeuge taggen

Mitorganisator Hans Hack stellte ein weiteres Datenerhebungsprojekt vor: Das selbst programmierte Tool Car Tagger kann fahrende oder parkende Autos anhand ihres Umrisses mit Satellitenbildern ausfindig machen und markieren. Ein Aufruf an die Community, sich zu beteiligen, führte schließlich dazu, dass auf mittlerweile 50% der Fläche Berlins ca. 500.000 Autos getagged wurden. Wenngleich auch hier wie in vielen Community-Projekten die Datenpflege eine große Herausforderung darstellt, kann das Tool aufgrund seiner Nachvollziehbarkeit und niedrigschwelligen Einstiegs überall genutzt werden und somit eine weitere Datenquelle bieten. Die Daten stehen als offene Daten zur Verfügung. Eine spannende Visualisierung der Daten hat Hans in [dieser Anwendung](https://hanshack.com/howmanycars/?viewRatio=false&zoom=13.084933259369187&lng=13.443490099742121&lat=52.47016553456325) vorgenommen, die das Verhältnis von parkenden und fahrenden Autos in Berlin zeigt. Die genaue Methodik zum Project Car Tagger ist auf [Github](https://github.com/hanshack/car-tagging-data-berlin/) zu finden.

{% render "macro-image-section-small", src:"/images/ParkendeAutos.png",  caption:"Meist sind Autos gar nicht in Bewegung, wie der Kartenausschnit exemplarisch zeigt" %}

<br>

#### Paper planes - Mit Parkplatzdaten den Straßenraum neu gestalten

Etwas visionärer und futuristischer gestaltete sich der Vortrag von [paper planes e.V.](https://www.paper-planes.net/). Der Verein stellt unter dem Leitbild der Stadt der kurzen Wege verschiedene Thesen auf, wie wir in Zukunft leben könnten. Dabei kommt dem öffentlichen Straßenraum eine besondere Rolle zuteil. Denn nach Ansicht von paper planes würde eine Befreiung der Straßen von Autos und damit natürlich auch von Parkplätzen die Chance bieten, das Zusammenleben in der Stadt ganz neu zu gestalten. Einige Ideen werden im Berliner Stadtbild bereits erkennbar, wie zum Beispiel Parklets, die Parkbuchten in Orte des Verweilens und Zusammenkommens umwandeln. Für paper planes wäre eine umfassende Datenlage zu Parkplätzen eine wichtige Grundlage für weitere Aktivitäten.

#### Pasymo – Mit Daten und Tools Partizipation ermöglichen

Ein Mobilitätsprojekt aus der Wissenschaft präsentierte [Pasymo](https://www.fh-potsdam.de/studium-weiterbildung/projekte/pasymo/). Das Forschungsprojekt ist am Institut für angewandte Forschung (IaF) Urbane Zukunft der FH Potsdam angesiedelt mit dem Ziel gemeinsam mit städtischen Akteuren und Bürgerschaft eine Toolbox bestehend aus Modellen, Computersimulationen und Workshop-Konzepten zu entwickeln. Als besonders innovativ gestaltet sich der Ansatz, Planungs- und Beteiligungsformate durch die Visualisierung von was-wäre-wenn Szenarien städtischer Entwicklungsprozesse zu ergänzen. Die Forschungsgruppe kann dabei auch auf ein Lastenrad zurückgreifen und mit dem Modell zu Bürger:innen und politischen Entscheidungsträger:innen vor Ort gelangen. Auch für das Forschungsprojekt wäre eine gute Datenlage Grundlage für evidenzbasierte Politik und Stadtplanung.

## Perspektiven aus der Berliner Verwaltung

Neben den Gruppen aus Zivilgesellschaft und Wissenschaft, die Daten erfassen oder benötigen, steigt auch in der Berliner Verwaltung das Interesse an einer umfangreichen und verlässlichen Datengrundlage. Denn im Zuge der Verkehrswende muss Verkehrsraum neu verteilt werden. Es kommt vielerorts zu politischen Diskussionen und zu Nutzungskonflikten um den öffentlichen Straßenraum. **Daten über die Anzahl und Verteilung von Auto-Parkplätzen kann daher also eine immer wichtigere Ressource für Diskussionen rund um Verkehrswende, Stadtentwicklung und Mobilität werden.**

#### Die Senantsverwaltung startet mit der Datenerhebung

Mit einer [Parkraumkartierung und Parkdatenanalyse](https://testfeldstadtverkehr.berlin/euvm/parkdatenanalyse/) durch einen externen Dienstleister will die Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz (SenUMVK) die Datenlücke sukzessive schließen. Dafür soll eine Kartierung von öffentlichen Parkplätzen innerhalb des S-Bahn Rings und angrenzender Gebiete erfolgen, sowie eine Erfassung von Auslastung, Parkverhalten und Parksuchverkehr vor und nach Einführung von neuen Parkzonen. Gerade mit den dynamischen Daten zum Beispiel zum Parksuchverkehr soll so die Grundlage geschaffen werden, verkehrspolitische Maßnahmen wie zum Beispiel die Einführung von Parkzonen zu bewerten. Aber auch für angrenzende Themen wie die Messung der Luftqualität sollen die Daten herangezogen werden. Aus Open-Data-Sicht erfreulich: Die Kartierungsdaten sollen auf der Digitalen Plattform Stadtverkehr ab März 2023 frei zugänglich zur Verfügung gestellt werden. Und auch die Analysedaten rund um die Einführung der neuen Parkzonen werden 2023 erhoben und voraussichtlich bis Mitte 2024 veröffentlicht.

{% render "macro-image-section-small", src:"/images/SenUMVK_Parkplatztreffen.png",  caption:"Der gesamte Bereich innerhalb sowie einige Bereiche außerhalb des S-Bahnrings werden kartiert. Teile von Charlottenburg-Wilmersdorf wurden bereits vom zuständigen Bezirk von einem externen Dienstleister kartiert." %}

<br>

#### Auch die Bezirke benötigen Parkplatzdaten

Der Vertreter des Grünflächenamts Friedrichshain-Kreuzberg nannte als letzter Vortragende seine Wünsche an mögliche Parkplatzdaten. So sollten die Daten eine gewisse Nachvollziehbarkeit haben sowie maschinenlesbar sein, um sie ideal weiternutzen zu können. Die Bezirke benötigen die Daten nicht nur für die Planung und Bewirtschaftung des Straßenraums, sondern auch um Gesetze und Anordnungen umzusetzen. Auch für eine Parkraumbewirtschaftung sind Daten aus seiner Sicht unerlässlich, um Analysen zu den Effekten der Maßnahmen machen zu können. Seit 2022 arbeitet der Bezirk mit der OSM-Community und FixMyCity zusammen, um in einer gemeinsamen Kampagne zusammen mit zivilgesellschaftlichen Akteuren Parkraumdaten für den Bezirk zu erfassen. Teil des Projektes ist auch, die Datenqualität zusammen mit dem Bezirksamt zu prüfen.

## Mit dem Vernetzungstreffen ist der erste Schritt getan

Die Teilnehmer:innen waren sich im Anschluss an die Impulsvorträge einig: Aufbauend auf dem ersten Kennenlernen der Akteure und Vorhaben soll ein weiteres Treffen stattfinden, um gemeinsam zu überlegen, wie eine systematische Datenerfassung und Datennutzung möglich wird. Auch der Vorschlag von Hans Hack alle Initiativen in Berlin auf einer gemeinsamen Plattform zusammenzuführen, wurde begrüßt. Bei Brezeln und kühlen Getränken klang damit das erste Vernetzungstreffen gemütlich aus. Die ODIS freut sich auf die Fortführung des Austauschs und steht gerne wieder als Host bereit!
