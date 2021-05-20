var SettingsTable = {
    app: {
        debug: "true",
        ssl: false,
        host: "172.20.0.9",
        port: "3100",
        types: [
            "send",
            "confirm",
            "verify"
        ]
    },
    confirm: {
        doichain: {
            host: "localhost",
            port: "8338",
            username: "admin",
            password: "......",
            smtps: false,
            address: ""
        },
    }
};

export {SettingsTable};