import { Injectable } from "@angular/core";
import { ParcoursI } from "./parcoursI.model";
import { PARCOURS } from "./mock-parcours";



@Injectable()

export class ParcoursServService {
    private _selectedId = -1;

    getLandmarks(): ParcoursI[] {
        return PARCOURS;
    }

    getLandmark(id: number): ParcoursI {
        return PARCOURS.filter(parcours => parcours.id === id)[0];
    }

    setSelectedId(id: number) {
        if (id < PARCOURS.length) {
            this._selectedId = id;
        }
    }

    getSelected(): ParcoursI {
        return this._selectedId < 0 ? null : this.getLandmark(this._selectedId);
    }

}

