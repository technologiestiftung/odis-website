---
layout: news
tags: post
title: "Wer liest was? Stadtteilbibliothek Pankow veröffentlicht ersten offenen Datensatz zu Bibliotheksdaten in Berlin"
metaDescription: Im Zusammenspiel zwischen der Stadtteilbibliothek Pankow und ODIS konnte ein interessanter Datensatz auf dem Open Data Portal veröffentlicht werden, der Informationen zu allen über 1,5 Millionen getätigten Ausleihen und Verlängerungen in Pankower Bibliotheken im Jahr 2022 beinhaltet. Wir verraten welche Herausforderungen wir vor der Veröffentlichung meisterten und geben einen kurzen Einblick in den Datenschatz.
categories: aktuelles
visible: true
urlText: Zum Blogbeitrag
---
# Pankow veröffentlicht ersten Open-Data-Datensatz 
Die Leitung der Janusz-Korczak-Bibliothek in Pankow begann im letzten Jahr mit dem Vorhaben Bibliotheksdaten als offene Daten bereitzustellen. Ziel der Bibliotheksleitung ist es mithilfe der offenen Daten gezieltere Analysen vornehmen zu können, um beispielsweise das Nutzungsverhalten oder die Reichweite der einzelnen Bibliotheksstandorte auszuwerten.  

Neugierig darauf, welche spannenden Informationen in den Daten zu entdecken sind, haben wir als ODIS gemeinsam mit Karsten Gartner als Open-Data-Beauftragten des Bezirks umgehend bei der Aufbereitung, Anonymisierung und Bereitstellung der Daten unterstützt. 

Der Datensatz ist [hier](https://daten.berlin.de/datensaetze/ausleihen-öffentlichen-bibliotheken-pankow-2022) im Berliner Open Data Portal verlinkt.

## Von sensiblen Daten zu Open Data konformen Daten

Über das zentrale Verbundservicezentrum (VSZ) der Zentral- und Landesbibliothek (ZLB) erhält die Pankower Stadtteilbibliothek Statistiken über die Medienausleihungen im Bezirk. 
Bei der ersten gemeinsamen Sichtung des Datensatzes zur Ausleihstatistik vor Ort kristallisierten sich drei zentrale Herausforderungen heraus:
- Wie können die Daten so überarbeitet werden, dass keine Rückschlüsse auf die Benutzer:innen gezogen werden können, ohne gleichzeitig einen allzu hohen Informationsverlust zu riskieren.
- Wie kann der mit Fachbegriffen und Codes gespickte Datensatz so aufgewertet werden, dass die Informationen von Nutzer:innen genutzt werden können? 
- Wie kann eine erfolgreiche Anbindung an das Berliner Open Data Portal und eine jährliche Aktualisierung realisiert werden?

<center>
{% include "macro-image-section-small.html", src:"/assets/images/Bibliotheksdaten_auszug_rohdatensatz.pdf", caption: "Der Rohdatensatz enthält sensible Daten z.B. zu Alter und Wohnort auf Ebene der Teilverkehrszellen". %}
</center>
<br>
<br>

### Anonymisierung  der Daten: Wie lassen sich Rückschlüsse auf die Nutzer:innen vermeiden?

Zunächst haben wir einen Datensensibilitäts-Check durchgeführt und geprüft, ob aufgrund der räumlichen Ebene Rückschlüsse auf die einzelnen Nutzer:innen gezogen werden können, zum Beispiel auf das Alter oder das Geschlecht. Da es sich bei den zurgunde liegenden räumlichen Attributen um die kleinräumliche Einheit der Teilverkehrsräume (TVZ) handelt, in der zum Teil weniger als 100 Menschen gemeldet sind, haben wir eine grundlegende Anonymisierung der Daten vorgenommen, um Rückschlüsse zu vermeiden. 

Für den Anonymisierungsprozess haben wir folgende Vorbereitungsschritte durchgeführt:
- Anforderung der Bevölkerungsstatistik zu den TVZ vom Amt für Statistik Berlin Brandenburg 
- Verschneidung zwischen TVZ/Bevölkerung mit dem Datensatz zur Ausleihstatistik
- Bildung von Altersgruppen nach den Altersgruppenklassen des AfS und Löschung der Spalten mit konkreten Geburtsjahr und Alter.

Anschließend untersuchten wir den Datensatz nach TVZ, in denen weniger als 100 Personen leben und haben die entsprechenden Einträge auf *NaN* gesetzt. Dabei ergänzten wir den Datensatz um die Spalte Bezirk, um die Zuordnung der TVZ zum Bezirk zu behalten. Weiter wurden alle personenbezogenen Einträge  überprüft, ob eine bestimmte Merkmalskombination einer Person zugeordnet werden können. Traf dies zu, wurden die Werte zu TVZ, Geschlecht, Altersgruppe und Benutzergruppe iterativ auf *NaN* gesetzt. Zusätzlich wurden die exakten Zeitstempel zu jeder Ausleihe auf Monatsangaben generalisiert.

Die einzelnen Anonymisierungsschritte wurden automatisiert in einem nicht öffentlichen [Deepnote-Skript](https://deepnote.com) durchgeführt. Unser Vorgehen wurde vom bezirklichen Datenschutzbeauftragten positiv bewertet und der Datensatz zur Veröffentlichung freigegeben.

### Aufwertung des Datensatzes 

Weiter werteten wir den Datensatz auf, um Nutzer:innen die Weiterverarbeitung der Daten zu erleichtern. Redundante Spalten wurden rausgenommen und Codes z.B. für Mediennummern, Benutzergruppen oder Fächerstatistiken übersetzt. Gleichzeitig wollten wir den Datensatz bzw. die Beschreibung der Daten nur dort verändern, wo eine nachvollziehbare Übersetzung Sinn macht. So blieben zum Beispiel die Sigelnummern im Datensatz drin, die jeweils für einen Standort stehen. Dafür stellt die Stadtteilbibliothek eine Schlüsseltabelle auf dem Open Data Portal zum Downbload zur Verfügung um die Sigel einem Bibliotheksstandort zuordnen zu können.

### Bereitstellung und Aktualisierung der Daten

Mit über 1.5 Mio. Einträgen und einem Volumen von rund 300 MB ist der Datensatz größer als die üblichen Datensätze, die auf dem Open Data Portal veröffentlicht werden. So liegt das Upload-Maximum bei Imperia bei 30 MB. Dank einer Schul-Cloud des Bezirkes Pankow konnte der OD-Beauftragte Karsten Gartner den Datensatz hochladen und über die Datenrubrik auf dem Open Data Portal bereitstellen.

Für eine anvisierte jährliche Aktualisierung des Datensatzes kann die Stadtteilbibliothek nur den aktualisierten Datensatz austauschen und im von der ODIS bereitstgesetllten Skript durchlaufen lassen, um die Anonymisierung und Aufbereitung der Daten durchzuführen.

## Einblick in die Daten 
Abschließend wollen wir euch einen ersten Einblick in die Daten nicht vorenthalten. Jeder Eintrag stellt einen Ausleih- oder Verlängerungsvorgang dar – sowohl erfolgreich als auch fehlgeschlagen und enthält vielfältige Informationen über den Ausleihvorgang, das Medium selbst oder über die Nutzer:innen. So lässt sich durch Abfragen des Datensatzes schnell herausfinden, welche Sachbücher bei Kinder- und Jugendlichen gefragt sind, welche Bibliotheksstandorte am häufigsten genutzt oder wann Medien über den Jahresverlauf gesehen am meisten nachgefragt werden.

Im Open Data Portal Eintrag des Datensatzes liegt auch eine Dokumentation der Bibliotheksdaten bei, die eine Beschreibung der Daten erleichtert.

Wir wünschen viel Vergnügen beim Stöbern durch die (digitale) Stadtteilbibliothek Pankow!


<center>
{% include "macro-image-section-small.html", src:"/assets/images/Bibliotheksdaten_auszug_doku.png", caption:"Auszug aus der Dokumentation, bereitgestellt durch die Stadtteilbibliothek Pankow" %}
</center>
