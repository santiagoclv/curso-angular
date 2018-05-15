# 0.Typescripts
    cosas basicas de typescript
    * Funciones, Providers, interfaces, clases, let vs var.
# 1.HolaAngular
    Primera app Angular y primeros pasos en bootstramp
    *ngIf
    *ngFor
# 2.SPA
    Primera app con angular-cli.
    SPA <router-outlet>
    services,
    navbar bootstramp
    Router navigate,
    ActivatedRoute params
    routerLinkActive
    [routerLink]="[' direccion ']"
    Routes reglas definidas y sus parametros
    search bar
    animated fadeIn, fast
    keyup.enter event sobre valor de etiqueta #buscarTexto
    BootStramp instalado desde npm
# 3.Pipes
    Async - promises
    DecimalPipe - numeros
    percent - porcentaje de un numero
    currencyCode - DecimalPipe + moneda
    date - formatear fechas y objeos Date
    slice - en strings y arrays, tabien ejemplo con *ngFor
    json - para mostrar contenido de objetos json
    LOCALE_ID - configurar el idioma de la app
    Pipes perzonalizados! : crear tus propios pipes.
    ...args: any[]
    pip aync - con funcion
# 4.Services
    reactiv extention map
    http service consumiendo rest
    manejo de un observable.
    El login no funciona bien!
    Windget Spotyfy
    table b4
    mucho b4-grid
# 5.Ionic Angular
    PIPE IMPUROS, están atentos a los cambios en los datos que manipulan. 
        Estos pipes se pueden usarse como filtros en un template, haciendo parecer que son multiples templates.
    Api, Location, DBase
    Tabs
    index de pages y services (para facil imports)
    localStorage key-value storage
    JSON con parse y stringify
# 6.MiscelaneosUno
    Font Awesome 4.7: instalado desde assets agregado a angular-cli en styles
    ngStyle: css "en caliente" por elemenento [style.fontSize.px] [style.color] [ngStyle]="{ 'font-size': valor }"
    CSS por componente
    ngClass: es mucho más utilizado que el ngStyle, concatena clases de css al elemento asignado.
        button bt
        alert bt success danger info
        [disable] + [ngClass] + cambiar el css mientras y solo mientras ocurre un evento.
    DIRECTIVAS: linkea un elemento html a un pseudocomponente, el cual puede modificar este elemento a su gusto
        tambien es posible pasarle parametros a las directivas.
    ngSwitch: elegir que renderisar en base a un enumerado.
    Ruta Hija, ejemplo: */usuario/{id}/nuevo|editar|ver
                basicamente 'nuevo', 'editar', 'ver' son  rutas hijas de 'usuario' donde id es un dato que reprecenta a un "usuario"
    Ciclo de Vida:
                -- constructor del componente

                ngOnChanges: cuando cambian las propiedades del componente.
                ngOnInit: se dispara cuando el componente está inicializando.
                ngDoCheck: durante cada revicion del ciclo de deteccion de cambios. (despues de que un valor cambio)

                    ngAgterContentInit: despues de insertar contenido (<app-alguna-cosa>...).
                    ngAfterContentChecked: Despues de la revicion del contenido insertado.
                    ngAfterViewInit: Despues de la inicializacion del componente.
                    ngAfterViewChecked: Despues de cada revicion de los componentes.

                ngOnDestroy: Justo antes el componente o directiva sea destruido/a.
                    (sepuede utilizar para unsuscribe de observables o cosas así)

                Esta secuencia se repite mucho en el ciclo de vida: ngDoCheck ,ngAfterContentChecked, ngAfterViewChecked.

# 7.Auth0 
    Utilizacion de Auth0, y servicios para utilizarlo. https://manage.auth0.com/
    Auth-Guard implementando operaciones para CanActivae en una routes para el router.
    Visibilidad de paginas.
    Profile info desde la cuenta que utiliza para login
    Personalizar login de Auth0 - 
# 8.Formularios
    2 tipos, aproximacion por Template (template-form.component), y aproximacion por Data (data-form.component)
    
# 14.Deployment
    ng build: Carpeta Dist para un entorno de testing, similar al de produccion pero con el log de uno de desarrollo.
        npm install http-server -g: installar server test node
        http-server -o: sobre la carpeta Dist
    ng build --prod: antes modificar el archivo enviroments.ts y poner production = true;


