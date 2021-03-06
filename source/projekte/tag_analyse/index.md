---
layout: project
title:  Netzwerkanalyse von Metadaten-Tags
blogLinkTitle: 
blogLink: 
metaDescription: Analyse der meist genutzten Tags im Berliner Open Data Portal.
date: 2021-03-16
visible: true
indexImage: thumbnail.png
heroImage: hero.png
---

Was sagen uns die Tags im [Berliner Datenportal](https://daten.berlin.de) über den Stand von Open Data in Berlin? Es gibt verschiedene Möglichkeiten, die Tags des Portals zu analysieren. Eine davon ist zu schauen, welche Tags oft in Zusammenhang miteinander benutzt werden, um Themencluster aus dem Datenportal zu erkennen.
In dieser kleinen Visualisierung ist zu sehen wie oft bestimmte Tags im Zusammenhang stehen (also wie oft jeweils zwei Tags in den Metadaten des gleichen Datensatzes auftauchen). Nur Tags, die mindestens 20 mal mit einem anderen Tag in Verbindung gebracht wurden, werden in der Visualisierung angezeigt. Diese Visualisierung zeigt demzufolge nicht alle Tags, die im Datenportal benutzt werden. 

Die Größe eines Node, also eines Knotenpunktes, entspricht der Häufigkeit der Verwendung dieses Tags. Die Stärke der Linie zwischen zwei Nodes entspricht der Anzahl mit der diese zwei Tags zusammen benutzt werden. Die Farben der Nodes werden durch die zugehörige Kategorie zu einem Cluster bestimmt. Diese Cluster wurden automatisiert durch eine Netzwerkanalyse identifiziert. 

<br>
{% include graph.html %}
<br><br>

## Auswertung

Aus der Analyse lassen sich einige interessante Korrelationen zur Häufigkeit und Verwendung von Tags ableiten. Der Graph teilt sich optisch in zwei große Bereiche auf, die nur über wenige Tags miteinander verknüpft sind. Der eine Bereich ist der rund um die Knotenpunkte *Geodaten* und *Karten*. Es scheint, dass zumindest die meisten der hier enthaltenen Tags zu Datensätzen gehören, die tatsächliche Geodatensätze sind, also Daten, die einen Raumbezug haben und zum Beispiel mit einem Geoinformationssystem weiterverarbeitet werden können. Das zweite große Cluster findet sich rund um die Nodes *GSI* (Gesundheits- und Sozialinformationssystem) und *Regionalvergleich*. Daten aus dem Themenbereichen Gesundheit und Soziales, sowie Pflege und Demografie liegen demnach häufig nicht als georeferenzierte Datensätze vor. Ein Grund dafür ist sicher, dass viele dieser Daten keinen Raumbezug besitzen oder der Raumbezug über die Angabe von LOR's stattfindet, wie der Knotenpunkt *LOR* (Lebensweltlich orientierte Räume, eine Raumeinheit, mehr dazu [hier](https://lab.technologiestiftung-berlin.de/projects/spatial-units/de/)) vermuten lässt, der eine Art Bindeglied zwischen den zwei großen Clustern darstellt.

Interessant sind auch die Verbindungen der Hauptknotenpunkte. Wir sehen zum Beispiel, dass der größte Node durch den Tag *Geodaten* bezeichnet ist, was bedeutet, dass dies der am häufigsten verwendete Tag im Datenportal ist. Wenn wir den Knoten *Geodaten* auswählen, können wir sehen, welche anderen Begriffe häufig im Zusammenhang mit *Geodaten* verwendet werden. Einige Verbindungen sind nicht besonders überraschend (z.B. *Karten*), aber andere Verbindungen geben uns einen Eindruck davon, welche spezielleren Arten von Geodaten in größerer Zahl veröffentlicht wurden. So haben zum Beispiel viele der verbundenen Knoten etwas mit Daten aus dem Umweltbereich zu tun.

Es gibt in unserer Berechnung einige entstandene Kategorien, die nur sehr wenige Tags enthalten. Ein Beispiel dafür ist die Kategorie Verletzungen die nur aus den zwei Tags *Vergiftungen* und *Verletzungen* besteht. Die Tatsache, dass zu diesen Tags überhaupt eine Kategorie erstellt wurde, sagt uns, dass zu diesen Themen eine größere Anzahl von Datensätzen im Portal vorhanden ist (da nur die am häufigsten auftretenden Tags in den Graphen mit aufgenommen wurden). Offensichtlich handelt es sich dabei aber überwiegend um Datensätze die Informationen zu beiden Themen in Kombination enthalten und nicht um jeweils einzelne Datensätze.

Zusammenfassend lässt sich sagen, dass unsere Taganalyse einen interessanten Einblick in die Vielfalt, Häufigkeit und Zusammenhänge der durch die Datensätze abgedeckten Themen gibt. Tags sind und bleiben ein wichtiges Tool, um Daten zu beschreiben und besser auffindbar zu machen. Natürlich kann der Graph aber nicht alle Zusammenhänge darstellen, da nur die häufigsten Tags bzw. Verbindungen mit eingeflossen sind.

Falls Sie mehr zum Thema Tags wissen wollen (zum Beispiel warum Tags wichtig sind und wie man effektive Tags erfasst), schauen Sie gerne [unseren Leitfaden](https://odis-berlin.de/ressourcen/tag_analyse.html) zu Tags an.

## Datenquelle und technische Umsetzung
Mehr darüber, wie die Daten verarbeitet und analysiert wurden erfahren Sie in einem [Blogpost](https://lab.technologiestiftung-berlin.de/projects/tag-analysis/de/) des Ideation & Prototyping Lab der Technologiestiftung. Dort finden Sie auch den Link zum offenem Quellcode der Netzwerkanalyse.