//Joe DePoyster
//Assignment 7, COSC 4210

var path = require("path")
module.exports = 
{
    
    entry:"./src/index.js",
    output:
    {
        path: path.join(__dirname,'public'),
        filename:"bundle.js"
    },
    module:
    {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: [
                    {
                        loader:"babel-loader",
                        options:{
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ],
            },
        ]
    }
};
