'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API berjalan!",res)
};

//menampilkan semua data admin
exports.tampilsemuaadmin = function(req,res){
    connection.query('SELECT * FROM admin', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data courses
exports.tampilsemuacourses = function(req,res){
    connection.query('SELECT * FROM courses', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data course_categories
exports.tampilsemuacourse_categories = function(req,res){
    connection.query('SELECT * FROM course_categories', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data users
exports.tampilsemuausers = function(req,res){
    connection.query('SELECT * FROM users', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data user_courses
exports.tampilsemuauser_courses = function(req,res){
    connection.query('SELECT * FROM user_courses', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data admin berdasarkan id
exports.tampiladminberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM admin WHERE id = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res)
            }
        });
};

//menampilkan semua data courses berdasarkan id
exports.tampilcoursesberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM courses WHERE id = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res)
            }
        });
};

//menampilkan semua data course_categories berdasarkan id
exports.tampilcourse_categoriesberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM course_categories WHERE id = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res)
            }
        });
};

//menampilkan semua data users berdasarkan id
exports.tampilusersberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM users WHERE id = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res)
            }
        });
};

//menampilkan semua data user_courses berdasarkan id
exports.tampiluser_coursesberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM user_courses WHERE id = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res)
            }
        });
};