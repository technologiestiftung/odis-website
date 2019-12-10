# ODIS Website

## Setup
This site is build with jekyll. Make sure jekyll is installed on your system. [jekyll quickstart instructions] (https://jekyllrb.com/docs/)

## Command Line Usage

Install dependencies

    bundle install

Development:
`jekyll serve --livereload` or `jekyll serve`

Building site: 
`jekyll build`

## Editing content
All page source data is stores in `/pages`folder. The pages/posts for the sections `Aktuelles`, `Projekte` and `Veranstaltungen` are stored as posts in the folder `page/_posts` and filtered via the category variable in front matter. The links in the section `Ressourcen` are stored as a yml data file in the folder `/page/_data`.

#### Adding images
To add images to a post use this markup:

`![My helpful screenshot](/assets/images/example-image.jpg)`

If a caption below an image is needed we can use a line of simple html:
```
![My helpful screenshot](/assets/images/example-image.jpg)
<small>Test</small>
```

or for a right aligned caption

```
![My helpful screenshot](/assets/images/example-image.jpg)
<small class="text-right d-block">Test</small>
```

### Adding posts for "Aktuelles"
All posts for section "Aktuelles" should be stored in `/_posts/aktuelles`. To add a new post simple create a new markdown file (`.md`) in this folder.

Specify the site `title`, `metaDescription` and `category` in the front matter section. The `categoy` needs to be set to `aktuelles`.

```
---
layout: default
title:  "Testpost"
metaDescription: Lorem ipsum...
categories: aktuelles
---

# Headline
Lorem ipsum....
```


### Adding posts for "Projekte"
All posts for section "Projekte" should be stored in `/_posts/projekte`. To add a new post simple create a new markdown file (`.md`) in this folder.

Specify the site `title`, `metaDescription` and `category` in the front matter section. The `categoy` needs to be set to `projekte`. In adition to that we also need to specify a `permalink` under which the page should be avialable and a `placeholderImage` that will appear in the "Projekte" overview page.

```
---
layout: default
title:  Kita-Suche in Berlin
metaDescription: Lorem ipsum...
categories: projekte
permalink: /projekte/kita-suche-berlin.html
indexImage: placeholder.png
---

# Headline
Lorem ipsum....
```

### Adding posts for "Veranstaltungen"
All posts for section "Veranstaltungen" should be stored in `/_posts/veranstaltungen`. To add a new post simple create a new markdown file (`.md`) in this folder.

Specify the site `title`, `metaDescription` and `category` in the front matter section. The `categoy` needs to be set to `veranstaltungen`. In adition to that we can add also need to specify a short `description` that will be shown in the "Veranstaltungen" overview page.
The fields `time`, `web`, `veranstalter`, `mail` and `adresse` are optional and appear in the summary section of the page.

```
---
layout: event
title:  "Testveranstaltung 2019"
metaDescription: Lorem ipsum...
description: Lorem ipsum dolor sit amet...
categories: veranstaltungen
time: 12:15 Uhr
web: https://google.de
veranstalter: XYZ Events
mail: info@event.com
adresse: Platz der Luftbrücke 4, Gebäude H2rund, 12101 Berlin
---

# Headline
Lorem ipsum....
```
