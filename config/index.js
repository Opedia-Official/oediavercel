const dev = process.env.NODE_ENV !== "production";

export const server = dev ?
    "https://admin.opediatech.com" :
    "https://admin.opediatech.com";


// export const ClientURL = dev ?
//     "http://localhost:3000/" :
//     "https://admin.opediatech.com";