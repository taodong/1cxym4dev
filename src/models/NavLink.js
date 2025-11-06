export default class NavLink {
    /**
     * Defines a navigation link item.
     * @param {*} id - Unique identifier for the nav link
     * @param {*} name - Display name for the nav link
     * @param {*} route - Route path for the nav link
     * @param {*} faIcon - Font Awesome icon classes for the nav link
     */
    
    constructor(id, name, route, faIcon="fa-solid fa-circle") {
        if (!id || !name || !route) {
            throw new Error("You must specify an ID, name, and route for every NavLink object!");
        }
        this.id = id;
        this.name = name;
        this.route = route;
        this.faIcon = faIcon;
    }
}