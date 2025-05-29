# A Wikidata Introduction: 

The [Wikimedia](https://www.wikimedia.org/) foundation is a non-profit whose whole mission is to provide free educational content to the world, i.e. the best kind of content. Under the umbrella of this non-profit is [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page), which provides a magnificent amount of data (as of 6/30/2024 this is some 110 million entries) in a wide array of formats for any concievable type of project. The flexibility and size of this resource is both it's greatest strength and weakness. 

Approaching this monolith from the outside can be immediately overwhelming, and while the resources provided are enormously helpful:
- [Wikidata Introduction](https://www.wikidata.org/wiki/Wikidata:Introduction)
- [Wikidata Tours](https://www.wikidata.org/wiki/Wikidata:Tours)
- [Wikidata Glossary](https://www.wikidata.org/wiki/Wikidata:Glossary)

At first I opted to look elsewhere to get a pre-processed dataset, inevitably wasting an enormous amount of time to wind up back here - digging into and appreciating this resource for what it is. Hopefully this Readme can make that choice a little bit easier for someone else, start at the source it's worth the challenge. 

## An Outline: 

Wikidata != Wikipedia, Wikimedia is the umbrella orginization under which both of these services live. Each servicwe under the Wikimedia umbrella is a 'Wikimedia Project' and Wikipedia leverages Wikidata's big data-y bits to serve some of the details, and support multiple languages for it's 'articles'. Central to understanding Wikidata is understanding [the what of the data](https://www.wikidata.org/wiki/Help:About_data), modeling this sort of flexible structure is an enormously complex exercise but has been narrowed down to *Values about Things*. While the nature of the value may change (time, string, date, url, coordinates, etc), the thing (item, property, entity) is what give's that value meaning. For example:

`(Q251) Java (OO programming language) 's => (P50) Author is => (Q92622) James Gosling (Canadian computer scientist)`

Ref: 
  - [Java](https://www.wikidata.org/wiki/Q251)
  - [Author](https://www.wikidata.org/wiki/Property:P50)
  - [James Gosling](https://www.wikidata.org/wiki/Q92622)

This `Statement` outlines the fundamental structure of how things are stored, and includes a few important details worth highlighting. Firstly values inside of paranthesis are `QID's`, Wikidata's unique ID system. `Items` IDs begin with 'Q', while `Properties` start with P - both `Entities` pretty similar having a `label` and `description`. Behind the scenes Wikidata does the job of serving this data (and subsequent updates, and changes) in a some 50+ languages by default so language narrowing plays a huge part in interacting with the API. 

## Using The Actual Data

Possibly the most unclear choice when beginning to look at Wikidata is just how best to [get at the data](https://www.wikidata.org/wiki/Wikidata:Data_access) you actually need. This data and access are provided for free and for the good of learning, so it's imperative you [read and respect the standards and etiquette](https://www.mediawiki.org/wiki/API:Etiquette) first. 

There are two fundamental ways to use Wikidata, requesting data, or having a copy. Requesting the data requires use of one of several different API endpoint or query services, while having the data requires downloading dumped copies of the data and hosting them locally with your application. The tradeoffs here should be mostly clear, but it's easy to underestimate just how much data is in a dumpfile, so if you're reading this intro requesting is likely the best choice. 

Before the differences are outlined there is another branch of the MediaWiki empire that should be examined first.

#### Wikibase and You

[Wikibase](https://wikiba.se/) is an open-source [Wikimedia Deutschland](https://meta.wikimedia.org/wiki/Wikimedia_Deutschland) project which provides data mangaement tools, hosting infrastructure, and a lot of other resources for projects ***OF ANY SIZE***. Before you decide to redo the how & what of hosting and docker-izing, there is likely an example, utility, or tool already finished to help you accomplish just that.

- [Wikibase Cloud](https://www.wikibase.cloud/): Provides hosting infrastructure along with a complete install of [Wikibase Suite](https://www.mediawiki.org/wiki/Wikibase/Docker) which is the open source software suite designed for creating your own Wiki-project. This tight coupling with the Wikimedia orginization embraces their knowledge for all approach so check out the [docs](https://doc.wikimedia.org/Wikibase/master/php/index.html) to see what might work best for your project. 

#### Requesting the Data
Each of method of requesting is limited to a total of 50 entities per request. Anecdotally the central API (there are third parties hosting mirrors) time for a response can vary pretty widely depending on TOD, expect anywhere from 500ms. to 8000ms. 

- [Wikidata Query Service](https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/Wikidata_Query_Help) : A question and service which uses [SPARQL](https://en.wikipedia.org/wiki/SPARQL) a Resource Description Framework or **RDF** specific query language. RDF is a W3C standard of data modeling composed of "a directed graph of triplet statements" *re: Java=>Author=>James G. example above*. Best for gathering answers to questions about information you already have pieces of and know your response (results) are likely to be small.  
- [Wikidata REST-API](https://www.wikidata.org/wiki/Wikidata:REST_API) : OpenAPI based interface allowing "REST-ful" interaction with Wikibase instances - including the Wikidata API. Requires [authentication](https://www.wikidata.org/wiki/Wikidata:REST_API/Authentication) for any sort of modification based actions, but is otherwise open for [responsible](https://www.mediawiki.org/wiki/API:Ratelimit) **GET** requesting of information. Best for getting Item/Entity data, the more widely accepted standard as opposed to the more in house [MediaWiki Action API](https://www.mediawiki.org/wiki/API:Main_page). 
- [MediaWiki Action API](https://www.mediawiki.org/wiki/API:Main_page) : The original standard for interaction with *all* MediaWiki projects, including Wikidata & Wikipedia. Likely if this is best for you, you would not be needing an introduction to it, this API has a long history at MediaWiki and is 'a mature and stable interface'. If flexible and been there done that describe your feelings right now, you can stop reading here. 
- [Bots Intro](https://www.wikidata.org/wiki/Wikidata:Bots) : For applications which use some sort of autonomy to carry out their task or operation. This requires some additional registration of your application and will be otherwise ignored in this Readme.

#### Having the Data:
- [Wikidata's Database Downloading](https://www.wikidata.org/wiki/Wikidata:Database_download) : Wikimedia regularly dumps ***ALL*** of it's information to allow [hosting your own local query service](https://www.mediawiki.org/wiki/Wikidata_Query_Service/User_Manual#Standalone_service). This is really suited best for research applications having a lot of compute power ready at hand, as the size of these dumps will *ruin* the average machine. Each full dump takes ***12 days*** to complete, and the ZIP files unpack to hundreds of Terabytes in size. 

## Language Tools for Devs:
A significant community exists around the development of tools in a variety of languages for using the above described methods for interacting with Wikidata's information directly. [Starting here](https://www.wikidata.org/wiki/Wikidata:Tools/For_programmers) with all of the information for each of the community led projects in each language you should be accessing data in no time.

The [Wikidata Toolkit](https://github.com/Wikidata/Wikidata-Toolkit) is the Java library used to access data in this project. You can find [example code](https://github.com/Wikidata/Wikidata-Toolkit-Examples) in this repository, including a [Pull Request](https://github.com/Wikidata/Wikidata-Toolkit-Examples/pull/6) that helps print the results to a file & refactors some examples for clarity. 

## Actual Wikidata Data:

Fetching data from the API (using the example title "Kevin Bacon") returns an ItemDocument object which looks a bit like this: 

```txt
==ItemDocument http://www.wikidata.org/entity/Q3454165 (r2121385886) ==
* Labels: "Kevin Bacon" (af); "Kevin Bacon" (an); "كيفين بيكن" (ar); (cont...)
* Descriptions: "Amerikaanse akteur" (af); "ممثل أمريكي" (ar); "actor estauxunidense" (ast); (cont...)
===Statements===
[ID Q3454165$895A58DB-9E28-431B-B98B-7E078866AB4F] http://www.wikidata.org/entity/Q3454165 (item): http://www.wikidata.org/entity/P269 :: "067287832"
      http://www.wikidata.org/entity/P1810 :: "Bacon, Kevin (1958-....)"
[ID Q3454165$CD87A968-69C0-4DE2-BA30-206BA61120A0] http://www.wikidata.org/entity/Q3454165 (item): http://www.wikidata.org/entity/P268 :: "139817766"
  Reference:
      http://www.wikidata.org/entity/P248 :: http://www.wikidata.org/entity/Q54919 (item)
      http://www.wikidata.org/entity/P214 :: "39570812"
      http://www.wikidata.org/entity/P813 :: 2018-10-07 (Prec.: day [-0 .. +0], PCal: Gregorian)
[ID Q3454165$C81A3986-19EC-4E9D-9C69-7229A4D13432] http://www.wikidata.org/entity/Q3454165 (item): http://www.wikidata.org/entity/P7293 :: "9810630778405606"
[ID Q3454165$D759CE77-61CD-493D-929C-C7C620175FA8] http://www.wikidata.org/entity/Q3454165 (item): http://www.wikidata.org/entity/P2435 :: "4660"
  Reference:
      http://www.wikidata.org/entity/P143 :: http://www.wikidata.org/entity/Q53464 (item)
(cont...)
===End of statements===
* Site links: afwiki/Kevin Bacon; anwiki/Kevin Bacon; arwiki/كيفين بيكن; arzwiki/كيفين بيكن; astwiki/Kevin Bacon; (cont...)
```
And a more detailed look at the complete structure behind a `Statement`:

```txt
ID: Q3454165$e14c32ff-4e8b-d0b8-8af2-2c8c73aee3a7
Rank: NORMAL
Main Snak: http://www.wikidata.org/entity/P166 :: http://www.wikidata.org/entity/Q1275727 (item)
Qualifiers: [
  http://www.wikidata.org/entity/P585 :: 2013-00-00 (Prec.: year [-0 .. +0], PCal: Gregorian),
  http://www.wikidata.org/entity/P1686 :: http://www.wikidata.org/entity/Q1189631 (item)
]
References: [  
  Reference:
    http://www.wikidata.org/entity/P143 :: http://www.wikidata.org/entity/Q206855 (item)
]
```

Finally tying this back into the project, it's easy to see how a Graph of `Vertices` and `Edges` can then be constructed out of the mapped relationships between `Items` using `Statements`.

# References:

- [W3C Resource Description Framework](https://www.w3.org/RDF/)
- [W3C SPARQL: Query Language for RDF](https://www.w3.org/TR/rdf-sparql-query/)
- [Wikibase/Data Model](https://www.mediawiki.org/wiki/Wikibase/DataModel)
- [Java: Wikidata Toolkit API Docs (JavaDoc)](https://wikidata.github.io/Wikidata-Toolkit/)