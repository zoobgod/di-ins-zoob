const greeting = (name) => {
    console.log(`Hello, ${name}, welcome to nodejs`)};

    const sayhello = (name) => {
        console.log(`Hello, ${name}`);
    };

    module.exports = {
        greeting,
        sayhello
    }