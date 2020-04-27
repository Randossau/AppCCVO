export class Landmark {
    id: number;
    name: string;
    description: string;
    image: string;
    location: string;
    likes?: number;
    comments?: number;
    type?: string;
    niveau?: number | string;
    circuit?: boolean;
    titre?: string;
    pointdepart?: string;
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
