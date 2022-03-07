---
layout: project
tags: project
title: Kerndatensätze
blogLinkTitle: "Hier geht's zur Publikation"
blogLink: /assets/file-download/ODIS_Kerndatensaetze.pdf
metaDescription: Wo offene Daten das größte Potential haben
date: 2022-01-04
visible: true
indexImage: thumbnail.png
heroImage: home_globe.png
datatable: true
---

## Das Potenzial von Daten für eine Stadt

Daten haben das Potenzial, diverse Dimensionen einer Stadt zu transformieren – mit Daten können zum Beispiel Dienstleistungen und Prozesse verbessert, neue Geschäftsmodelle entwickelt und eine bessere Lebensqualität für die Bürger:innen der Stadt geschafft werden. Diese Potenziale können aber nur realisiert werden, wenn die dafür nötigen Daten überhaupt existieren – und wenn sie auch tatsächlich zugänglich und nutzbar sind.

Welche Daten sind für eine Stadt eigentlich relevant? Die Antwort hängt vom Blickwinkel ab: Geht es beispielsweise um die Bedürfnisse der Privatwirtschaft oder um den Bedarf von Bürger:innen nach mehr Transparenz? Um diese diversen Perspektiven auf Daten zu kombinieren und eine (mögliche) Antwort auf die Frage "Welche offene Daten braucht eine Stadt wie Berlin?" anzubieten, hat ODIS eine Liste von 100 sogenannten „Kerndatensätzen“ erstellt.

## Über die Liste

Kerndatensätze sind Datensätze, die wir als besonders wertvoll für Berlin bewertet haben, weil sie einen großen Mehrwert für ein breites Publikum liefern können. Für diese Liste wurden die Bedarfe und Interessen der Wirtschaft, der Wissenschaft, der Zivilgesellschaft und der Verwaltung selbst betrachtet. Die Liste ist allerdings keine abgeschlossene Aufzählung, sondern eher eine Orientierungshilfe um herauszufinden, wo wir als Stadt eigentlich anfangen und welche Datensätze wir unbedingt (noch) veröffentlichen sollten.

Die Liste von Datensätzen wird hier bereitgestellt. Sie kann nach **Kategorie** und **Name** sortiert und nach **Stichwörtern** durchsucht werden. Wenn möglich, ist außerdem der relevante **offene** Datensatz verlinkt (insofern die Daten schon als maschinenlesbare Open Data vorhanden sind), oder eine Ressource unter der die Daten zumindest **teilweise zugänglich** (also zum Beispiel nicht komplett maschinenlesbar oder in einem geringen Detaillierungsgrad) sind. Zum aktuellen Zeitpunkt sind also noch nicht alle Daten als Open Data verfügbar, aber ODIS und zahlreiche Kolleg:innen in der Berliner Verwaltung arbeiten ständig daran, immer mehr Datensätze für die Öffentlichkeit bereitzustellen.

Die vollständige Liste und Informationen dazu, wie die Datensätze ausgewählt wurden, sind in der [Veröffentlichung "Kerndatensätze für Berlin"](/assets/file-download/ODIS_Kerndatensaetze.pdf) zu finden.

<br>

<table id='kerndatentable' class="display">
{% for row in processed_kerndatensaetze %}
{% if forloop.first %}
<thead>
<tr>
{% for pair in row %}
<th>{{ pair }}</th>
{% endfor %}
</tr>
</thead>
{% endif %}
{% tablerow pair in row %}
{{ pair }}
{% endtablerow %}
{% endfor %}
</table>

<script>
$('#kerndatentable').DataTable( {
    language: {
      search: 'Stichwortsuche ',
      lengthMenu: 'Zeige _MENU_ Einträge pro Seite',
      info: 'Zeige _START_ bis _END_ von _TOTAL_ Einträgen',
      paginate: {
        first: 'Erste',
        previous:'Vorherige',
        next:'Nächste',
        last:'Letzte'
      }
    },
    "columnDefs": [
    { "orderable": false, "targets": [2,4] },
    { className: "bold", "targets": [1] },
    // { "width": "100%", "targets": [2] },
    {"className": "dt-center", "targets": 3}
  ],
    initComplete: function () {
        this.api().columns([0,3]).every( function () {
            var column = this;
            var select = $('<select><option value="">Alle</option></select>')
                .appendTo( $(column.header()))
                .on( 'change', function () {
                    var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                    );               
                    column
                        .search( val ? '^'+val+'$' : '', true, false )
                        .draw();
                } );

            column.data().unique().sort().each( function ( d, j ) {
                select.append('<option value="' + d + '">' + d.substr(0,30) + '</option>')
                //var val = $('<div/>').html(d.substr(0,35)).text();
                //select.append( '<option value="' + val + '">' + val + '</option>' );
            } );
        } );
    }
} );
</script>

<br>
**Warum enthält die Liste 103 Datensätze?**
Die Corona-Pandemie hat die Gesellschaft vor ganz neue Herausforderungen gestellt - und auch ganz neue Bedarfe an Daten aufgezeigt.
Aufgrund der anhaltenden Pandemielage zum Zeitpunkt der Veröffentlichung der Liste, haben wir uns entschlossen 3 besonders relevante, auf Corona bezogene Datensätze zusätzlich zu den 100 Kerndatensätzen in die Liste aufzunehmen.
