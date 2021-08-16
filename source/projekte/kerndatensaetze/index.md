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
Wir lieben Kerndatensätze. Hier kommt noch Text. Wir lieben Kerndatensätze. Hier kommt noch Text. Wir lieben Kerndatensätze. Hier kommt noch Text. Wir lieben Kerndatensätze. Hier kommt noch Text. Wir lieben Kerndatensätze. Hier kommt noch Text.

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