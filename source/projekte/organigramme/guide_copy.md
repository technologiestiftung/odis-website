---
layout: default
title: In 10 Schritten zum maschinenlesbaren Organigramm
visibleLink: false
blogLinkTitle: "Hier geht's zum Projekt"
#blogLink: https://bezirksregionenprofile-ts.netlify.com/
metaDescription: Digitale Anwendung um Organigramme der Berliner Verwaltung einheitlicher und maschinenlesbar zu gestalten.
date: 2022-02-19
visible: false
---


# In 10 Schritten zum maschinenlesbaren Organigramm


Das Berliner Organigramm Tool ist ein Prototyp der Open Data Informationsstelle Berlin (ODIS) und hat zum Ziel, die Organigramme der Berliner Verwaltung in ein einheitlicheres und vor allem maschinenlesbares Format zu bringen. Das Tool funktioniert direkt in Ihrem Browser; ein Download oder eine Anmeldung sind nicht nötig. Neben der grafischen Darstellung, welche sich u.a. als PDF exportieren lässt, legt die Anwendung ihr Organigramm als eine [JSON](http://www.json.org/json-de.html)-Datei an. In dieser werden die eingegebenen Daten in einem einfachen Textformat gespeichert, können maschinenlesbar ausgewertet und auch wieder in das Tool eingeladen werden. Durch das JSON-Format werden die Daten als Open Data nutzbar. Gleichzeitig kann diese Vorgehensweise auch das Anlegen der Organigramme vereinfachen und vereinheitlichen.



1. Tool öffnen: Öffnen Sie folgende Internetseite in Ihrem Browser: [https://berlin-organigramm-tool.netlify.app/](https://berlin-organigramm-tool.netlify.app/) Am besten funktioniert die Anwendung in Firefox und Chrome.
2. Dokument neu erstellen oder öffnen: Beim ersten Aufruf wird ein neues Dokument erstellt. Später werden Änderungen automatisch für eine gewisse Zeit in Ihrem Browser gespeichert, Sie können jedoch jederzeit über die Bedienungsleiste oben links ein neues Dokument anlegen. Über ‘Neues Dokument’ können Sie ein Dokument neu erstellen oder eine bestehende JSON-Datei öffnen. 

> Zum aktuellen Zeitpunkt ist es leider nicht möglich, ein bereits bestehendes Organigramm im PDF-Format zu importieren. 
> Sollten Sie noch keine JSON-Datei aus dem Tool zu Ihrem Organigramm haben, müssen Sie das Dokument neu erstellen.


3. Im Tool navigieren: In der Bedienungsleiste oben links können Sie, wie bereits erwähnt, ein Dokument neu erstellen oder öffnen. Des Weiteren können Sie dort die Dokumentinformationen bearbeiten und das Dokument speichern oder exportieren. In der Leiste oben rechts gibt es Pfeile für ‘rückgängig’ machen bzw. ‘wiederholen’. Unten rechts können Sie rein- und rauszoomen sowie die Ansicht auf das ganze Dokument aktivieren. Um sich an eine andere Stelle im Dokument zu bewegen, halten Sie die Maustaste gedrückt und ziehen Sie das Dokument.

4. Dokumentinformationen bearbeiten: Über die Dokumentinformationen können Sie den Namen Ihrer Verwaltung als Dokumenttitel angeben. Des Weiteren lässt sich die Ausrichtung des Dokuments (Hochformat oder Querformat) und die Ausgabegröße einstellen. Die Ausgabegröße können Sie auch später anpassen, wenn Ihr Organigramm größer wird und die aktuelle Ausgabegröße nicht ausreicht. In den Dokumentinformationen können Sie ebenfalls ein Logo einbinden. Bisher sind aus Lizenzgründen nur die Logos der Bezirksverwaltungen auswählbar. Alternativ können Sie aber selbst eine Datei hochladen. Neben Datum und Name des Verfassers oder der Verfasserin kann hier auch die Fußzeile bearbeitet werden.

5. Fußzeile bearbeiten: In der Fußzeile können Sie weitere Informationen zum Organigramm eintragen. Die Formatierung funktioniert über Markdown, Sie können jedoch auch einfach die Werkzeugleiste zum formatieren von Text verwenden. Wenn Sie beispielsweise ein * einbinden möchten, ohne dass dies als Markdown Syntax interpretiert und zu einer Kursiv-Formatierung führt, müssen Sie es wie folgt eintragen: \* Die Fußzeile wird stets in Spalten dargestellt, eine Spalte entspricht einem Spiegelpunkt.

6. Organisationseinheiten bearbeiten: Mit Klick auf eine Organisationseinheit öffnet sich das Bearbeitungsfenster. Dort können Sie Daten eingeben wie Bezeichnung, Darstellungsstil, Kontaktdaten und Anschrift. Ferner können Sie Abteilungen und Personen mit jeweils eigenen Daten anlegen.
7. ~~Hauptorganisation eintragen: Als oberste Organisation tragen Sie bitte den Titel Ihrer Verwaltung ein, auch wenn dieser schon im Dokumenttitel steht. Dies ist wichtig für die Hierarchie in der maschinenlesbaren JSON-Datei.~~
8. Organisationseinheiten neu anlegen oder entfernen: Im Bearbeitungsfenster einer Organisationseinheit können Sie ebenfalls eine neue Nebenorganisation oder eine neue Suborganisation einfügen, oder die Organisationseinheit entfernen. Organisationseinheiten kopieren, ausschneiden, einfügen oder entfernen können Sie auch mit Rechtsklick auf eine Organisationseinheit.
9. *noch genauer erklären was als Abteilung und was als Suborganisation angelegt werden soll - vielleicht auch anhand von einem Beispiel?*
10. Dokument speichern und exportieren: Am Ende sollten Sie Ihr erstelltes Organigramm unbedingt speichern. Wählen Sie ‘sichern’ um die Daten als JSON-Datei herunterzuladen. Diese Datei sollten Sie aufbewahren, um später damit weiterarbeiten zu können und ggf. das Organigramm anpassen zu können. Unter ‘Exportieren’ werden Ihnen verschiedene Dateiformate zur Auswahl gestellt, u.a. können Sie die grafische Darstellung des Organigramms als PDF exportieren. Die maschinenlesbare JSON-Datei sollten Sie als Open Data im Open Data Portal Berlin zur Verfügung stellen. Eine automatische Anbindung ist zum aktuellen Zeitpunkt leider noch nicht integriert. Kommen Sie bei Fragen zur Veröffentlichung als Open Data gerne auf uns, die [Open Data Informationsstelle Berlin](https://odis-berlin.de/), und [die Open Data Beauftragte oder den Open Data Beauftragten Ihrer Verwaltung](https://www.berlin.de/sen/wirtschaft/digitalisierung/open-data/open-data-beauftragte/) zu. 

