# libraryDB
DB system for searching books in libraries.

## Usage

### Adding a Treatment

    $ node src/index.js add-treatment "<treatment title>" <treatment id>

### List Treatments

    $ node src/index.js list-treatments

### Delete Treatments

    $ node src/index.js delete-treatment <treatment id>
    
### Register Patient

    $ node src/index.js register-patient "<name>" "<email>"

### search Appointment for specific treatment

    $ node src/index.js search-appointment "<treatment name>" 

### book Appointment

    $ node src/index.js book-appointment "<time>" <patient id>
    
### mark appointment as done

    $ node src/index.js appointment-done "<time>"   
