import { Categoria } from "./categoria-model.js";

export class Categorias {
    private categorias: Categoria[] = [];

    public add(novo: Categoria): void {
        this.categorias.push(novo);
    }

    public lista(): ReadonlyArray<Categoria>{
        return this.categorias;
    }

    public get(): readonly Categoria[] {
        return this.categorias;
    }
}