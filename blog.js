    export function Count (data) {
        let el = document.getElementById('counter');
        let name = 'country';

        if (data) {
            if (data > 1) {
                name = 'countries';
            }
            el.innerHTML = data + ' ' + name;
        }
        else {
            el.innerHTML = 'No ' + name;
        }
    };

    export function FetchAll (countries) {
        let data = '';
        if (countries.length > 0) {
            for (let i = 0; i < countries.length; i++) {
                data += '<tr>';
                data += '<td>' + countries[i] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }

        // this.Count(this.countries.length);
        return this.el.innerHTML = data;
    };

    export function Add () {
        el = document.getElementById('add-name');
        // Get the value
        let country = el.value;

        if (country) {
            // Add the new value
            this.countries.push(country.trim());
            // Reset input value
            el.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };

    export function Edit (item) {
        let el = document.getElementById('edit-name');
        el.value = this.countries[item];
        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('saveEdit').onsubmit = function () {
            let country = el.value;

            if (country) {
                self.countries.splice(item, 1, country.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };

    export function Delete (item) {
        this.countries.splice(item, 1);
        this.FetchAll();
    };

