bindedFields.push({ name: "rep1" });
bindedFields.push({ name: "lien1" });
bindedFields.push({ name: "rep2" });
bindedFields.push({ name: "lien2" });
bindedFields.push({ name: "rep3" });
bindedFields.push({ name: "lien3" });




function Convertir() {
    majDescription(); // Appeler la fonction pour ajouter la description

    const csv = document.getElementById('mot').value;
    const texte = csv.trim(); // Suppression des espaces en trop
    const ligne = texte.split('\n');
    ligne.shift(); // Permet de supprimer la première ligne (LIEN,MOTS CLES TROUVE,REPETITION).

    const mindmap = {
        "displayName": "Veille technologique",
        "skills": [],
        "xOffset": 0,
        "yOffset": 0,
        "scale": 0.5
    };

    // Créer le nœud pour "Mot clés"
    const noeudVeille = {
        "icon": "",
        "id": 0,
        "name": "Veille technologique",
        "parents": [],
        "childs": [],
        "fillColor": "#007bff",
        "posX": 5000,
        "posY": 100
    };
    mindmap.skills.push(noeudVeille);

    let posX = 500;
    const posY = 250;
    const espace = 200; // Espacement entre les nœuds
    const liensRencontre = []; // Stocker quand le lien est rencontré

    // Créer les nœuds de site et les relier à "Mot clés"
    for (let i = 0; i < ligne.length; i++) {
        const [lien, motsCles, repetition] = ligne[i].split(',');
        const lienT = lien.trim();
        const mot = motsCles.trim();
        const repetitionTrim = repetition.trim();

        if (!liensRencontre.includes(lienT)) {
            liensRencontre.push(lienT); // Ajout du lien à la liste des liens rencontrés

            noeudLien = {
                "icon": "",
                "id": mindmap.skills.length,
                "name": lienT,
                "parents": [{ "id": 0 }], // Relier à "Mot clés"
                "childs": [],
                "fillColor": "#77B5FE",
                "posX": posX,
                "posY": posY + 200
            };
            mindmap.skills.push(noeudLien); // Ajouter à la liste de compétences dans mindmap le lien  
            posX += espace; // Augmenter la position X pour le prochain nœud 
        }

        // Créer le nœud pour les mots clés
        const noeudMot = {
            "icon": "",
            "id": mindmap.skills.length,
            "name": mot,
            "parents": [{ "id": noeudLien.id }],
            "childs": [],
            "fillColor": "#C0C0C0",
            "posX": posX,
            "posY": posY + 400,
            "description": `Répétition: ${repetitionTrim}` // Ajouter la répétition dans la description
        };
        mindmap.skills.push(noeudMot); // Ajouter à la liste de compétences dans mindmap le mot clé

        posX += espace; // Pour qu'il y ait un espace entre chaque nœud
    }

    const json = document.getElementById('result');
    json.value = JSON.stringify(mindmap, null, 2); // Convertir une valeur JavaScript en chaîne JSON
}
