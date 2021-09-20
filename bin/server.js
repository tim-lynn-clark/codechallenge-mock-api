"use strict";

const Hapi = require("@hapi/hapi");
const fs = require("fs");

const init = async () => {
    const server = Hapi.server({
        port: 8888,
        host: "localhost",
    });

    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "This is the Code Challenge RESTful mock API.";
        },
    });

    server.route({
        method: "GET",
        path: "/cancer_types",
        handler: (request, h) => {
            let cancerData = fs.readFileSync("./data/cancer/cancer_types.json");
            let cancerJSON = JSON.parse(cancerData);
            return cancerJSON;
        },
    });

    server.route({
        method: "GET",
        path: "/cancers/breast",
        handler: (request, h) => {
            let cancerData = fs.readFileSync(
                "./data/cancer/breast_cancer.json"
            );
            let cancerJSON = JSON.parse(cancerData);
            return cancerJSON;
        },
    });

    server.route({
        method: "GET",
        path: "/cancers/leukemia",
        handler: (request, h) => {
            let cancerData = fs.readFileSync(
                "./data/cancer/leukemia_cancer.json"
            );
            let cancerJSON = JSON.parse(cancerData);
            return cancerJSON;
        },
    });

    server.route({
        method: "GET",
        path: "/cancers/lymphoma",
        handler: (request, h) => {
            let cancerData = fs.readFileSync(
                "./data/cancer/lymphoma_cancer.json"
            );
            let cancerJSON = JSON.parse(cancerData);
            return cancerJSON;
        },
    });

    server.route({
        method: "GET",
        path: "/coping_with_cancer",
        handler: (request, h) => {
            let cancerData = fs.readFileSync(
                "./data/cancer/coping_with_cancer.json"
            );
            let cancerJSON = JSON.parse(cancerData);
            return cancerJSON;
        },
    });

    await server.start();
    console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
