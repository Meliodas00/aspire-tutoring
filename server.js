require("dotenv").config();


//const { startMonthlyInvoiceScheduler } = require('./scheduler/monthlyInvoices');

const app = require("./app");

const http = require("http");

const { Server } =
    require("socket.io");

const express =
    require("express");

const server =
    http.createServer(app);

const io =
    new Server(server);


const PORT =
    process.env.PORT || 3000;

//startMonthlyInvoiceScheduler();

server.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log(
            `Server running on port ${PORT}`
        );

    }
);