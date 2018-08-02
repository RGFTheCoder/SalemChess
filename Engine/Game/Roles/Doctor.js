const Role = require("./Role");

class Doctor extends Role {
    constructor () {
        super();
        this.name = "Doctor";
    }
}

module.exports = Doctor;