export class DestinoViaje {
	private selected: boolean;
	constructor(public nombre: string, public imagenUrl: string) { }
	isSelected(): boolean {
		return this.selected;
	}
	setSelected() {
		this.selected = true;
	}
}