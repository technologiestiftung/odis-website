---
layout: default.liquid
title: tags
---

# Metadaten-Tags

Wie in unserem [Leitfaden](metadaten.html) erklärt, spielen Metadaten u.a. eine wichtige Rolle bei der Nutzbarkeit und Auffindbarkeit von offenen Daten. Im Falle der Auffindbarkeit, sind die sogenannten Tags (auch als Schlüsselwörter bekannt) besonders kritisch.

Ein Tag ist ein Wort oder ein Begriff, der einen Datensatz beschreibt. Ein Tag kann die thematischen Inhalte eines Datensatzes beschreiben („Fahrrad“ oder „Krankenhaus“) oder auch den Kontext rund um den Datensatz (z.B. den Zusammenhang zwischen dem Datensatz und einem bestimmten Gesetz oder Ereignis).

## Wozu brauchen wir Tags?

Tags helfen Nutzer:innen dabei relevante Datensätze zu finden. So könnte eine interessierte Person zum Beispiel für ein Projekt Daten zur Radverkehrsinfrastruktur im [Datenportal](https://daten.berlin.de) suchen, weiß aber nicht, welche offenen Daten dazu überhaupt existieren, geschweige denn welchen Titel die relevanten Datensätze tragen. Der Begriff „Radverkehrsinfrastruktur“ ist sehr spezifisch und bei seiner Suche im Open Data Portal ohne Ergebnisse, was nicht überraschend ist. Gesucht wird daher meist mit allgemeiner formulierten Begriffen, in diesem Fall z.B. mit „Fahrrad“, um möglichst viele Datensätze mit einer Relevanz zum Thema Radverkehr, oder auch eben nur den einen Gewünschten zu finden. Mit der Suche nach „Fahrrad“ wird einem u.a. direkt der Geodatensatz „Radverkehrsanlagen“ angezeigt, für den das Wort „Fahrrad“ als Schlüsselwort in den Metadaten hinterlegt ist.

Tags können für Nutzer:innen ebenfalls nützlich sein, um zusammenhängende Datensätze zu finden. So könnte eine Person z.B. den Datensatz „Entwicklung Luftqualität – Emissionen 2015“ gefunden haben. Sie will nun wissen, ob es weitere Datensätze zum Thema Luftqualität in der Stadt gibt. Statt über die Suchfunktion des Portals nun verschiedene Begriffe rund um Luftqualität einzugeben, kann sie auch einfach die hinterlegten Tags für den Datensatz anschauen und direkt auf „Luftqualität“ klicken. Daraufhin werden alle Datensätze angezeigt, die diesen Tag ebenfalls nutzen.

Betrachtet man die Gesamtheit der Tags im Berliner Datenportal, kann man außerdem ein paar Rückschlüsse über den Stand von Open Data in Berlin ziehen. Es gibt verschiedene Möglichkeiten, die Tags des Portals zu analysieren. Eine davon ist zu schauen, welche Tags oft in Zusammenhang miteinander benutzt werden, um Themencluster aus dem Datenportal zu erkennen. Wir haben eine [Netzwerkanalyse von häufigen Tags im Berliner Datenportal](../projekte/tag_analyse/) durchgeführt und die Ergebnisse in einem interaktiven Graphen visualisiert.

<center>
  <a href="../../projekte/tag_analyse/">{% include "macro-image-section.html", src:"/assets/images/tag_analyse.png"%}</a>
</center>
<br>

## Wie wähle ich effektive Tags als Datenbereitsteller:in?

Natürlich ist das Potenzial von Tags, die Nutzer:innen zu ihren gewünschten Datensätzen zu führen, komplett davon abhängig, wie effektiv die angegeben Tags wirklich sind. Hier spielen die Datenbereitsteller:innen eine kritische Rolle, denn sie bestimmen die Tags. Um das Potenzial von Tags richtig auszunutzen, empfehlen wir für jeden Datensatz mindestens 5 Tags anzulegen (aber gerne mehr!). Und falls Sie sich fragen, wie man besonders effektive Tags auswählt, hier ein paar Tipps:

- **Redundante Tags wie „Berlin“ oder „Bezirk" vermeiden –** Dass Ihr Datensatz was mit Berlin zu tun hat, ist schon klar, weil es hier um das Berliner Open Data Portal handelt, dieser Tag ist daher ohne Mehrwert. :) Auch ein Tag wie „Bezirk“ als Angabe des räumlichen Bezugs ist redundant, weil dieses Merkmal bereits über ein anderes Metadatenfeld abgedeckt wird („Geographische Auflösung“) und daher auch über die Suche auffindbar ist.
- **Lieber etwas allgemeiner statt zu spezifisch –** Der Datensatztitel und die Datensatzbeschreibung dienen dazu genau zu sagen worum es in dem Datensatz geht. Im Vergleich dazu sollten die Tags daher eher kurz, prägnant und allgemein sein. (z.B. „Covid-19“ als Tag statt „COVID-19 Erkrankungen nach Altersgruppe“). Ihr Datensatz ist übrigens auch über alle Begriffe, die in Titel und Beschreibung vorkommen, über die Suche auffindbar.
- **Schreibweisen (nicht) beachten und mehrere Begriffe auf einzelne Tags aufteilen –** Die Suchfunktion des Portals macht es Ihnen etwas leichter, da sie automatisch Groß-und Kleinschreibung ignoriert, ebenso bestimmte Sonderzeichen wie den Bindestrich. Sie müssen also nicht mehrere Tags für verschiedene Schreibweisen anlegen wie z.B. „COVID19“ und „Covid-19“. Was die Suche dagegen nicht kann, ist mehrere Wörter eines Tags getrennt zu betrachten. Der Datensatz mit dem Tag „Vermögens- und Finanzlage“ ist so z.B. über die Suche nach „Finanzlage“ auffindbar, aber nicht nach „Vermögenslage“. Besser wäre hier die Trennung in zwei einzelne Tags wie „Vermögen“ und „Finanzen“.
- **Nicht nur fachspezifische Wörter bzw. Verwaltungsbegriffe nutzen –** Die Sprache der Verwaltung ist ja für viele Bürger:innen eher fremd. Wenn jemand sich beispielsweise dafür interessiert, wie viele Sozialleistungen Asylbewerber:innen im letzten Jahr erhalten haben, sucht diese Person wahrscheinlicher nach „Asylbewerber Sozialleistungen“ (oder vielleicht nur „Asylbewerber“) und nicht nach „Sozialleistungen nach AsylbLG“. Nehmen Sie deshalb bei der Auswahl an Tags gedanklich auch die Position von Personen an, die weniger mit Ihrer Thematik vertraut sind, um die Daten für Nutzer:innen innerhalb der Verwaltung, sowie für interessierte Bürger:innen verfügbar zu machen.
