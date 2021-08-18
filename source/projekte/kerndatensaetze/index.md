---
layout: project
title:  Kerndatensätze
blogLinkTitle: 
blogLink: 
metaDescription: Wo offene Daten das größte Potential haben
date: 2021-08-20
visible: true
indexImage: thumbnail.png
heroImage: home_globe.png
datatable: true
---
## Das Potenzial von Daten für eine Stadt

Daten haben das Potenzial, diverse Dimensionen einer Stadt zu transformieren – mit Daten können Dienstleistungen und Prozesse verbessert, neue Geschäftsmodelle entwickelt, und eine bessere Lebensqualität für die Bürger:innen der Stadt geschafft werden, zum Beispiel. Aber diese Potenziale können nur realisiert werden, wenn die dafür nötigen Daten überhaupt existieren – und wenn sie auch tatsächlich zugänglich und nutzbar sind.

Welche Daten sind dann für eine Stadt eigentlich relevant? Die Antwort hängt vom Blickwinkel ab: geht es beispielsweise um die Bedürfnisse der Privatwirtschaft oder um den Bedarf von Bürger*innen nach mehr Transparenz? Mit dem Projekt „Kerndatensätze für Berlin“ hat ODIS eine Liste von 100 „Kerndatensätzen“ erstellt.

## Über die Liste

Kerndatensätze sind Datensätze, die wir als besonders wertvoll für Berlin bewertet haben, indem sie einen großen Mehrwert für ein breites Publikum liefern können. Diese ist keine erschöpfende Liste, sondern wird eher als eine Orientierung angeboten für die Fragen, wo sollen wir eigentlich als Stadt anfangen, und welche Datensätze sollen wir noch unbedingt veröffentlichen?

Diese Liste von Datensätzen wird unten bereitgestellt. Die Liste kann nach verschiedenen Merkmalen wie Kategorie oder Name sortiert werden, und es ist auch möglich, nach Stichwörter zu suchen. Wo möglich, wird auch entweder zu dem relevanten offenen Datensatz verlinkt (insofern als die Daten schon als Open Data vorhanden sind), oder zu einer Ressource, wo die Daten in einem nicht-maschinenlesbaren Form zugänglich sind. Das heißt, noch nicht sind alle dieser Daten als Open Data verfügbar, aber ODIS und zahlreiche Kolleg:innen in der Berliner Verwaltung arbeiten ständig daran, immer mehr Datensätze für die Öffentlichkeit zu gewinnen.

Für mehr zu wie diese Liste entstanden ist gibt es die Veröffentlichung "Kerndatensätze für Berlin", die **hier** heruntergeladen werden kann.

<br>
<table id='kerndatentable' class="display">
  {% for row in site.data.processed_kerndatensaetze %}
    {% if forloop.first %}
        <thead>
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    </thead>
    {% endif %}
    {% tablerow pair in row %}
      {{ pair[1] }}
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
    { "width": "45%", "targets": 2 },
    {"className": "dt-center", "targets": 4}
  ],
    initComplete: function () {
        this.api().columns([0,4]).every( function () {
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
                select.append('<option value="' + d + '">' + d.substr(0,35) + '</option>')
                //var val = $('<div/>').html(d.substr(0,35)).text();
                //select.append( '<option value="' + val + '">' + val + '</option>' );
            } );
        } );
    }
} );
</script>