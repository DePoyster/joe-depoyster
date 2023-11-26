//Joe DePoyster
//COSC 4210 final

var path = require("path")
const nodeExternals = require("webpack-node-externals");

module.exports = 
{
    
    entry:"./index.js",
    target: "node",
    externals: [nodeExternals()],

    output:
    {
        path: path.join(__dirname, "build-server"),
        filename:"index.js"
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
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"],
            },
        ],
    },
};