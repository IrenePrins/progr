# Programmeren

    Voor deze periode moesten we een game maken voor programmeren in Typescript.
     Ik heb een game gemaakt waar een aapje de hoofdrol speelt. Hij moet bananen verzamelen en zo krijgt hij punten. 
     Hij moet wel oppassen voor de vuurballen die uit de lucht komen!!

    Voor de game waren er 3 eisen:

    * Encapsulation
    * Inheritance
    * idk

    Encapsulation

    De betekenis van encapsulation is dat elk object van een game afgeschermd is van elkaar. Ze kunnen elkaar niet 'zien'. De game weet dat er een aap, banaan en vuurbal is. Maar de aap weet niet dat er een banaan is en ook niet dat er een vuurbal is. Echter kan er via encapsulation informatie worden uitgewisseld. Dit werkt alsof ze met een luikje toch bij elkaar kunnen komen.

     Er zijn twee vormen van encapsulation die we geleerd hebben:

     1. Het krijgen van leesrechten dat ziet er zo uit:

        ```typescript
        public getX() : number {
		Return this.x
        } 
        ```
     2. Het krijgen van schrijfrechten:

     ```typescript
        Public setX(x:number) : void {
        This.x=x
        } 

     ```

     Inheritance

     Bij inheritance maak je gebruik van een bestand die boven de andere classes staan. Het is een blauwdruk van de blauwdrukken. Het is een abstractielevel erboven als een soort parentclass. Bepaalde elementen kunnen bij meerdere classen voorkomen, zoals x en y en het aanmaken van het object. Om een variabele aan te spreken in de gameObject of gameelement class gebruik je bij de childclasses super. Met super kan je variabele doorsturen naar de parent class. Deze variabele stuur je mee via de constructor in de game.

     Wanneer er een functie is die dezelfde naam heeft in de child- en parentclass wordt de functie in de parentclass eerder uitgevoerd dan in de childclass.