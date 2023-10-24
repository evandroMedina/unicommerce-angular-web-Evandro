
import { Categorias } from "../models/categorias-model.js";
import { View } from "./view.js";

export class CategoriasView extends View<Categorias>{
    protected template(model: Categorias): string {
        return`
        <table class="table table-hover table-bordered"> 
        <thead>
            <tr>
                <th>NOME</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
            ${model.lista().map(categoria => {
                return `
                    <tr>
                        <td>${categoria._nome}</td>
                        <td>${categoria._status}</td>
                    </tr>
                `;
            }).join('')}
        </tbody>
    </table>
        `;


    }
    
}