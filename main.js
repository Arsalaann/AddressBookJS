class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, EmailId) {
        try {
            if (firstName[0] > "Z" || firstName.length < 3)
                throw "firstName";
            if (lastName[0] > "Z" || lastName.length < 3)
                throw "lastName";
            if (address.length < 4 || city.length < 4 || state.length < 4)
                throw "address";
            this.firstName = firstName;
            this.lastName = lastName;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.phoneNumber = phoneNumber;
            this.EmailId = EmailId;
        }
        catch (e) {
            console.log("Invalid Entry for " + e);
        }
    }
}
let contact1 = new Contact("Arsal", "khan", "abc", "bhopal", "mp", "462038", "290923023", "abc@123.com");