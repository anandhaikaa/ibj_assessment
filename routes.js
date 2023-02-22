'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampiladmin')
        .get(jsonku.tampilsemuaadmin);
    
    app.route('/tampilcourses')
        .get(jsonku.tampilsemuacourses);

    app.route('/tampilcourse_categories')
        .get(jsonku.tampilsemuacourse_categories);
    
    app.route('/tampilusers')
        .get(jsonku.tampilsemuausers);

    app.route('/tampiluser_courses')
        .get(jsonku.tampilsemuauser_courses);
    
    app.route('/tampiladmin/:id')
        .get(jsonku.tampiladminberdasarkanid);
    
    app.route('/tampilcourses/:id')
        .get(jsonku.tampilcoursesberdasarkanid);

    app.route('/tampilcourse_categories/:id')
        .get(jsonku.tampilcourse_categoriesberdasarkanid);
    
    app.route('/tampilusers/:id')
        .get(jsonku.tampilusersberdasarkanid);

    app.route('/tampiluser_courses/:id')
        .get(jsonku.tampiluser_coursesberdasarkanid);
}