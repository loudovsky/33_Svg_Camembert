// Fct qui crée du dom avec en paramètre une chaine de caractères
// (petit snippet)
function strToDom(str) {
  return document.createRange().createContextualFragment(str).firstChild;
}

class PieChart extends HTMLElement {
  constructor() {
    super();

    // on crée une nouvelle racine avec un shadow root qui permettra de générer une structure html indépendante du reste de la page
    const shadow = this.attachShadow({ mode: "open" });

    // pour définir palette des couleurs des différents quartiers de camembert (plus tard option permettra paramétrer choix couleurs)
    const colors = [
      "#FAAA32",
      "#3EFA70",
      "#FA6A25",
      "#0C94FA",
      "#FA1F19",
      "#0CFAE2",
      "#AB6D23",
    ];

    // On extrait les données, on les sépare par un ; et on les met ds un tableau. Pour simplifier le tout, on mappe les différentes valeurs et on les parseFloat, pour s'assurer d'avoir des floats pour le reste du script
    const data = this.getAttribute("data")
      .split(";")
      .map((v) => parseFloat(v));

    const svg = strToDom(`<svg viewBox="-1 -1 2 2"></svg>`);

    this.paths = data.map((_, k) => {
      const color = colors[k % (colors.length - 1)];

      // on crée un chemin dc on choisit .createElementNS
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );

      // pour le remplir d'une certaine couleur on utilise 'fill'
      path.setAttribute("fill", color);
      svg.appendChild(path);

      return path;
    });

    shadow.appendChild(svg);

    // On crée les chemins
  }
}

customElements.define("pie-chart", PieChart);
