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

### Adding an ODIS project to the ODIS website "Projekte"
It needs several steps to add an ODIS project to the ODIS website.
1. First of all: the project which needs to be added should be approved and stored within a very own GitHub repository.
2. Second: A new project specific yml-file needs to be created and added to folder **/build-scripts**
3. Shell script named **buildprocess.sh** needs to be updated

#### General: How the build process works
The *netlify.toml* file manages the build process.
```
publish = "_site"
```
indicates which folder will be published. 
```
command = "./build-scripts/buildprocess.sh && bundle exec jekyll build"
```
runs the Shell script *buildprocess.sh* and starts the jykell build process once the Shell script was executed.

#### Step 1: Get approval and push approved project to master
The ODIS project which has to be integrated into the ODIS website should definitely be approved first as the integration process might take a fex minutes (it's not worth the effort, obviously ;))
Once approved, make sure that the master of the GitHub is up-to-date.

#### Step 2: Add another yml-file

Insode the ODIS website GitHub repo: create another yml-file within the folder named **build-scripts**. The structures of the .yml-file stays the same like in *grundsicherung.yml*, content of file of need to be changed individually.

Please find comments in yaml-file below and follow.
```yaml
---
layout: nil #don't change
title:  "Grundsicherung" #add individual project name
blogLinkTitle: "Hier geht't zu den HG Infos" 
#blogLink: /aktuelles
metaDescription: Darstellung der Sozialstatistikdaten zu Grundsicherung.
date: 2019-12-17
visible: true #don't change
indexImage: ./img/gs-thumbnail.png #add thumbnail for "Projekte" site
heroImage: ./img/gs-hero.png
---
```


#### 3. What the buildprocess.sh does & how to update the file 
1. It builds a temporary folder "tmp" and clones the whole GitHub Repository of the website which should be integrated (e.g. grundsicherung) as a copy into the tmp folder.
2. moves into freshly copied project folder (e.g grundischerung )and installs node modules
3. ```sh
   mkdir -p "../../source/projekte/${TARGET}"
   ```
   Runs build inside of the project folder and copies this build folder to the ODIS website folder "source/projekte/"
4. ```sh
   cat "source/projekte/${TARGET}/index.html" > tmp/tmp_index.html  cat "source/projekte/${TARGET}/index.html" > tmp/tmp_index.html
   ```
   Copies index.html content of project to an tmp_index.html within the tmp folder (which was created in the first step).  
   **Important:** Copy of project must be a "tmp" index file to stick to the correct order of the final index.html
5. frontmatter .yml file is added to the final index.html  
    **Important:** the project specific yaml file needs to be created before the Shell script is executed. It will be stored within the same folder like the Shell script
6. Now, all the code of the project website *tmp_index.html* will be copied to the final index.html within tmp folder --> now index.html has the right order
7. ```shell
    cp tmp/index.html "source/projekte/${TARGET}/index.html"
   ```
   Copies final index.html to "Projekte" of ODIS website
8. remove tmp folder

To update the file almost each step has to be updated.
**First:** declare new TARGET (e.g TARGET2) (additonally to existing one)
**Second:** clone the ODIS project repository which should b integrated into ODIS website into another tmp folder (e.g. tmp2)
**Third:** execute all the following commandd for the second TARGET, therefore use the second tmp folder


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

