export class Landmark {
    id: number;
    name: string;
    description: string;
    image: string;
    location: string;
    type?: string;
    niveau?: number;
    circuit?: boolean | string;
    titre?: string;
    pointDepart?: string;
    duree?: string;
    pointGPS?: string;
    distance?: number;
    balisage?: string;
    elevation?: number;
    interest?: string;
    advice?: string;
    focus?: string;
    caption?: string;
    detail?: string;
    pdf?: string;
    gpx?: string;
    gpxLocal?: string;
}
