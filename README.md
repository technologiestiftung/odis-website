# ODIS Website

## Setup
This site is build with jekyll. Make sure jekyll is installed on your system. [jekyll quickstart instructions] (https://jekyllrb.com/docs/)

## Command Line Usage

Install dependencies

    bundle install

Development:
`bundle exec jekyll serve --livereload` or `bundle exec jekyll serve`

Building site: 
`bundle exec jekyll build`

## Content
All page source data is stores in `/sources`folder. The posts for the sections `Aktuelles` and `Veranstaltungen` are stored as posts in the folder `page/_posts` and filtered via the category variable in front matter. All pages for the projects section are stored in the folder `/source/projekte`. Posts and pages need to have to flag `visible: true` to be rendered on the page. The links in the section `Ressourcen` are stored as a yml data file in the folder `/source/_data`.


### Adding posts for "Aktuelles"
All posts for section "Aktuelles" should be stored in `/_posts/aktuelles`. To add a new post simple create a new markdown file (`.md`) in this folder.

Specify the site `title`, `metaDescription` and `category` in the front matter section. The `categoy` needs to be set to `aktuelles`.

```
---
layout: default
title:  "Testpost"
metaDescription: Lorem ipsum...
categories: aktuelles
visible: true/false
---

# Headline
Lorem ipsum....
```

### Adding posts for "Veranstaltungen"
All posts for section "Veranstaltungen" should be stored in `/_posts/veranstaltungen`. To add a new post simple create a new markdown file (`.md`) in this folder.

Specify the site `title`, `metaDescription` and `category` in the front matter section. The `categoy` needs to be set to `veranstaltungen`. In adition to that we can add also need to specify a short `description` that will be shown in the "Veranstaltungen" overview page.
The fields `time`, `web`, `mail` and `adresse` are optional and appear in the summary section of the page.

```
---
layout: event
title:  "Testveranstaltung 2019"
metaDescription: Lorem ipsum...
description: Lorem ipsum dolor sit amet...
categories: veranstaltungen
visible: true/false
time: 12:15 Uhr
web: https://example.de
mail: info@event.com
adresse: Platz der Luftbrücke 4, Gebäude H2rund, 12101 Berlin
---

# Headline
Lorem ipsum....
```

### Adding posts for "Projekte"
All pages for section "Projekte" should be stored in `/source/projekte`. To add a new project simple create a new folder with a index.md markdown file (`.md`) in it.

Specify the site `title`, `metaDescription` in the front matter section. In adition to that we also need to specify a `indexImage` and  `heroImage`.

```
---
layout: project
title:  Kita-Suche in Berlin
metaDescription: Lorem ipsum...
date: 2019-12-24
visible: true/false
indexImage: placeholder.png
headerImage: placeholderHeader.jpg
---

# Headline
Lorem ipsum....
```

### Editing Content

When writing simple markdown all the text will be

- in one single column
- images will have no caption
- images will span the column

If you want a specialized layout you can use the macros included in `source/_includes`

- macro-image-section-small.html
- macro-image-section.html



```html
{% include macro-image-section.html src="cat.png" caption="Here is a picture of a cat" %}
```

---

Below is a table of all the parameters you can give to them.

| name                                   | parm1 | parm2   | parm3  | param4   |
| :------------------------------------- | :---- | :------ | :----- | :------- |
| macro-image-section.html               | src   | caption | --     | --       |
| macro-image-section-small.html         | src   | caption | --     | --       |



#### HTML in [M⬇︎]

You can mix **[M⬇︎]** with HTML, just make sure you don't mix block level markup. E.g. This wont work!

```html
Dies ist ein Typoblindtext.<div>someHTML</div>
```

This will work:

```html
Dies ist ein Typoblindtext.

<div>someHTML</div>
```

