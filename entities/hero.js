class Hero {

    constructor(heroInfo) {
        this._name = heroInfo.name;
        this._series = heroInfo.series.items;
        this._events = heroInfo.events.items;
        this._image = heroInfo.thumbnail.path + "." + heroInfo.thumbnail.extension;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    addSerie(serie) {
        this._series.push(serie);
    }

    removeSerie(serie) {
        const index = this._series.indexOf(serie);
        this._series.splice(index, 1);
    }

    addEvent(event) {
        this._events.push(event);

    }

    removeEvent(event) {
        const index = this._events.indexOf(event);
        this._events.splice(index, 1);
    }


    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    toString() {
        return "<div><img style='height: 32px;width: 32px' src='" + this._image + "'/> <span>" + this._name + "</span> </div>"
    }

    show() {
        return this.toString();
    }

}
