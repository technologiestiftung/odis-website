![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

# ODIS Website

Repository for the website of Berlins Open Data Informationsstelle (ODIS).

## Setup

This site is build with eleventy. Make sure Node.js >+ 14 is installed on your system. Better yet, you use the Node version defined in `.nvmrc` to make sure you're in sync with the latest update. Best way to install Node is using [nvm](https://github.com/nvm-sh/nvm).

### Installation of Node.js, npm and Eleventy dependencies (once)

You can use [nvm](https://github.com/nvm-sh/nvm) to install different Node.js versions.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# Reload your shell session
exec $SHELL
```

After that you can install the needed Node.js version.

```bash
# move into the repo
cd path/to/ods-website
# update your local version to the latest state
git pull origin master
# intall the used Node.js version using nvm
nvm install
```

When everything went smoothly you can go ahead and install eleventy's dependencies.

```bash
# move into the repo
cd path/to/ods-website
# install eleventy's dependencies
npm ci
```

## Command Line Usage

Install dependencies

```bash
npm ci
```

Just writing posts (without working on js or css):

```bash
npm start
```

Development:

```bash
npm run dev
```

Building site:

```bash
npm run build
```

## Content

All page source data is stores in `/sources`folder. The posts for the sections `Aktuelles` and `Veranstaltungen` (deprecated, see below) are stored as posts in the folders `aktuelles` and `veranstaltung` and filtered via the `tags` variable in front matter (Veranstaltungen is tag `event` and Aktuelles is tag `post`). All pages for the projects section are stored in the folder `/source/projekte` and need the tag `project`. Posts and pages need to have to flag `visible: true` to be rendered on the page. The links in the section `Ressourcen` are stored as a json data file in the folder `/source/_data`.

### Adding posts for "Aktuelles"

All posts for section "Aktuelles" should be stored in `/aktuelles`. To add a new post simple create a new markdown file (`.md`) in this folder.

Specify the site `title`, `metaDescription` and `tags` in the front matter section. The `tags` needs to be set to `post`.

```
---
layout: default.liquid
layout: post
title:  "Testpost"
metaDescription: Lorem ipsum...
visible: true/false
---

# Headline
Lorem ipsum....
```

### Veranstaltungen (deprecated)

Veranstaltungen, while part of the initial concept, are no longer presented on the website. The past events still exist in order to not break links linking to one of the old events. However, everything in `source/veranstaltungen` and the layout `source/_layouts/event.liquid` can be considered deprecated and do no longer need to be maintained/extended.

### Adding posts for "Projekte"

All pages for section "Projekte" should be stored in `/source/projekte`. To add a new project simple create a new folder with a index.md markdown file (`.md`) in it.

Specify the site `title`, `metaDescription` in the front matter section. In adition to that we also need to specify a `indexImage` and `heroImage` and set the `tags` to `post`.

```
---
layout: project
tags: ['project','post']
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

!Hint: This is currently deprecated for the "grundsicherung" project.
You still can use the buildscript.sh script but it wont be run during a normal build.

The _netlify.toml_ file manages the build process.

```toml
publish = "_site"
```

indicates which folder will be published.

```toml
command = "./build-scripts/buildprocess.sh && npm ci && npm run build"
```

runs the Shell script _buildprocess.sh_ and starts the eleventy build process once the shell script was executed.

#### Step 1: Get approval and push approved project to master

The ODIS project which has to be integrated into the ODIS website should definitely be approved first as the integration process might take a fex minutes (it's not worth the effort, obviously ;))
Once approved, make sure that the master of the GitHub is up-to-date.

#### Step 2: Add another yml-file

Insode the ODIS website GitHub repo: create another yml-file within the folder named **build-scripts**. The structures of the .yml-file stays the same like in _grundsicherung.yml_, content of file of need to be changed individually.

Please find comments in yaml-file below and follow.

```yaml
---
tags: ["project", "post"]
title: "Grundsicherung" #add individual project name
blogLinkTitle: "Hier geht's zu den HG Infos"
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
6. Now, all the code of the project website _tmp_index.html_ will be copied to the final index.html within tmp folder --> now index.html has the right order
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
{% render "macro-image-section", src:"cat.png" caption:"Here is a picture of a
cat" %}
```

Hint: include file names need to be quoted.

---

Below is a table of all the parameters you can give to them.

| name                           | parm1 | parm2   | parm3 | param4 |
| :----------------------------- | :---- | :------ | :---- | :----- |
| macro-image-section.html       | src   | caption | --    | --     |
| macro-image-section-small.html | src   | caption | --    | --     |

#### HTML in [M⬇︎]

You can mix **[M⬇︎]** with HTML, just make sure you don't mix block level markup. E.g. This wont work!

```html
Dies ist ein Typoblindtext.
<div>someHTML</div>
```

This will work:

```html
Dies ist ein Typoblindtext.

<div>someHTML</div>
```

Or you use html and you can use {% renderTemplate %} and {% renderFile %} tags: https://11ty.dev/docs/plugins/render

```plain
{% renderTemplate "md" %}
# I am a title

* I am a list
* I am a list
{% endrenderTemplate %}
```

## CSS

We use TailwindCSS for the styling of the website. The [Tailwind CLI tool](https://tailwindcss.com/docs/installation) is responsible for watching all CSS changes in development mode and it builds and minifies CSS for production. Find the relevant scripts in `./package.json`. As common with Tailwind, there is a `./tailwind.config.js` which configures everything necessary.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="http://annameide.com/"><img src="https://citylab-berlin.org/wp-content/uploads/2022/09/anna-meide_portait-1.jpg?s=64" width="64px;" alt="Anna Meide"/><br /><sub><b>Anna Meide</b></sub></a><br /><a href="#design-annameide" title="Design">🎨</a> <a href="https://github.com/technologiestiftung/odis-website/commits?author=annameide" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://citylab-berlin.org/de/blog/die-koepfe-des-citylab-ana-jerdeva/"><img src="https://citylab-berlin.org/wp-content/uploads/2023/02/ana_portrait-1.jpg?s=64" width="64px;" alt="Anastasia Jerdeva"/><br /><sub><b>Anastasia Jerdeva</b></sub></a><br /><a href="#design-anajerdeva" title="Design">🎨</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://vogelino.com"><img src="https://avatars.githubusercontent.com/u/2759340?v=4?s=64" width="64px;" alt="Lucas Vogel"/><br /><sub><b>Lucas Vogel</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-website/commits?author=vogelino" title="Code">💻</a> <a href="#design-vogelino" title="Design">🎨</a> <a href="https://github.com/technologiestiftung/odis-website/commits?author=vogelino" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/Lisa-Stubert"><img src="https://avatars.githubusercontent.com/u/61182572?v=4?s=64" width="64px;" alt="Lisa-Stubert"/><br /><sub><b>Lisa-Stubert</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-website/commits?author=Lisa-Stubert" title="Code">💻</a> <a href="https://github.com/technologiestiftung/odis-website/commits?author=Lisa-Stubert" title="Documentation">📖</a> <a href="#content-Lisa-Stubert" title="Content">🖋</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://fabianmoronzirfas.me/"><img src="https://avatars.githubusercontent.com/u/315106?v=4?s=64" width="64px;" alt="Fabian Morón Zirfas"/><br /><sub><b>Fabian Morón Zirfas</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-website/commits?author=ff6347" title="Code">💻</a> <a href="#content-ff6347" title="Content">🖋</a> <a href="https://github.com/technologiestiftung/odis-website/commits?author=ff6347" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/ester-t-s"><img src="https://avatars.githubusercontent.com/u/91192024?v=4?s=64" width="64px;" alt="Ester"/><br /><sub><b>Ester</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-website/commits?author=ester-t-s" title="Code">💻</a> <a href="#content-ester-t-s" title="Content">🖋</a> <a href="https://github.com/technologiestiftung/odis-website/commits?author=ester-t-s" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/rgb3000"><img src="https://avatars.githubusercontent.com/u/5826403?v=4?s=64" width="64px;" alt="Ralph Schulz"/><br /><sub><b>Ralph Schulz</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-website/commits?author=rgb3000" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/dnsos"><img src="https://avatars.githubusercontent.com/u/15640196?v=4?s=64" width="64px;" alt="Dennis Ostendorf"/><br /><sub><b>Dennis Ostendorf</b></sub></a><br /><a href="#maintenance-dnsos" title="Maintenance">🚧</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="http://toridykes.com/"><img src="https://avatars.githubusercontent.com/u/12991433?v=4?s=64" width="64px;" alt="Tori Boeck"/><br /><sub><b>Tori Boeck</b></sub></a><br /><a href="#content-tori-d" title="Content">🖋</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/julizet"><img src="https://avatars.githubusercontent.com/u/52455010?v=4?s=64" width="64px;" alt="Julia Zet"/><br /><sub><b>Julia Zet</b></sub></a><br /><a href="#content-julizet" title="Content">🖋</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/KlemensM"><img src="https://avatars.githubusercontent.com/u/98896505?v=4?s=64" width="64px;" alt="Klemens Maget"/><br /><sub><b>Klemens Maget</b></sub></a><br /><a href="#content-KlemensM" title="Content">🖋</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/evelynebrie"><img src="https://avatars.githubusercontent.com/u/32559774?v=4?s=64" width="64px;" alt="evelynebrie"/><br /><sub><b>evelynebrie</b></sub></a><br /><a href="#content-evelynebrie" title="Content">🖋</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/bnjmnsbl"><img src="https://avatars.githubusercontent.com/u/11134234?v=4?s=64" width="64px;" alt="Benjamin Seibel"/><br /><sub><b>Benjamin Seibel</b></sub></a><br /><a href="#content-bnjmnsbl" title="Content">🖋</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/m-b-e"><img src="https://avatars.githubusercontent.com/u/36029603?v=4?s=64" width="64px;" alt="Max B. Eckert"/><br /><sub><b>Max B. Eckert</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-website/commits?author=m-b-e" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/AlexandraKapp"><img src="https://avatars.githubusercontent.com/u/18367515?v=4?s=64" width="64px;" alt="AlexandraKapp"/><br /><sub><b>AlexandraKapp</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-website/commits?author=AlexandraKapp" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/TDesjardins"><img src="https://avatars.githubusercontent.com/u/1841306?v=4?s=64" width="64px;" alt="Tino Desjardins"/><br /><sub><b>Tino Desjardins</b></sub></a><br /><a href="https://github.com/technologiestiftung/odis-website/issues?q=author%3ATDesjardins" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Credits

<table style="background:white;">
  <tr>
    <td>
      <a href="https://odis-berlin.de">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-odis-berlin-black.svg" />
      </a>
    </td>
    <td>
      Together with: <a href="https://citylab-berlin.org/en/start/">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-citylab-berlin.svg" />
      </a>
    </td>
    <td>
      A project by: <a href="https://www.technologiestiftung-berlin.de/en/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-en.svg" />
      </a>
    </td>
    <td>
      Supported by: <a href="https://www.berlin.de/sen/inneres/">
        <br />
        <br />
        <img width="100" src="https://logos.citylab-berlin.org/logo-berlin-seninnds-en.svg" />
      </a>
    </td>
  </tr>
</table>
