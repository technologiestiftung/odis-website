---
layout: default
title: Vorlage einer Dateninventur
---

# Vorlage zur Durchführung einer Dateninventur

Um Verwaltungsdaten als Open Data bereitstellen zu können, muss in einem ersten Schritt erfasst werden welche Daten existieren und in wessen Zuständigkeit diese liegen. Dies ist häufig eine komplexe Aufgabe:
- Zuständigkeiten zwischen einzelnen Fachabteilungen sind nicht immer eindeutig oder einheitlich in allen Bezirken. 
- Zuständigkeiten zwischen Haupt- und Bezirksverwaltung sind teilweise nicht klar. 
- Daten werden über diverse Wege generiert und gespeichert. Diese können in Fachverfahren, lokalen Datenbanken oder Excel-Listen vorliegen.
- Diejenigen Stellen die Daten erheben sind nicht zwangsläufig die Stellen, die Zugriff auf die Daten haben. So werden beispielsweise Daten beim Bürgeramt erfasst (z.B. wenn Bürger*innen ihren Wohnsitz ummelden), der Zugriff auf die gesammelten Daten (z.B. wieviele Ummeldungen gab es je Bezirk) wird jedoch an einer anderen Stelle vorgenommen.

Damit Verwaltungen einen Überblick über vorhandene Datensätze und die zuständigen Stellen erhalten und bewahren, sollte eine Dateninventur durchgeführt werden.

Ein Leitfaden zu den notwendigen Schritten für die Durchführung einer Dateninventur ist aktuell in der Bearbeitung.

Zur strukturierten Erfassung einer Dateninventur hat ODIS anhand bestehender Beispiele verschiedener Verwaltungen und anderer Städte eine Vorlage entwickelt, die als Grundlage für die eigene Dateninventur genutzt werden kann.

Die Informationen, die über einen Datensatz geführt werden sollten, lassen sich in drei Hauptblöcke einteilen:
- Inhaltliche Felder: Metadaten über den Inhalt der Daten
- Verantwortlichkeit: Zuständige Stellen und Personen auf Hauptverwaltungs- und Bezirksebene
- Technische Details: Informationen zu Datenbereitstellung und Aktualisierung

In der folgenden Tabelle sind alle Felder im Detail beschrieben. Die hier gezeigten Eintragungen zum Kleingartenbestand in Tempelhof-Schöneberg dienen der Veranschaulichung und stellen ein fiktives Beispiel dar. Die entsprechenden Dateien dieser Vorlage (CSV und Excel) sind am Ende dieser Seite verlinkt.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin-bottom: 25px}
.tg td{font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-zj9c{font-style:italic;background-color:#495992;color:#ffffff;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-eahn{background-color:#30b3ff;color:#000000;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-km2t{font-weight:bold;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-o9w4{font-style:italic;background-color:#95d2f6;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-tng1{background-color:#c0c0c0;color:#000000;border-color:#efefef;text-align:left;vertical-align:top}
.tg .tg-zv4m{border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-u6gx{font-weight:bold;background-color:#c0c0c0;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-lu18{font-weight:bold;background-color:#30b3ff;color:#000000;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-xm73{font-size:22px;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-czno{font-size:16px;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-16zm{font-weight:bold;background-color:#c0c0c0;color:#000000;border-color:#efefef;text-align:left;vertical-align:top}
.tg .tg-eo4b{font-style:italic;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-0x0e{font-size:16px;background-color:#c0c0c0;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-54w3{font-style:italic;background-color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-ozf7{font-size:16px;background-color:#30b3ff;color:#000000;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-ortv{font-size:16px;background-color:#213a8f;color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-dydg{font-weight:bold;background-color:#213a8f;color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-lhx1{background-color:#213a8f;color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-hvao{background-color:#c0c0c0;border-color:#ffffff;text-align:left;vertical-align:top}
</style>

<table class="tg">
  <tr>
    <th class="tg-xm73" colspan="2">Dateninventur</th>
    <th class="tg-zv4m"></th>
    <th class="tg-eo4b"></th>
  </tr>
  <tr>
    <td class="tg-czno"></td>
    <td class="tg-km2t"></td>
    <td class="tg-zv4m"></td>
    <td class="tg-eo4b">Beispiel</td>
  </tr>
  <tr>
    <td class="tg-0x0e" rowspan="4">Inhaltliche Felder</td>
    <td class="tg-16zm">Thema</td>
    <td class="tg-tng1">Das übergeordnete Thema des Datensatzes.</td>
    <td class="tg-54w3">Geographie und Stadtplanung</td>
  </tr>
  <tr>
    <td class="tg-16zm">Datensatztitel</td>
    <td class="tg-tng1">Der Titel des Datensatzes.</td>
    <td class="tg-54w3">Kleingartenbestand</td>
  </tr>
  <tr>
    <td class="tg-16zm">Beschreibung</td>
    <td class="tg-tng1">Eine kurze Beschreibung des Datensatzes.</td>
    <td class="tg-54w3">In der Karte sind alle Kleingartenanlagen auf privaten und landeseigenen Flächen in ihrer Gesamtfläche dargestellt, für die die Bestimmungen des Bundeskleingartengesetzes Anwendung finden.</td>
  </tr>
  <tr>
    <td class="tg-16zm">Räumliche Auflösung</td>
    <td class="tg-tng1">Der Bezug des Datensatzes – z.B. PLR, Adresse.</td>
    <td class="tg-54w3">Flächengeometrie</td>
  </tr>
  <tr>
    <td class="tg-ozf7" rowspan="5">Verantwortlichkeit</td>
    <td class="tg-lu18">Verantwortlichkeit - Bezirksebene</td>
    <td class="tg-eahn">Falls Inventur auf Bezirksebene: Verantwortliche Stelle auf bezirklicher Ebene.</td>
    <td class="tg-o9w4">BA Tempelhof-Schöneberg Straßen- und Grünflächenamt</td>
  </tr>
  <tr>
    <td class="tg-lu18">Ansprechperson - Bezirksebene</td>
    <td class="tg-eahn">Falls Inventur auf Bezirksebene: Konkrete Ansprechperson auf bezirklicher Ebene mit Kontaktinformation.</td>
    <td class="tg-o9w4">Herr Max Mustermann, max.mustermann@email.de, 030 - 000 000</td>
  </tr>
  <tr>
    <td class="tg-lu18">Verantwortlichkeit - Landesebene</td>
    <td class="tg-eahn">Verantwortliche Stelle auf Landesebene.</td>
    <td class="tg-o9w4">Senatsverwaltung für Umwelt, Verkehr und Klimaschutz Berlin</td>
  </tr>
  <tr>
    <td class="tg-lu18">Ansprechperson - Landesebene</td>
    <td class="tg-eahn">Konkrete Ansprechperson auf Landesebene mit Kontaktinformation.</td>
    <td class="tg-o9w4">Frau Maria Mustermann, maria.mustermann@email.d, 030 - 111 111</td>
  </tr>
  <tr>
    <td class="tg-lu18">Datenhoheit bei</td>
    <td class="tg-eahn">Die Abteilung / Institution die diese Daten bereitstellt.</td>
    <td class="tg-o9w4">Senatsverwaltung für Umwelt, Verkehr und Klimaschutz Berlin</td>
  </tr>
  <tr>
    <td class="tg-ortv" rowspan="7">Technische Details</td>
    <td class="tg-dydg">IT-Fachverfahren</td>
    <td class="tg-lhx1">Falls vorhanden: für diesen Datensatz verwendetes Fachverfahren oder Datenplattform.</td>
    <td class="tg-zj9c">GRIS (Grünflächeninformationssystem)</td>
  </tr>
  <tr>
    <td class="tg-dydg">Dateiformat</td>
    <td class="tg-lhx1">Dateiformat, in dem der Datensatz vorliegt. (z.B. Excel, CSV, Shape-File, Access Datenbank, PostgreSQL Datenbank, etc.)</td>
    <td class="tg-zj9c">WFS, WMS</td>
  </tr>
  <tr>
    <td class="tg-dydg">Verfügbarkeit (intern / veröffentlicht)</td>
    <td class="tg-lhx1">Ist der Datensatz nur intern verfügbar oder öffentlich zugänglich?</td>
    <td class="tg-zj9c">veröffentlicht</td>
  </tr>
  <tr>
    <td class="tg-dydg">Aktualisierungsprozess (manuell / automatisiert)</td>
    <td class="tg-lhx1">Wird der Datensatz automatisch (z.B. automatischer Datenbankexport) oder manuell aktualisiert?</td>
    <td class="tg-zj9c">manuell</td>
  </tr>
  <tr>
    <td class="tg-dydg">Zuletzt aktualisiert</td>
    <td class="tg-lhx1">Datum der letzten Aktualisierung</td>
    <td class="tg-zj9c">2018-05-23</td>
  </tr>
  <tr>
    <td class="tg-dydg">Aktualisierungsfrequenz</td>
    <td class="tg-lhx1">Wie häufig wird der Datensatz aktualisiert?</td>
    <td class="tg-zj9c">jährlich</td>
  </tr>
  <tr>
    <td class="tg-dydg">Ressource Link</td>
    <td class="tg-lhx1">Falls vorhanden: Link zur Ressource (externe URL oder lokaler Dateipfad)</td>
    <td class="tg-zj9c">https://fbinter.stadt-berlin.de/fb/index.jsp?loginkey=showMap&amp;mapId=kleing@senstadt</td>
  </tr>
  <tr>
    <td class="tg-0x0e" rowspan="2">Sonstiges</td>
    <td class="tg-u6gx">Kommentar</td>
    <td class="tg-hvao">weitere Anmerkungen</td>
    <td class="tg-54w3"></td>
  </tr>
  <tr>
    <td class="tg-u6gx">Datum zuletzt bearbeitet</td>
    <td class="tg-hvao">Datum der letzten Bearbeitung dieser Metadatenzeile</td>
    <td class="tg-54w3">2019-12-16</td>
  </tr>
</table>

## Download

[Download Dateninventurvorlage als Excel-Tabelle](/assets/file-download/Dateninventur_Vorlage.xlsx)

[Download Dateninventurvorlage als csv](/assets/file-download/Dateninventur_Vorlage.csv)

