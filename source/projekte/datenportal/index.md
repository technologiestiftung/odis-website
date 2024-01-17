---
layout: project
tags: project
title: Berlins Daten-Neuheiten im Überblick
metaDescription: Übersichtliche Darstellung der wöchentlichen Datenupdates auf Berlins Open Data Portal
date: 2024-01-20
visible: true
indexImage: daten-neuheiten-projektübersichtkachel.png
heroImage: daten-neuheiten-headerbild.png
---

Das [Berliner Datenportal](https://daten.berlin.de/) führt über 3000 offene Datensätze - und jede Woche kommen neue Daten und Updates hinzu. Um keinen interessanten Datensatz oder Aktualisierungen zu verpassen, hat die ODIS eine übersichtliche Darstellung erstellt, die stets die neuesten Veröffentlichungen anzeigt.

<br>

<center style="max-width: 500px;
  align-content: ;
  margin-left: auto;
  margin-right: auto;">
    <span >
        <iframe title="Neuerscheinungen und Updates in den letzten sieben Tagen auf Berlin Open Data" aria-label="Tabelle" id="datawrapper-chart-Rij6z" src="https://datawrapper.dwcdn.net/Rij6z/14/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="605" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
        </script>
    </span>
</center>

</br>

Die Tabelle wird täglich aktualisiert und zeigt alle Änderungen der letzten sieben Tage. Dank einer einfachen Farbkodierung lassen sich Neuerscheinungen und Aktualisierungen schnell und unkompliziert erkennen. Ein Klick auf den Titel eines Datensatzes führt Sie direkt zur entsprechenden Seite auf dem Datenportal.

Die Übersicht kann auch bequem per iFrame in anderen Webseiten eingebunden werden. Durch Klick auf den Button "Einbetten" unter der Tabelle, kann der iFrame-Code kopiert werden.

Aber wie sieht es mit den Änderungen auf dem Datenportal in den letzten Jahren aus?

<br>

<center style="max-width: 500px;
  align-content: ;
  margin-left: auto;
  margin-right: auto;">
    <span >
        <iframe title="Neuerscheinungen und Updates seit dem Jahr 2000 auf Berlin Open Data" aria-label="Interactive line chart" id="datawrapper-chart-ZgWJU" src="https://datawrapper.dwcdn.net/ZgWJU/8/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="398" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
        </script>
    </span>
</center>

<br>

Das Liniendiagramm zeigt deutlich, dass die Zahl der Änderungen und Updates zunimmt – ein erfreulicher Trend! Es ist aber zu beachten, dass es Datenthemen gibt, die aus ein und dem selber Veröffentlichungsprozess stammen, aber aufgeteilt und in thematisch ähnlichen Teildatensätzen veröffentlich wurden und die Statistik somit leicht verzerren.

<br>
<br>

**Zur technischen Umsetzung:** Die hier dargestellten Daten stammen von der Schnittstelle (API) des Datenportals. Die Daten werden auf [Github](https://github.com/technologiestiftung/odis-datenportal-uebersicht) ausgewertet und anschließend in aggregierter Form als CSV im Github-Repository gespeichert. Die Diagramme, erstellt mit [Datawrapper](https://www.datawrapper.de/), beziehen ihre Daten direkt aus diesem Repository.

Wie sich leicht spannende Charts und Tabellen aus den eigenen Daten erstellen lassen, wird übrigens in unseren [Videotutorials](https://odis-berlin.de/ressourcen/datenvisualisierung/) erklärt.
