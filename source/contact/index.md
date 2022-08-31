---
layout: default.liquid
title: Kontakt
---

# Kontakt
<br>
Sie haben eine Frage oder benötigen Unterstützung bei Ihrem Open-Data-Vorhaben? Dann kontaktieren Sie uns gerne über unser Kontaktformular. Alternativ schreiben Sie uns eine Mail an <a href="mailto:odis@ts.berlin">odis@ts.berlin</a>.

<div class="pt-4">
	<form name="contact" method="POST" data-netlify="true">
    <fieldset name="kontaktdaten">
      <legend>Kontaktdaten</legend>
      <div class="flex-wrapper anrede">
        <div class="form-field">
			    <label for="anrede">Anrede</label>
          <div class="dropdown">
			      <select name="anrede" id="anrede">
              <option value="Frau">Frau</option>
              <option value="Herr">Herr</option>
              <option value="Divers">Divers</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex-wrapper">
        <div class="form-field">
          <label for id="name">Name*</label>
          <input type="text" id="name" name="name" placeholder="Ihr Name" required>
        </div>
        <div class="form-field">
			    <label for id="organisation">Organisation/Abteilung</label>
          <input type="text" id="organisation" name="organisation" placeholder="Ihre Organisation/Abteilung"/>
        </div>
        <div class="form-field">
          <label for id="email">E-Mail-Adresse*</label>
          <input type="email" id="email" name="email" placeholder="Ihre E-Mail-Adresse">
        </div>
        <div class="form-field">
          <label for id="phone">Telefonnummer</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9+]{4,30}" title="nur Zahlen und +, mindestens vier Ziffern" placeholder="Ihre Telefonnummer"/>
        </div>
      </div>
    </fieldset>
		<fieldset name="anfrage">
		  <legend>Anfrage</legend>
      <h5>Thema der Anfrage </h5> 
      <p class="small">Mehrfachauswahl möglich</p>
      <div class="checkbox">
        <input type="checkbox" id="erstgespräch" name="anfrage" value="erstgespräch">
        <label for="erstgespräch">Erstgespräch Open Data</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="bereitstellung" name="anfrage" value="bereitstellung">
        <label for="bereitstellung">Fragen zur Datenbereitstellung</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="visualisierung" name="anfrage" value="visualisierung">
        <label for="visualisierung">Fragen zur Datenvisualisierung</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="datenquali" name="anfrage" value="datenquali">
        <label for="datenquali">Fragen zur Datenqualität</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="od-portal" name="anfrage" value="od-portal">
        <label for="od-portal">Fragen zum Open Data Portal</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="datensuche" name="anfrage" value="datensuche">
        <label for="datensuche">Unterstützung bei der Suche nach Daten</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="prototyp" name="anfrage" value="prototyp">
        <label for="prototyp">Unterstützung bei der Erstellung einer Anwendung / eines Prototypen</label>
       </div>
      <div class="checkbox">
        <input type="checkbox" id="sonstiges" name="anfrage" value="sonstiges">
         <label for="sonstiges">Sonstiges</label>
      </div>
      <div>
        <label for="message" class="h5">Ihre Anfrage </label>
        <textarea id="message" name="message" rows="6" cols = "40"></textarea>
      </div>
    </fieldset>
    <div>
      <legend>Erfahrung mit Open Data</legend> 
      <p class="small">Bitte Zutreffendes ankreuzen</p>
      <div class="checkbox">
        <input type="checkbox" id="wenig-od-erfahrung" name="erfahrung" value="wenig-od-erfahrung">
        <label for="wenig-od-erfahrung">Ich hatte bisher wenige Berührungspunkte mit Open Data.</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="kenne-od" name="erfahrung" value="kenne-od">
        <label for="kenne-od">Ich habe bereits ein Grundverständnis von Open Data.</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="kenne-portal" name="erfahrung" value="kenne-portal">
        <label for="kenne-portal">Ich kenne das <a href="https://www.daten.berlin.de">Berliner Open Data Portal</a>.</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="bereitgestellt" name="erfahrung" value="bereitgestellt">
        <label for="bereitgestellt">Ich habe bereits offene Daten auf dem Berliner Open Data Portal bereitgestellt.</label>
      </div>
    </div>
    <fieldset name="datenschutz">
      <legend>Datenschutz und Newsletter</legend>
      <div class="checkbox">
        <input type="checkbox" id="DSV" name="datenschutz" value="DSV" required>
        <label for="DSV"> Ich habe die <a href="https://www.technologiestiftung-berlin.de/datenschutz">Datenschutzbestimmungen</a> gelesen und erkenne diese ausdrücklich an.*</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="speicherung" name="datenschutz" value="speicherung" required>
        <label for="speicherung"> Ich bin damit einverstanden, dass meine angegebenen Daten zum Zweck der Kontaktaufnahme und Vorbereitung zum Gespräch gespeichert werden dürfen.*</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="newsletter" name="newsletter" value="newsletter">
        <label for="newsletter"> Ich möchte mit dem ODIS-Newsletter über Neuigkeiten und Veranstaltungen zu Open Data in Berlin informiert werden. Weitere Informationen und die Datenschutzbestimmungen <a href="https://subscribe.newsletter2go.com/?n2g=r9s7xtjr-pugsca5z-1c6s&_ga=2.134197321.677887372.1591186343-1970435231.1591186343">hier</a>.</label>
      </div>
    </fieldset>
    <fieldset name="submit">
      <button type="submit">Anfrage abschicken</button>
    </fieldset> 
    <br> <br>
  <p class="small"> * Angabe verpflichtend </p>
  </form>
</div>
