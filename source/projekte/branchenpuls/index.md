---
layout: project
tags: project
title: Branchenpuls
blogLinkTitle: "Hier geht's zur Anwendung"
blogLink: https://www.branchenpuls.berlin
metaDescription: Exploriere die Berliner Gewerbelandschaft vom Bezirk bis zum Kiez 
date: 2023-09-30
visible: true
indexImage: branchenpuls-projektkachel.png
heroImage: branchenpuls-header.png
---


Berlin ist Hauptstadt, Start-Up-Metropole, Exzellenzcluster, Stadt der Kreativen und vorallem eines: immer im Wandel. Entsprechend vielfältig und dynamisch ist auch die Berliner Wirtschaft. Doch in welchen Kiezen konzentrieren sich bestimmte Branchen? Wo dominieren ältere Unternehmen, wo siedeln sich neue an? Wie entwickelt sich die Gewerbelandschaft im Lauf der Zeit?
**Mit dem Branchenpuls ist ein Explorationstool entstanden, das eine Erkundung der Berliner Gewerbelandschaft ermöglicht - von der räumlichen Verteilung bestimmter Branchentypen bis zur zeitlichen Entwicklung der Gewerbelandschaft.** Dafür stützt sich der Branchenpuls auf einen offenen Datensatz der IHK Berlin mit Standort- und Strukturinformationen von den über 350.000 Mitgliedsunternehmen inklusive deren Betriebsstätten der IHK Berlin.

## Hintergrund

Die ODIS hat sich die vorhandenen offenen Daten angesehen und bemerkt, dass die Datenlage in diesem Bereich in Bezug auf die Aktualität, Kontinuität und Maschinenlesbarkeit ausbaufähig ist. 
Mit der interaktiven Webkarte „Berliner EnergieCheckpoint“ haben wir daher eine prototypische Anwendung programmiert, die Aufmerksamkeit für das Energiewendegesetz und das Thema Energieeinsparung erzeugt und gleichzeitig als Gesprächsgrundlage zur Verbesserung der (offenen) Datenlage der behördlichen Stellen in den Bereichen Gebäudedaten und Energiemonitoring dienen kann.


## Was zeigt der BranchenPuls?

. Die Filterauswahl lässt sich als CSV-Datei exportieren.

Für einen leichteren Einstieg in die Anwendung wird bei einem Klick auf "Tour starten" in der Infobox eine zehnteilige Tour angeboten, bei der die einzelnen Funktionen genauer erklärt und eingeordnet werden. 

<center>
{% include "macro-image-section-small.html", src:"/assets/images/energiekarte_joyride.png", caption:"Ausschnitt aus der optionalen Tour, welche die Nutzer:innen die Anwendung in neun Schritten näher bringt" %}
</center>
<br>

Die Anwendung ist so konzipiert, dass in der Ansicht zwischen der 2D-Perspektive und der Liegenschafts-Perspektive gewechselt werden kann. Die Anwendung kann problemlos mit einem Smartphone bedient werden.

## Datengrundlage und Methode
 Die dem Branchenpuls zugrundeliegenden Daten werden von der IHK Berlin seit Juli 2023 als offene Daten veröffentlicht. Die Daten können über das zentrale [Berliner Datenportal](https://daten.berlin.de/datensaetze/gewerbedaten-der-ihk-berlin) heruntergeladen werden. Die IHK Berlin fragt die Informationen von ihren Mitgliedsunternehmen ab und aktualisiert die Daten monatlich. Bei Fragen zu den Daten wende dich an den Bereich [Datenmanagement](https://www.ihk.de/berlin/service-und-beratung/digitalisierung/open-data-5691102)  bei der IHK Berlin. 

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in [diesem](https://github.com/technologiestiftung/branchenpuls) Repository zu finden.

### Hinweis zur eingeschränkten Aussagekraft der Sanierungsdaten

*Der Datensatz beinhaltet Standort- und Strukturinformationen von den über 350.000 Mitgliedsunternehmen inklusive deren Betriebsstätten der IHK Berlin. Darin enthalten sind neben den Geokoordinaten, auch Angaben zur Branche, Beschäftigtengröße und Alter des Unternehmens, wie sie der IHK bei der Anmeldung der Unternehmens gemeldet wurden. Aufgrund unregelmäßiger Aktualisierungsintervalle einzelner Daten, können Informationen vereinzelt nicht mehr aktuell oder veraltet sein. Die IHK Berlin hat ein FAQ geschrieben, in dem detaillierter auf die Datenqualität eingegangen wird.*

