---
layout: default
title: Metadaten-Leitfaden
---

# Was sind Metadaten?

Daten im Open-Data-Portal zu veröffentlichen, ist ein wichtiger Schritt zur Umsetzung der Open-Data-Richtlinie. Wichtig zu wissen ist allerdings, dass ein vollständiger Datensatz nicht nur aus den Daten(-werten) allein besteht, sondern ebenfalls die Angaben der sogenannten Metadaten umfasst. Ohne Metadaten können die Daten eventuell nicht optimal gefunden und genutzt werden oder sind im schlimmsten Fall sogar unbrauchbar, da die Anwender\*innen sie nicht in den richtigen Kontext setzen können. Doch was sind Metadaten eigentlich und warum sind sie so wichtig? 


#### "Daten über Daten"
**Metadaten be- und umschreiben die eigentlichen Daten, es sind „Daten über Daten“.** Sie sind nicht nur für Open Data relevant, sondern finden sich auch in vielen anderen Bereichen. Eine Musikdatei beispielsweise, enthält nicht nur die Musik an sich, sondern auch eingebettete Informationen, wie den Interpreten, das Musikgenre oder das Erscheinungsjahr des Musikstückes. Ohne diese Angaben wäre es nicht möglich die Musik in einer entsprechenden Bibliothek oder Anwendung zu suchen oder zu sortieren.
Im Falle von Verwaltungsdaten sieht das ähnlich aus. Nur durch den Datensatz ergänzende Angaben, wie dem Namen der veröffentlichenden Stelle, Kategoriezugehörigkeit und das Veröffentlichungsdatum, können die Daten von den Nutzer\*innen schnell gefunden und richtig eingeordnet werden.

#### Metadatenqualität
So trivial es auch erst einmal klingen mag, in der Praxis zeigt sich, dass viele Datensätze keine akkuraten, anwenderfreundlichen Metadaten besitzen. Für eine Studie aus dem Jahr 2016 \[1\] wurden im Rahmen einer Qualitätsbewertung von Open Data deren Metadaten auf verschiedene Qualitätskriterien überprüft. Insgesamt wurden die Metadaten von über 1,1 Millionen Datensätzen auf 261 verschiedenen Open-Data-Portalen der ganzen Welt aus dem Bereich Verwaltung, aber auch aus dem privaten Sektor, analysiert. Laut den Ergebnissen konnten hierbei einige Defizite festgestellt werden. So verfügte zum Beispiel der überwiegende Anteil offener Datensätze über keine maschinenlesbare E-Mail oder URL-Adresse zu einem Ansprechpartner. Solch fehlende Informationen zur Herkunft von Daten mindern die Transparenz und nachhaltige Nutzbarkeit von Open Data ungemein.

Ein weiteres bekanntes Problem sind nicht vorhandene oder ungenaue Angaben zur zeitlichen Auflösungen und zum Aktualisierungsrhythmus. Hier wird es Nutzer\*innen erschwert, zu erkennen ob sie den aktuellsten Datensatz zur Verfügung stehen haben oder mit veralteten Daten handhaben. Ein anderes Beispiel sind Defizite bei der Auffindbarkeit von Daten. Diese können sich unter anderem dann ergeben, wenn wenige oder schlechte Tags in den Metadaten festgelegt sind. Die Tags fungieren als eine Art Suchbegriff. Der Datensatz kann über seinen Titel und die festgelegten Tags durch die Suchfunktion im Open-Data-Portal gefunden werden. Dies wird besonders dann wichtig, wenn potentielle Datennutzer\*innen nicht nach einem speziellen Datensatz suchen, sondern die Datenverfügbarkeit zu einem übergeordneten Thema ausloten, oder wenn ein Datensatz sehr viele verschiedene Informationen enthält. Ein Datensatz der beispielsweise das gesamte Streckennetz und die Fahrpläne des ÖPNV enthält, sollte auch durch Tags wie *U-Bahn*, *Tram* usw. auffindbar sein.

#### Metadatenstandards 
Um die Metadaten offener Verwaltungsdaten von ganz Deutschland möglichst einheitlich zur Verfügung zu stellen, wurde vom IT-Planungsrat ein Datenstandard für Metadaten entwickelt, der sogenannte **DCAT-AP.de** (die deutsche Umsetzung des EU-weiten Standards DCAT-AP). Durch die Einhaltung des dort festgelegten Datenschemas kann sichergestellt werden, dass Metadaten leicht analysiert und zwischen Portalen und Anwendungen ausgetauscht werden können. Der Standard legt sowohl die notwendigen Inhalte der Metadaten fest (z.B. Angabe der Lizenz, Angabe des Veröffentlichungsdatums), als auch ein kontrolliertes Vokabular, dass verwendet werden soll, um diese Angaben zu tätigen. Wenn Sie mehr über DCAT-AP.de erfahren möchten, empfehlen wir Ihnen unsere [Einführung](https://lab.technologiestiftung-berlin.de/projects/opendata-metadata-dcat-ap/de/) auf der Seite der Technologiestiftung Berlin.

#### Metadaten im Open-Data-Portal Berlin 
Bei der Veröffentlichung von Daten im Open-Data-Portal Berlin müssen die Metadaten über ein Eingabeformular eingetragen werden. Dieses orientiert sich an DCAT-AP.de und stellt sie auch für die weitere Nutzung durch das Metadaten-Portal für Deutschland [govdata.de](https://www.govdata.de) bereit. Alles worum Sie sich kümmern müssen, ist also alle geforderten Felder des Formulars möglichst akkurat auszufüllen. **Die untenstehende Tabelle zeigt alle möglichen Felder zur Eintragung von Metadaten über das Datenregister des Open-Data-Portal Berlins mit den jeweiligen Erläuterungen und Beispielen.** 


<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin-bottom: 25px}
.tg td{font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-zj9c{font-style:italic;background-color:#495992;color:#ffffff;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-eahn{background-color:#30b3ff;color:#000000;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-km2t{font-weight:bold;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-o9w4{background-color:#95d2f6;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-tng1{background-color:#c0c0c0;color:#000000;border-color:#efefef;text-align:left;vertical-align:top}
.tg .tg-zv4m{border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-u6gx{font-weight:bold;background-color:#c0c0c0;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-lu18{font-weight:bold;background-color:#30b3ff;color:#000000;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-xm73{font-size:22px;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-xm74{font-size:13px;border-color:#ffffff;text-align:justify;vertical-align:top}
.tg .tg-czno{font-size:16px;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-16zm{font-weight:bold;background-color:#c0c0c0;color:#000000;border-color:#efefef;text-align:left;vertical-align:top}
.tg .tg-eo4b{font-style:italic;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-54w3{font-style:italic;background-color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-ozf7{font-size:16px;background-color:#30b3ff;color:#000000;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-ortv{font-size:16px;background-color:#213a8f;color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-dydg{font-weight:bold;background-color:#213a8f;color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-lhx1{background-color:#213a8f;color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-hvao{background-color:#c0c0c0;border-color:#ffffff;text-align:left;vertical-align:top}
.rot {color: #f00;}
</style>

<div style="overflow-x:auto;">
<table class="tg">
  <tr>
    <th class="tg-xm73" colspan="2">Vorlage für das Metadaten-Formular</th>
    <th class="tg-zv4m"></th>
    <th class="tg-eo4b"></th>
  </tr>
  <tr>
  <th class="tg-xm74" colspan="3">Die Felder zu denen auf jeden Fall Metadaten erforderlich sind, unabhängig davon um welche Art Datensatz es sich handelt, sind mit einem <span class="rot">*</span> markiert. Die verbleibenden Felder kommen nur bei bestimmten Datensätzen zum Einsatz. Beim Einstellen von Daten in das Open-Data-Portal mittels Imperia, tragen die einzelnen Metadaten-Felder leicht andere Bezeichnungen (z.B. heißen die Tags dort Schlüsselwörter). Der erwartete Inhalt ist aber der Gleiche.</th>
  <th class="tg-zv4m"></th>
  <th class="tg-eo4b"></th>
  </tr>
  <tr>
    <td class="tg-km2t">Metadaten-Feld</td>
    <td class="tg-zv4m">Erläuterung</td>
    <td class="tg-eo4b">Beispiel</td>
  </tr>
  <tr>
    <td class="tg-dydg">Titel<span class="rot">*</span></td>
    <td class="tg-o9w4">Kurzer, prägnanter Titel ggf. mit zeitlichem und/oder geografischem Bezug (z.B. wenn nur Daten aus einem Monat oder aus einem Bezirk enthalten sind).</td>
    <td class="tg-54w3">Gastronomien mit Liefer- oder Abholservice</td>
  </tr>
  <tr>
    <td class="tg-dydg">Art<span class="rot">*</span></td>
    <td class="tg-o9w4">Angabe ob es sich um einen strukturierten Datensatz (z.B. eine CSV-Datei) oder ein Dokument (z.B. eine PDF-Datei) handelt.</td>
    <td class="tg-54w3">Datensatz</td>
  </tr>
  <tr>
    <td class="tg-dydg">Kategorie<span class="rot">*</span></td>
    <td class="tg-o9w4">Zugehörigkeit zu einer Kategorie, durch ein Drop-Down-Menü auswählbar. Durch ihre Kategoriezugehörigkeit können die Daten besser im Portal gefunden werden.</td>
    <td class="tg-54w3">Wirtschaft</td>
  </tr>
  <tr>
    <td class="tg-dydg">Beschreibung<span class="rot">*</span></td>
    <td class="tg-o9w4">Kurzer Fließtext, der erklärt welche Informationen im Datensatz vorhanden sind, auf welchen Ort und Zeitraum er sich bezieht und wer die Daten zur Verfügung stellt. Hier sollte auch angegeben werden, in welchem Rhythmus die Daten aktualisiert werden. Diese Beschreibung dient einem schnellen Überblick über die bereitgestellten Daten. Sie kann auch weitere Aspekte enthalten, zum Beispiel Informationen die notwendig sind, um den Datensatz zu verstehen.</td>
    <td class="tg-54w3">Standorte, Angebot, Öffnungszeiten und Kontaktinformationen der Gastronomien in Berlin, die einen Liefer- und/oder Abholdienst für ihre Speisen anbieten. Alle Daten stammen aus einer laufenden Umfrage im Auftrag von SenWEB. Die Daten werden nach Möglichkeit täglich aktualisiert.</td>
  </tr>
  <tr>
    <td class="tg-dydg">Veröffentlichende Stelle<span class="rot">*</span></td>
    <td class="tg-o9w4">Name der Stelle, Behörde oder Institution die die Daten zur Verfügung stellt.</td>
    <td class="tg-54w3">Senatsverwaltung für Wirtschaft, Energie und Betriebe</td>
  </tr>
  <tr>
    <td class="tg-dydg">Kontaktperson</td>
    <td class="tg-o9w4">Name der Person, die aktuell bei der veröffentlichenden Stelle tätig ist und inhaltliche Fragen zum Datensatz beantworten kann.</td>
    <td class="tg-54w3">Max Muster</td>
  </tr>
  <tr>
    <td class="tg-dydg">Kontakt-E-Mail<span class="rot">*</span></td>
    <td class="tg-o9w4">E-Mail-Adresse über die die Kontaktperson (idealerweise über ein Funktionspostfach) zu erreichen ist oder Link zu einem Kontaktformular. Auch bei Personal- oder Zuständigkeitswechsel sollten die Eintragungen zu Kontaktperson und -adresse aktuell gehalten werden.</td>
    <td class="tg-54w3">info.betriebe@senweb.berlin.de</td>
  </tr>
  <tr>
    <td class="tg-dydg">Webadresse</td>
    <td class="tg-o9w4">Falls vorhanden, Angabe einer Website auf der die Daten näher beschrieben werden oder auf der ergänzende Information, zum Beispiel zur Datenerhebung oder einem zugehörigen Projekt, vorhanden sind.</td>
    <td class="tg-54w3">https://www.berlin.de/sen/web/service/liefer-und-abholdienste/</td>
  </tr>
  <tr>
    <td class="tg-dydg">Lizenz<span class="rot">*</span></td>
    <td class="tg-o9w4">Auswahl einer offenen, eindeutigen Lizenz aus einem Drop-Down-Menü. Die meisten der Datensätze im Datenportal sind mit CC-BY 3.0 lizenziert, der vom Datenportal empfohlen Lizenz. Informationen zu den verfügbaren Lizenzen finden Sie <a href="https://berlinonline.github.io/open-data-handbuch/#lizenz-festlegen">hier</a>.</td>
    <td class="tg-54w3">Creative Commons Attribution CC BY 3.0</td>
  </tr>
  <tr>
    <td class="tg-dydg">Text für Namensnennung</td>
    <td class="tg-o9w4">Exakter Text der von Nutzer*innen angegeben werden muss, wenn sie die Daten verwenden und die gewählte Lizenz eine Namensnennung vorsieht (z.B. CC-BY 3.0). Für gewöhnlich wird der Name der veröffentlichenden Stelle genannt.</td>
    <td class="tg-54w3">Die Daten wurden von der Senatsverwaltung für Wirtschaft, Energie und Betriebe und ODIS erhoben.</td>
  </tr>
  <tr>
    <td class="tg-dydg">Veröffentlichungsdatum<span class="rot">*</span></td>
    <td class="tg-o9w4">Datum der ersten Veröffentlichung der Daten Es entspricht nicht dem Veröffentlichungsdatum im Open-Data-Portal, wenn die Daten bereits vorher an anderer Stelle veröffentlicht wurden.</td>
    <td class="tg-54w3">01.02.2020</td>
  </tr>
  <tr>
    <td class="tg-dydg">Aktualisierungsdatum</td>
    <td class="tg-o9w4">Datum der letzten Änderung am Datensatz. Wie beim Veröffentlichungsdatum entspricht dieses Datum nicht zwangsweise dem Tag der Aktualisierung im Datenportal, sondern dem Tag an dem die aktualisierten Daten zum ersten Mal veröffentlicht wurden.</td>
    <td class="tg-54w3">01.05.2020</td>
  </tr>
  <tr>
    <td class="tg-dydg">Zeitliche Auflösung</td>
    <td class="tg-o9w4">Falls vorhanden, Zeitabschnitte auf die sich die einzelnen Daten beziehen. Das können zum Beispiel Jahre, Monate, Tage oder Stunden sein.</td>
    <td class="tg-54w3">-</td>
  </tr>
  <tr>
    <td class="tg-dydg">Zeitperiode</td>
    <td class="tg-o9w4">Anfangs- und Enddatum des Zeitraums auf den sich der gesamte Datensatz bezieht. Beziehen sich die Daten auf einen Stichtag, wird ein identisches Anfangs- und Enddatum angegeben.</td>
    <td class="tg-54w3">01.05.2020 - 01.05.2020</td>
  </tr>
  <tr>
    <td class="tg-dydg">Geographische Auflösung</td>
    <td class="tg-o9w4">Angabe zum geografischen Bezug der Daten. Die Daten können sich z.B. auf ganz Berlin, Bezirke, Hausadressen oder GPS-Koordinaten beziehen.</td>
    <td class="tg-54w3">Hausadressen</td>
  </tr>
  <tr>
    <td class="tg-dydg">Geographische Abdeckung</td>
    <td class="tg-o9w4">Angabe welcher Raum vom gesamten Datensatz abgedeckt wird. Das kann z.B. ganz Berlin sein oder ein bestimmter Bezirk.</td>
    <td class="tg-54w3">Berlin</td>
  </tr>
  <tr>
    <td class="tg-dydg">Tags</td>
    <td class="tg-o9w4">Aufzählung von den Datensatz beschreibenden Schlüsselwörtern, die nicht bereits durch den Titel, die Kategorie oder die Beschreibung abgedeckt sind. Der Datensatz kann anhand der Tags durch die Suchfunktion im Open-Data-Portal gefunden werden. Eine hohe Anzahl relevanter Tags erhöht somit die Auffindbarkeit des Datensatzes.</td>
    <td class="tg-54w3">Covid-19, Lieferung, Abholung, Essen, Restaurants, Kontaktbeschränkung, Kontaktlos, lunch, takeaway, takeout, delivery</td>
  </tr>
  <tr>
    <td class="tg-dydg">Sichtbarkeit<span class="rot">*</span></td>
    <td class="tg-o9w4">Wahl zwischen privat (noch nicht für die Öffentlichkeit sichtbar) oder öffentlich (Eintragung erscheint auf dem Open-Data-Portal).</td>
    <td class="tg-54w3">öffentlich</td>
  </tr>
</table>
</div>


Noch mehr Informationen zum Thema Metadaten im Berliner Open-Data-Portal finden Sie auch im [Open-Data-Handbuch](https://berlinonline.github.io/open-data-handbuch/#metadaten-des-datensatzes).

<br>

## Download

Sie können diese Tabelle als Excel- oder Word-Dokument herunterladen, um Metadaten für die Veröffentlichung vorzubereiten, weiterzureichen oder als Vorlage für eine spätere Veröffentlichung abzuspeichern.


[Download der Metadaten-Vorlage als .xlsx](/assets/file-download/Vorlage_Metadaten.xlsx)

[Download der Metadaten-Vorlage als .docx](/assets/file-download/Vorlage_Metadaten.docx)

<br>

\[1\] Neumaier, S.; Umbrich, J.; Pollers, A.: Automated Quality Assessment of Metadata across Open Data Portals, ACM Journal of Data and Information quality V, N., Article A, January 2016.