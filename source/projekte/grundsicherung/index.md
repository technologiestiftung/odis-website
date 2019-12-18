---
layout: project
title:  "Grundsicherung"
metaDescription: Darstellung der Sozialstatistikdaten zu Grundsicherung.
date: 2019-12-17
visible: true
indexImage: ./img/gs-thumbnail.png
heroImage: ./img/gs-hero.png
---

Berlinweit gibt es ca. 84.000 Menschen die staatliche Unterstützung in Form der Grundsicherung bekommen, um ihre Lebensunterhalt zu sichern.

Die sogenannte “Grundsicherung im Alter und bei Erwerbsminderung gemäß dem 4\. Kapital des Zwölften Sozialgesetzbuch (SGB XII)” fokussiert sich auf zwei Gruppen:

- Menschen, die die <span class="text-hover">Regelaltersgrenze <span class="questionmark">?</span> <span class="tooltiptext">Vor dem 1\. Januar 1964, haben Anspruch auf Regelaltersrente, wenn sie  
1\. die Regelaltersgrenze erreicht haben  
2\. die allgemeine Wartezeit erfüllt haben. Die Regelaltersgrenze wird frühestens mit Vollendung des 65. Lebensjahres erreicht.  

Versicherte, die vor dem 1\. Januar 1947 geboren sind, erreichen die Regelaltersgrenze mit Vollendung des 65\. Lebensjahres. Für Versicherte, die nach dem 31\. Dezember 1946 geboren sind, wird dir Regelaltersgrenze wie folgt Versicherte, geboren angehoben: LINK ZU TABELLE</span> </span>erreicht haben</span> 

- Menschen, die aus anderen Gründen (wie eine Krankheit oder eine Behinderung) dauerhaft keine Erwerbstätigkeit von mindestens 3 Stunden täglich ausüben können

**Personen aus diesen Gruppen, die sich den Lebensunterhalt nicht aus eigenen Mitteln (Einkommen und Vermögen) sicherstellen können und mit <span class="text-hover">gewöhnlichen Aufenthalt <span class="questionmark">?</span> <span class="tooltiptext">Wer sich nur kurzfristig, auf Besuch oder zum Urlaub in Deutschland aufhält, hat keinen Anspruch auf Leistungen der Grundsicherung im Alter und bei Erwerbsminderung. Nur wer seinen Lebensmittelpunkt in Deutschland hat, kann Grundsicherung beziehen.  
Jedoch sind weder ein fester Wohnsitz noch die deutsche Staatsangehörigkeit Voraussetzung, sodass auch Menschen ohne Wohnung und mit anderer Staatsangehörigkeit als der deutschen einen Anspruch auf Grundsicherung haben.</span></span> erreicht haben in Deutschland, haben Anspruch auf Grundsicherung.** 

Empfänger*innen von der Grundsicherung bekommen jeden Monat Geld (die <span class="text-hover">Höhe der Leistungen <span class="questionmark">?</span> <span class="tooltiptext">Die Höhe der Grundsicherung berechnet sich durch den gesetzlich definierten Regelbedarf des Bezugsberechtigten zuzüglich Kosten der Unterkunft und Heizung, Mehrbedarf, Kranken- und Pflegeversicherungsbeiträge und evtl. Sonderbedarf abzüglich seines Einkommens bzw. Vermögens.</span></span> hängt vom individuellen Bedarf des Antragstellers ab), um ihre notwendige Lebenskosten zu decken.

In Berlin sind die bezirklichen Sozialämter (Antragstellung und Bewilligung) neben der Senatsverwaltung für Integration, Arbeit und Soziales (SenIAS) zuständig. Auf dem [GSI-Portal](http://www.gsi-berlin.info) stellt die Senatsverwaltung weitere differenzierte Daten zur Grundsicherung (sowie zu anderen sozialen Themen) als Open Data bereit. In Zusammenarbeit mit der SenIAS hat die Open Data Informationsstelle (ODIS) diese Daten analysiert und visualisiert, um dieses Thema für alle Interessierten veranschaulich darzustellen, sowie wichtige Trends und Entwicklungen in diesem Bereich aufzuzeigen. Weitere Informationen zur Datengrundlage dieser Visualisierungen befinden sich im letzten Abschnitt dieser Seite.

<div class="chart-content p-24 mb-6" id="number-wrapper">
    <div class="number-div">
      <h1>84.000</h1>
      <p>Grunsicherungsempfänger*innen (31.12.2018)</p>
    </div>
    <div class="number-div">
      <h1>549.809.329 €</h1>
      <p>Jahresausgaben (2018)</p>
    </div>
    <div class="number-div">
      <h1>35,5 %</h1>
      <p>der Ausgaben gemäß SGB XII sind Grundsicherung (2018)</p>
    </div>
  </div>

## Betrachtung auf Kiezebene

Die nachfolgenden Karten bieten eine räumliche Perspektive auf das Thema Grundsicherung. Die Empfänger*innen von Grundsicherung sind nicht gleichmäßig über die Stadt verteilt – einige Stadtgebiete in Berlin haben einen höheren Anteil an Grundsicherungsempfänger*innen als andere. Dementsprechend wichtig ist es für die Verwaltung und für Sozialhilfe-Initiativen zu wissen, wo der Bedarf an Unterstützung besonders erforderlich ist. Dadurch können entsprechende Services und Angebote effektiv verteilt und soziale Infrastrukturen besser geplant werden, wie beispielsweise Seniorenzentren mit kostenlosen Angeboten oder Zugang zu Lebensmittelspenden.

<div class="map-content grey-bg p-3 mt-6 mb-6" id="map-wrapper">
      <div class="flex-wrapper col">
        <div class="map-text">
          <h3 id="content-topic"></h3>
          <span class="headline-03" id="content-title"></span>
          <p class="headline-04" id="content-description"></p>
        </div>
        <div id="navigation">
          <ul id="main-navigation"></ul>
          <ul id="sub-navigation"></ul>
        </div>
      <div id="map"></div>
    </div>
  </div>

## Historische Entwicklung von 2006-2018

Neben der räumlichen Verteilung ist es auch interessant, wie sich der Anteil von Empfänger*innen bzw. die Höhe der Ausgaben für Grundsicherungsleistungen im Laufe der zurückliegenden Jahre entwickelt hat. Tatsächlich sind die Anteile von Menschen, die Grundsicherung bei Erwerbsminderung oder Grundsicherung im Alter bekommen, seit 2006 fast stetig gestiegen.

  <div class="chart-content pb-3 mt-6 mb-6" id="timeline-wrapper">
    <div id="timeline" class="linechart"></div>
  </div>

Im Jahr 2008 haben 4,37% aller Menschen in Berlin ab 65 Jahren Grundsicherung bekommen. In 2018 waren es bereits 5,9%. Die Zahlen für Empfänger*innen von Grundsicherung bei Erwerbsminderung haben sich im Vergleich nicht so stark entwickelt, trotzdem ist auch hier eine Steigerung sichtbar: in 2006erhielten 0,89% aller Menschen in Berlin zwischen 18 - 64 Jahren Grundsicherung. In 2018 waren es 1,3%.

Mit einem Blick erkennt man auch auf der Karte die Steigerung:

  <div class="map-content grey-bg  p-3 mt-6" id="timelapse-map-wrapper">
      <div class="flex-wrapper col">
        <div class="map-text">
          <h3 id="content-topic">Grundsicherung im Alter (ab 65 Jahren)</h3>
          <span class="headline-03" id="content-title">Entwicklung von 2006 - 2018</span>
          <p style="margin-bottom: 10px;" class="headline-04" id="content-description">Empfänger*innen von
            Grundsicherung im Alter als Anteil (%) an der gesamten über 65-jährigen Bevölkerung auf Kiezebene
            (sogenannte Planungsräume der LORs - Lebensweltlich orientierten Räume) dargestellt. Aus
            Geheimhaltungsgründen werden zu kleine Werte gesperrt und sind als fehlend gekennzeichnet.<br><br>Über den
            Slider lassen sich die Daten für die Jahre 2006 bis 2018 anzeigen.</p>
        </div>
        <div id="slider-wrapper slider-container">
          <input class="slider" id="slider" type="range" value="2018" min="2006" max="2018" step="1" />
          <div id="year-label"></div>
        </div>
      </div>
      <div id="timelapse-map"></div>
  </div>

  <div class="chart-content pb-6" id="rent-income-wrapper">
    <div id="rent-income" class ="linechart"></div>
  </div>

## Erläuterungen & Datenquellen

**Anteil in %**  
Quote der Empfängerinnen und Empfänger an der entsprechenden Gruppe der melderechtlich registrierten Einwohnerinnen und Einwohner

**Empfängerzahlen**  
Bestandserhebung zu Stichtag 31.12\. des Jahres

**Ausgaben**  
kumulierte Jahresbeträge

Diese Analyse basiert sich auf dem Datensatz, [“Empfänger/innen von Grundsicherung im Alter und bei Erwerbsminderung gemäß 4\. Kapitel SGB XII in Berlin außerhalb von Einrichtungen an der Bevölkerung nach LOR (Stand 31.12.2018)”](http://www.gsi-berlin.info/redirectA.asp?filename=TS1700199029201812.xls) (für die historische Analysen wurden die Datensätze der vorherigen Jahre auch benutzt). Alle Datensätze sind im [GSI-Portal](http://www.gsi-berlin.info), das von der Senatsverwaltung für Gesundheit, Pflege und Gleichstellung bereitgestellt wird, zu finden.

  <link rel="stylesheet" href="./css/main.css">
  <script src="./js/topojson-client/topojson-client.min.js"></script>
  <script src="./js/d3.v5.min.js"></script>
  <script src="./js/map.js"></script>
  <script src="./js/timelapse.js"></script>
  <script src="./js/linechart.js"></script>