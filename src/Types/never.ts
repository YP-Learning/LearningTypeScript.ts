// never

function Errur(message: string): never {
    throw {message};
}

// never is to say that the function never gets to return anything
