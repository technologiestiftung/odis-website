---
layout: project
tags: project
title: Berlins Daten-Neuheiten im Schnellblick
metaDescription: Übersichtliche Darstellung der wöchentlichen Datenupdates auf Berlins Open Data Portal
date: 2024-01-20
visible: true
indexImage: daten-neuheiten-projektübersichtkachel.png
heroImage: daten-neuheiten-headerbild.png
---

Jede Woche gibt es spannende neue Daten und Updates auf dem [Open Data Portal Berlin](https://daten.berlin.de/). Um keinen interessanten neuen Datensatz oder Aktualisierungen zu verpassen, hat die ODIS eine übersichtliche Darstellung entwickelt, mit der Sie alle Änderungen auf einen Blick erfassen können.

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

Unsere Tabelle wird täglich aktualisiert und zeigt alle Änderungen der letzten sieben Tage. Dank einer einfachen Farbkodierung lassen sich Neuerscheinungen und Aktualisierungen schnell und unkompliziert erkennen. Ein Klick auf den Titel eines Datensatzes führt Sie direkt zur entsprechenden Seite auf dem Datenportal.

Sie können die Übersicht auch bequem per iFrame in Ihre eigene Webseite einbinden. Klicken Sie einfach unter den Diagrammen auf "Einbetten", um den iFrame-Code zu kopieren.

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

Unser Liniendiagramm zeigt deutlich, dass die Zahl der Änderungen und Updates zunimmt – ein erfreulicher Trend! Allerdings kann es vorkommen, dass sehr ähnliche Datensätze in der Statistik erscheinen und diese leicht verzerren.

<br>
<br>

Zur technischen Umsetzung:

Die hier dargestellten Daten stammen von der Schnittstelle (API) des Datenportals. Die Daten werden auf [Github](https://github.com/technologiestiftung/odis-datenportal-uebersicht) ausgewertet und anschließend in aggregierter Form als CSV im Github-Repository gespeichert. Die Diagramme, erstellt mit [Datawrapper](https://www.datawrapper.de/), beziehen ihre Daten direkt aus diesem Repository.

Du willst Charts mit Datawrapper erstellen? Schaue dir hier unserer [Videotutorials](https://odis-berlin.de/ressourcen/datenvisualisierung/) an.
