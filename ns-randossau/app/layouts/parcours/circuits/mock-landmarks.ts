import { Landmark } from './landmark';
import { defer } from 'rxjs';

export const LANDMARKS: Landmark[] = [
    {
        id: 0,
        name: "La Bastide - (Circ. Patrimoine)",
        description: "La vallée d'Ossau est une vallée des Pyrénées françaises, située en Béarn dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Ses habitants sont les Ossalois. ",
        image: "~/images/photos/bastide1.png",
        location: "vallée d'Ossau",
        pointdepart: "Bastide",
        niveau: 1,
        distance: 25,
        elevation: 60,
        duree: "2h",
        type: "vtt",
        circuit: true
    },
    {
        id: 1,
        name: "Le vieux château",
        description: "La vallée d'Ossau est une vallée des Pyrénées françaises, située en Béarn dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Ses habitants sont les Ossalois. ",
        image: "~/images/photos/bastide2.png",
        location: "vallée d'Ossau",
        pointdepart: "chateau",
        niveau: 2,
        distance: 4,
        elevation: 60,
        duree: "1h",
        type: "vtt"
    },
    {
        id: 2,
        name: "Le piémont ossalois (Circ. Patrimoine)",
        description: "La vallée d'Ossau est une vallée des Pyrénées françaises, située en Béarn dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Ses habitants sont les Ossalois. ",
        image: "~/images/photos/bastide1.png",
        location: "vallée d'Ossau",
        pointdepart: "Bastide",
        niveau: 1,
        distance: 10,
        elevation: 50,
        duree: "2h",
        type: "vtt"
    },
    {
        id: 3,
        name: "Les 3trois croix",
        description: "La vallée d'Ossau est une vallée des Pyrénées françaises, située en Béarn dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Ses habitants sont les Ossalois. ",
        image: "~/images/photos/bastide2.png",
        location: "vallée d'Ossau",
        pointdepart: "Bastide",
        niveau: 1,
        distance: 25,
        elevation: 60,
        duree: "3h",
        type: "vtt"
    },
    {
        id: 4,
        name: "Le tour du dolmen",
        description: "La vallée d'Ossau est une vallée des Pyrénées françaises, située en Béarn dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Ses habitants sont les Ossalois. ",
        image: "~/images/photos/bastide1.png",
        location: "vallée d'Ossau",
        pointdepart: "Bastide",
        niveau: 1,
        distance: 8,
        elevation: 21,
        duree: "1.5h",
        type: "vtt"
    },
    {
        id: 5,
        name: "Les chênes",
        description: "La vallée d'Ossau est une vallée des Pyrénées françaises, située en Béarn dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Ses habitants sont les Ossalois. ",
        image: "~/images/photos/bastide2.png",
        location: "vallée d'Ossau",
        pointdepart: "Bastidev",
        niveau: 2,
        distance: 14,
        elevation: 33,
        duree: "2h",
        type: "vtt"
    },
    {
        id: 6,
        name: "Les pierres (Circ. Patrimoine)",
        description: "La vallée d'Ossau est une vallée des Pyrénées françaises, située en Béarn dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Ses habitants sont les Ossalois. ",
        image: "~/images/photos/bastide1.png",
        location: "vallée d'Ossau",
        pointdepart: "Bastide",
        niveau: 3,
        distance: 5,
        elevation: 21,
        duree: "2h",
        type: "rando"
    },
    {
        id: 6,
        name: "",
        description: "La vallée d'Ossau est une vallée des Pyrénées françaises, située en Béarn dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Ses habitants sont les Ossalois. ",
        image: "no",
        location: "vallée d'Ossau",
        pointdepart: "Bastide",
        niveau: 3,
        distance: 5,
        elevation: 21,
        duree: "2h",
        type: "rando"
    }
]
