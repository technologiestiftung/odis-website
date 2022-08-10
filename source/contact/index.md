---
layout: default.liquid
title: Kontakt
---

# Kontakt
<br>
Sie haben eine Frage oder benötigen Unterstützung bei Ihrem Open-Data-Vorhaben? Dann kontaktieren Sie uns gerne über unser Kontaktformular. Alternativ schreiben Sie uns eine Mail an <a href="mailto:odis@ts.berlin">odis@ts.berlin</a>.

<div class="pt-4">
	<form name="contact" method="POST" data-netlify="true">
    <fieldset>
      <legend>Kontaktdaten</legend>
      <div class="flex-wrapper anrede">
        <div class="form-field">
			    <label for="anrede">Anrede</label>
          <div>
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
            <label for id="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Ihr Name" required>
          </div>
          <div class="form-field">
			      <label for id="organisation">Organisation/Abteilung</label>
            <input type="text" id="organisation" name="organisation" placeholder="Ihre Organisation/Abteilung"/>
          </div>
          <div class="form-field">
            <label for id="email">E-Mail-Adresse</label>
            <input type="email" id="email" name="email" placeholder="Ihre E-Mail-Adresse">
          </div>
          <div class="form-field">
            <label for id="phone">Telefonnummer</label>
            <input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}" required placeholder="Ihre Telefonnummer"/>
          </div>
        </div>
    </fieldset>
<!-- ab hier noch ohne Flexbox-->
		<div>
		  <h5>Anfrage</h5>
		  <fieldset>
        <legend>Thema der Anfrage <br>
          (Mehrfachauswahl möglich)</legend>
        <div>
          <input type="checkbox" id="erstgespräch" name="source" value="erstgespräch">
          <label for="Erstgespräch">Erstgespräch Open Data</label>
        </div>
        <div>
          <input type="checkbox" id="bereitstellung" name="source" value="bereitstellung">
          <label for="bereitstellung">Fragen zur Datenbereitstellung</label>
        </div>
        <div>
          <input type="checkbox" id="visualisierung" name="source" value="visualisierung">
          <label for="visualisierung">Fragen zur Datenvisualisierung</label>
        </div>
        <div>
          <input type="checkbox" id="datenquali" name="source" value="datenquali">
          <label for="datenquali">Fragen zur Datenqualität</label>
        </div>
        <div>
          <input type="checkbox" id="od-portal" name="source" value="od-portal">
          <label for="od-portal">Fragen zum Open Data Portal</label>
        </div>
        <div>
          <input type="checkbox" id="datensuche" name="source" value="datensuche">
          <label for="datensuche">Unterstützung bei der Suche nach Daten</label>
        </div>
        <div>
          <input type="checkbox" id="prototyp" name="source" value="prototyp">
          <label for="prototyp">Unterstützung bei der Erstellung einer Anwendung/Prototyp</label>
        </div>
        <div>
          <input type="checkbox" id="sonstiges" name="source" value="sonstiges">
          <label for="sonstiges">Sonstiges</label>
        </div>
      </fieldset>
      <label>Bitte nennen Sie uns Ihre Anfrage: <textarea name="message"></textarea></label>
    </div>
    <div>
      <h5>Weitere Informationen</h5> 
      <legend>Bitte Zutreffendes ankreuzen.</legend>
      <div>
        <input type="checkbox" id="kenne-portal" name="source" value="kenne-portal">
        <label for="kenne-portal">Ich kenne das <a href="https://www.daten.berlin.de">Berliner Open Data Portal</a>.</label>
      </div>
      <div>
        <input type="checkbox" id="bereitgestellt" name="source" value="bereitsgestellt">
        <label for="kenne-portal">Ich habe bereits offene Daten auf dem Berliner Open Data Portal bereitgestellt.</label>
      </div>
      <div>
        <input type="checkbox" id=kenne-odis" name="source" value="kenne-odis">
        <label for="kenne-portal">Ich kenne die Open Data Informationsstelle.</label>
      </div>
    </div>
    <p>
      <h5>Kontakt und Datenschutz</h5>
      <div>
        <input type="checkbox" id="DSV" name="source" value="DSV">
        <label for="DSV"> Ich habe die <a href="https://www.technologiestiftung-berlin.de/datenschutz">Datenschutzbestimmungen</a> gelesen und erkenne diese ausdrücklich an.
        </label>
      </div>
      <div>
        <input type="checkbox" id="speicherung" name="source" value="speicherung">
        <label for="speicherung"> Ich bin damit einverstanden, dass meine angegebenen Daten zum Zweck
            der Kontaktaufnahme und Vorbereitung zum Gespräch gespeichert werden dürfen.
        </label>
      </div>
      <div>
        <input type="checkbox" id="newsletter" name="source" value="newsletter">
        <label for="newsletter"> Ich möchte mit dem ODIS-Newsletter über 
             Neuigkeiten und Veranstaltungen zu Open Data in Berlin informiert werden.
        </label>
      </div>
    </p>
    <p>
      <button type="submit">Kontaktanfrage abschicken</button>
    </p>
  </form>
</div>
