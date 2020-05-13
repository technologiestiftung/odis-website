---
layout: default
title: Metadaten-Leitfaden
---

# Was sind Metadaten?

Daten im Open Data Portal zu veröffentlichen, ist ein wichtiger Schritt zur Umsetzung der Open Data Richtlinie. Wichtig zu wissen ist allerdings, dass ein vollständiger Datensatz nicht nur aus den Daten(-werten) allein besteht, sondern ebenfalls die Angaben der sogenannten Metadaten umfasst. Ohne Metadaten können die Daten eventuell nicht optimal gefunden und genutzt werden oder sind im schlimmsten Fall sogar unbrauchbar, da die Anwender\*innen sie nicht in den richtigen Kontext setzen können. Doch was sind Metadaten eigentlich und warum sind sie so wichtig? 
Metadaten be- und umschreiben die eigentlichen Daten, es sind **„Daten über Daten“**. Sie sind nicht nur für Open Data relevant, sondern finden sich auch in vielen anderen Bereichen. Eine Musikdatei beispielsweise, enthält nicht nur die Musik an sich, sondern auch eingebettete Informationen, wie den Interpreten, das Musikgenre oder das Erscheinungsjahr des Musikstückes. Ohne diese Angaben wäre es nicht möglich die Musik in einer entsprechenden Bibliothek oder Anwendungen zu suchen oder zu sortieren.
Im Falle von Verwaltungsdaten sieht das ähnlich aus. Nur durch den Datensatz ergänzende Angaben, wie dem Namen der veröffentlichenden Stelle, Kategoriezugehörigkeit und das Veröffentlichungsdatum können die Daten von den Nutzer\*innen schnell gefunden und richtig eingeordnet werden.
 
So trivial es auch erst einmal klingen mag, in der Praxis zeigt sich, dass viele Datensätze keine akkuraten, anwenderfreundlichen Metadaten besitzen. Für eine Studie aus dem Jahr 2016 \[1\] wurde im Rahmen einer Qualitätsbewertung von Open Data Metadaten auf verschiedene Qualitätskriterien überprüft. Insgesamt wurden die Metadaten von über 1,1 Millionen Datensätzen auf 261 verschiedenen Open Data Portalen der ganzen Welt aus dem Bereich Verwaltung, aber auch aus dem privaten Sektor, analysiert. Laut den Ergebnissen konnten hierbei einige Defizite festgestellt werden. So verfügte zum Beispiel der überwiegende Anteil offener Datensätze über keine maschinenlesbare E-Mail oder URL-Adresse zu einem Ansprechpartner. 
Solch fehlende Informationen zur Herkunft von Daten mindern die Transparenz und nachhaltige Nutzbarkeit von Open Data ungemein. Ein weiteres bekanntes Problem sind nicht vorhandene oder ungenaue Angaben zu zeitlichen Auflösungen und Aktualisierungsrhythmen. Hier wird es Nutzer\*innen erschwert, zu erkennen ob sie den aktuellsten Datensatz zur Verfügung stehen haben oder mit veralteten Daten handhaben. Ein anderes Beispiel sind Defizite bei der Auffindbarkeit von Daten. Diese können sich unter anderem dann ergeben, wenn wenige oder schlechte Tags in den Metadaten festgelegt sind. Die Tags fungieren als eine Art Suchbegriff. Der Datensatz kann über seinen Titel und die festgelegten Tags durch die Suchfunktion im Open Data Portal gefunden werden. Dies wird besonders dann wichtig, wenn potentielle Datennutzer nicht nach einem speziellen Datensatz suchen, sondern die Datenverfügbarkeit zu einem übergeordneten Thema ausloten, oder wenn ein Datensatz sehr viele verschiedene Informationen enthält. Ein Datensatz der das gesamte Streckennetz und die Fahrpläne des ÖPNV enthält beispielsweise, sollte auch durch Tags wie *U-Bahn*, *Tram* usw. auffindbar sein.
 
Um die Metadaten offener Verwaltungsdaten von ganz Deutschland möglichst einheitlich zur Verfügung zu stellen, wurde vom IT-Planungsrat ein Datenstandard für Metadaten entwickelt, der sogenannte **DCAT-AP.de** (die deutsche Umsetzung des EU-weiten Standards DCAT-AP). Durch Einhalten des dort festgelegten Datenschemas, kann sichergestellt werden, dass Metadaten leicht zwischen Portalen und Anwendungen ausgetauscht und analysiert werden können. Der Standard legt sowohl die notwendigen Inhalte der Metadaten fest (z.B. Angabe der Lizenz, Angabe des Veröffentlichungsdatums), als auch ein kontrolliertes Vokabular, dass verwendet werden kann um diese Angaben zu tätigen. Wenn Sie mehr über DCAT-AP.de erfahren möchten, empfehlen wir Ihnen unsere [Einführung auf der Seite der Technologiestiftung Berlin](https://lab.technologiestiftung-berlin.de/projects/opendata-metadata-dcat-ap/de/).
 
Bei der Veröffentlichung von Daten im Open Data Portal Berlin müssen die Metadaten über ein **Eingabeformular** eingetragen werden. Dieses orientiert sich an DCAT-AP.de, überführt die Eingaben in ein entsprechendes Schema und leitet sie für weitere Nutzung auch an das Metadaten-Portal für Deutschland [govdata.de](https://www.govdata.de) weiter. Alles worum Sie sich kümmern müssen, ist also alle geforderten Felder des Formulars möglichst akkurat auszufüllen. Die untenstehende Tabelle zeigt alle möglichen Felder zur Eintragung von Metadaten über das Datenregister des Open Data Portal Berlins, jeweilige Erläuterungen und Beispiele. Die Informationen zu denen auf jeden Fall Metadaten erforderlich sind, unabhängig davon um welche Art Datensatz es sich handelt, sind mit einem \* markiert. Die restlichen Felder kommen nur bei bestimmten Datensätzen zum Einsatz. Beim Einstellen von Daten in das Open Data Portal mittels Imperia, tragen die einzelnen Metadaten-Felder leicht andere Bezeichnungen (z.B. heißen die Tags dort Schlüsselwörter). Der erwartete Inhalt ist aber der Gleiche.


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
.tg .tg-54w3{font-style:italic;background-color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-ozf7{font-size:16px;background-color:#30b3ff;color:#000000;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-ortv{font-size:16px;background-color:#213a8f;color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-dydg{font-weight:bold;background-color:#213a8f;color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-lhx1{background-color:#213a8f;color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-hvao{background-color:#c0c0c0;border-color:#ffffff;text-align:left;vertical-align:top}
</style>

<div style="overflow-x:auto;">
<table class="tg">
  <tr>
    <th class="tg-xm73" colspan="2">Metadaten-Formular</th>
    <th class="tg-zv4m"></th>
    <th class="tg-eo4b"></th>
  </tr>
  <tr>
    <td class="tg-km2t">Metadaten-Feld</td>
    <td class="tg-zv4m">Erläuterung</td>
    <td class="tg-eo4b">Beispiel</td>
  </tr>
  <tr>
    <td class="tg-16zm">Titel</td>
    <td class="tg-tng1">Kurzer, prägnanter Titel mit zeitlichem und ggf. geografischem Bezug.</td>
    <td class="tg-54w3">Gastronomien mit Liefer- oder Abholservice</td>
  </tr>
  <tr>
    <td class="tg-16zm">Art</td>
    <td class="tg-tng1">Angabe ob es sich um einen Datensatz (strukturiert) oder ein Dokument (unstrukturiert) handelt.</td>
    <td class="tg-54w3">Datensatz</td>
  </tr>
  <tr>
    <td class="tg-16zm">Kategorie</td>
    <td class="tg-tng1">Zugehörigkeit zu einer Kategorien nach DCAT-AP.de, durch ein Drop-Down-Menü auswählbar.</td>
    <td class="tg-54w3">Wirtschaft</td>
  </tr>
  <tr>
    <td class="tg-16zm">Beschreibung</td>
    <td class="tg-tng1">Kurzer Fließtext der erklärt welche Informationen im Datensatz vorhanden sind, auf welchen Ort und Zeitraum er sich bezieht und wer die Daten zur Verfügungs stellt.</td>
    <td class="tg-54w3">Standorte, Angebot, Öffnungszeiten und Kontaktinformationen der Gastronomien in Berlin, die derzeit (während laufender Ausgangsbeschränkungen und Kontaktverbote durch Corona) einen Liefer- und/oder Abholdienst für ihre Speisen anbieten. Alle Daten stammen aus einer laufenden Umfrage. Die Daten werden nach Möglichkeit täglich aktualisiert.</td>
  </tr>
  <tr>
    <td class="tg-lu18">Veröffentlichende Stelle</td>
    <td class="tg-eahn">Name der Stelle die die Daten zur Verfügung stellt.</td>
    <td class="tg-o9w4">Senatsverwaltung für Wirtschaft, Energie und Betriebe</td>
  </tr>
  <tr>
    <td class="tg-lu18">Kontaktperson</td>
    <td class="tg-eahn">Name der Person, die aktuell bei der veröffentlichenden Stelle tätig ist und inhaltliche Fragen zum Datensatz beantworten kann.</td>
    <td class="tg-o9w4">Max Muster</td>
  </tr>
  <tr>
    <td class="tg-lu18">Verantwortlichkeit - Landesebene</td>
    <td class="tg-eahn">Verantwortliche Stelle auf Landesebene.</td>
    <td class="tg-o9w4">Senatsverwaltung für Umwelt, Verkehr und Klimaschutz Berlin</td>
  </tr>
  <tr>
    <td class="tg-lu18">Ansprechperson - Landesebene</td>
    <td class="tg-eahn">Konkrete Ansprechperson auf Landesebene mit Kontaktinformation.</td>
    <td class="tg-o9w4">Frau Maria Mustermann, maria.mustermann@email.de, 030 - 111 111</td>
  </tr>
  <tr>
    <td class="tg-lu18">Datenhoheit bei</td>
    <td class="tg-eahn">Die Abteilung / Institution die diese Daten bereitstellt.</td>
    <td class="tg-o9w4">Senatsverwaltung für Umwelt, Verkehr und Klimaschutz Berlin</td>
  </tr>
  <tr>
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
</div>


## Download

Sie können die Tabelle als Excel- oder Word-Dokument herunterladen, um Metadaten für die Veröffentlichung vorzubereiten, weiterzureichen oder als Vorlage für eine spätere Veröffentlichung abzuspeichern.


[Download der Metadaten-Tabelle als .xls](/assets/file-download/open_data_checkliste.pdf)

[Download der Metadaten-Tabelle als .doc](/assets/file-download/open_data_checkliste.pdf)

<br>

\[1\] Neumaier, S.; Umbrich, J.; Pollers, A.: Automated Quality Assessment of Metadata across Open Data Portals, ACM Journal of Data and Information quality V, N., Article A, January 2016.