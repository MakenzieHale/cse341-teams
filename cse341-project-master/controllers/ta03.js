const Product = require('../models/product');

exports.getProducts = (req,res,next) => {
   Product.fetchAll((products) => {
    res.render('pages/ta03', {
        title: 'Team Activity 03',
        path:'/ta03',
        products:products,
    });
   });
    
};

exports.getSearchProducts = (req,res,next) => {
    const query = req.query.query.toLowerCase();
    Product.search(query, (filteredProducts) => {
        res.render('pages/ta03', {
            title:'Team Activity 03',
            path:'/ta03',
            products:filteredProducts,
        });
    });
};