---
layout: project
tags: project
title: Branchenpuls
blogLinkTitle: "Hier geht's zur Anwendung"
blogLink: https://www.branchenpuls.berlin
metaDescription: Exploriere Berlins Gewerbelandschaft vom Bezirk bis zum Kiez
date: 2023-09-30
visible: true
indexImage: branchenpuls-projektkachel.png
heroImage: branchenpuls-header.png
---

Berlin ist Hauptstadt, Startup-Metropole, Exzellenzcluster, Stadt der Kreativen und vor allem eines: immer im Wandel. Entsprechend vielfältig und dynamisch ist auch die Berliner Wirtschaft. Doch in welchen Kiezen konzentrieren sich bestimmte Branchen? Wo dominieren ältere Unternehmen, wo siedeln sich neue an? Wie entwickelt sich die Gewerbelandschaft im Lauf der Zeit?
**Mit dem Branchenpuls ist ein Explorationstool entstanden, das eine Erkundung der Berliner Gewerbelandschaft ermöglicht - von der räumlichen Verteilung bestimmter Branchentypen bis zur zeitlichen Entwicklung der Gewerbelandschaft.** Dafür stützt sich der Branchenpuls auf einen offenen Datensatz der IHK Berlin mit Standort- und Strukturinformationen von den über 350.000 Mitgliedsunternehmen inklusive deren Betriebsstätten.

Hinweis: Der Branchenpuls befindet sich noch in einer frühen Beta-Version und soll im Austausch mit interessierten Akteur:innen weiterentwickelt werden.

## Hintergrund

Die IHK Berlin hat Informationen über ihre Mitgliedsunternehmen als Open Data bereitgestellt. Damit will sie selbst einen Beitrag zum Open Data Angebot des Landes Berlin leisten und dazu anregen, offene Daten zu nutzen. Mit Unterstützung der ODIS wurde der Datensatz veredelt und im Juli 2023 veröffentlicht. Auf Basis dieses Datenstandes hat die ODIS anschließend ein Tool entwickelt, um den Datensatz leichter nutzbar und durchsuchbar zu machen. Der Branchenpuls bildet aber nicht nur eine Momentaufnahme der Mitgliederstruktur der IHK Berlin ab, sondern soll mit der Zeit Entwicklungen in der Berliner Wirtschaft nachvollziehbar machen. So kann der Branchenpuls Aussagen über wirtschaftspolitische oder gesellschaftliche Entwicklungen treffen und Zusammenhänge zwischen Standortfaktoren und zum Beispiel Neuansiedlungen oder Neustrukturierungen in der Berliner Wirtschaft abbilden und Diskussionsräume für Wirtschaftsakteure und Stadtgesellschaft öffnen.

## Was zeigt der Branchenpuls?

Die Standorte, als Punkte bzw. bei kleiner Zoomstufe als Heatmap dargestellt, entsprechen dem Sitz des Mitgliedsunternehmes inklusive deren Betriebsstätten der IHK Berlin. Die Unternehmen können nach Informationen wie Branchen- und Gewerbetyp, Beschäftigtenzahl oder Unternehmensalter gefiltert werden. Außerdem ist eine räumliche Differenzierung auf Ebene der Bezirke, Prognoseraum und Planungsraum der Lebensweltlich orientierten Räume (offizielle in Berlin verwendete Raumeinheiten) möglich. Durch die Zeitraumauswahl ist darüber hinaus eine zeitliche Entwicklung erkundbar. Dazu können mehrere Ansichten geöffnet und miteinander verglichen werden. Die Filterauswahl lässt sich als CSV-Datei exportieren.

Für einen leichteren Einstieg in die Anwendung wird bei einem Klick auf "Tour starten" in der Infobox eine zehnteilige Tour angeboten, bei der die einzelnen Funktionen genauer erklärt und eingeordnet werden.

<center>
{% include "macro-image-section-small.html", src:"/assets/images/branchenpuls_joyride.png", caption:"Ausschnitt aus der optionalen Tour, welche die Nutzer:innen den Branchenpuls in zehn Schritten näher bringt" %}
</center>

## Datengrundlage und Methode

Die dem Branchenpuls zugrundeliegenden Daten werden von der IHK Berlin seit Juli 2023 als offene Daten veröffentlicht. Die Daten können über das zentrale [Berliner Datenportal](https://daten.berlin.de/datensaetze/gewerbedaten-der-ihk-berlin) heruntergeladen werden. Die IHK Berlin fragt die Informationen von ihren Mitgliedsunternehmen ab und aktualisiert die Daten monatlich. Bei Fragen zu den Daten wende dich an den Bereich [Datenmanagement](https://www.ihk.de/berlin/service-und-beratung/digitalisierung/opendata-branchenpuls?shortUrl=%2Fbranchenpuls) bei der IHK Berlin.

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in [diesem](https://github.com/technologiestiftung/branchenpuls) Repository zu finden.

### Hinweis zur eingeschränkten Aussagekraft der Gewerbedaten

_Der Datensatz beinhaltet Standort- und Strukturinformationen von den über 350.000 Mitgliedsunternehmen inklusive deren Betriebsstätten der IHK Berlin. Darin enthalten sind neben den Geokoordinaten, auch Angaben zur Branche, Beschäftigtengröße und Alter des Unternehmens, wie sie der IHK bei der Anmeldung der Unternehmens gemeldet wurden. Aufgrund unregelmäßiger Aktualisierungsintervalle einzelner Daten, können Informationen vereinzelt nicht mehr aktuell oder veraltet sein. Die IHK Berlin verweist auf ein [FAQ](https://www.ihk.de/berlin/service-und-beratung/digitalisierung/faqs-gewerbedatensatz-5927056), in dem detaillierter auf die Datenqualität eingegangen wird._
