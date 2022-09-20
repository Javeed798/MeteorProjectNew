Router.configure({
    layoutTemplate : 'layout'
});

Router.map(function () {
    this.route('home',{
        path : '/',
        template :'home',
        data: function () {
            templateData = {
                products: Products.find({is_featured : "1"})
            };
            return templateData;
        }
    })

//    products
    this.route('product',{
        path:'/product',
        template: 'product',
        data: function () {
             templateData = {
                products: Products.find()
            };
            return templateData;
        }
    })
    //    Add Product
    this.route('add_product',{
        path:'/add_product',
        template: 'add_product',
        data: function () {
            templateData = {
                "categories": Categories.find()
            };
            return templateData;
        }
    })

    //category Products
    this.route('category_products',{
        path:'/categories/:slug',
        template:"category_products",
        data:function () {
            templateData = {
                category_products : Products.find({
                    category : this.params.slug
                })
            };
            return templateData;
        }
    });

    // New Reviews
    this.route("new_review",{
        path : "/new-review:_id",
        template:"new_review",
        data : function () {
            return Products.findOne(this.params._id);
        }
    })

    // product page
    this.route("products",{
        path : "/product/:_id",
        template:"products",
        data : function () {
            return Products.findOne(this.params._id);
        }
    })

})
