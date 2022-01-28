# Ticketing
Applikace pro tvorbu a prodej vstupenek složená z mikroslužeb

## Aplikace má následující vlastnosti:
  - Uživatel může vytvořit vstupenku na událost 
  - Ostatní uživatelé mohou tuto vstupenku zakoupit
  - Každý uživatel může nabízet a kupovat vstupenky
  - Když se uživatel pokusí koupit vstupenku, tak se vstupenka rezervuje. Uživatel má 15 minut za zaplacení
  - Když do 15 minut nezaplatí, vstupenka se uvolní a je k dispozici dalším uživatelům


## Aplikace se skládá z nádledujících mikroslužeb:
  - auth - služba, která má nastarosti registraci, přihlašování a odhlašování uživatelů
  - tickets - služba pro vytváření a editaci vstupenek
  - orders - služba pro vytváření a editaci objednávek
  - payments - služba, která obstarává platby. Ruší objednávky v případě, že platba selže atd.
  - expiration - služba, která po 15-ti minutách ruší nezaplacené objednávky
  
  
## Technologie
  - Frontend je napsaný v javascriptu s použitím knihovny React a frameworku Next.js. 
    - react: 17.0.2
    - next: 12.0.8
    - bootstrap: 5.1.3
  
  - Backend je napsaný v typescriptu pomocí frameworku Express a bězí na Node.js
    - express: 4.17.2
  
  - Authorizace a authentikace uživatelů pomocí json web tokenů  
    - jsonwebtoken: 8.5.1    
    
  - Všechna data se ukládají do databáze MongoDB  
    - mongoose: 6.1.5
      
  - Projekt je testovám pomocí frameworku Jest
    - jest: 27.4.7    
    - supertest": 6.1.6
    - mongodb-memory-server: 8.1.0
    
  - Deployment pomocí Dockeru a Kubernetes
