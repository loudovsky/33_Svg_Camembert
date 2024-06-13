
// on créé
function strToDom()


class PieChart extends HTMLElement {
    constructor() {
        super()
        
        // on crée une nouvelle racine avec un shadow root qui permettra de générer une structure html indépendante du reste de la page
        const shadow = this.attachShadow({ mode: 'open' })

        // pour définir palette des couleurs des différents quartiers de camembert (plus tard option permettra paramétrer choix couleurs)
        const colors = ['#FAAA32','#3EFA70','#FA6A25','#0C94FA','#FA1F19', '#0CFAE2', '#AB6D23']

        // On extrait les données, on les sépare par un ; et on les met ds un tableau. Pour simplifier le tout, on mappe les différentes valeurs et on les parseFloat, pour s'assurer d'avoir des floats pour le reste du script
        const data = this.getAttribute('data').split(';').map(v => parseFloat(v))
        console.log(data);
        
    }
}

customElements.define('pie-chart', PieChart)