// Definindo um objeto com os modelos de carros e seu consumo médio de gasolina (em km/l)
const consumoGasolina = {
    "Volkswagen Gol": 12,
    "Chevrolet Onix": 13,
    "Fiat Palio": 11,
    "Ford Ka": 14,
    "Renault Sandero": 12.5,
    "Hyundai HB20": 13.5,
    "Toyota Corolla": 15,
    "Honda Civic": 14.5,
    "Nissan March": 12.5,
    "Kia Picanto": 15,
    "Jeep Renegade": 11.5,
    "Volkswagen Polo": 13.5,
    "Chevrolet Prisma": 13,
    "Fiat Uno": 11,
    "Ford Fiesta": 12.5,
    "Toyota Hilux": 10,
    "Honda Fit": 14,
    "Fiat Strada": 11.5,
    "Chevrolet Spin": 10.5,
    "Volkswagen Fox": 13,
    "Hyundai Creta": 12.5,
    "Ford EcoSport": 12,
    "Renault Logan": 11,
    "Nissan Kicks": 13,
    "Jeep Compass": 11.5,
    "Fiat Toro": 10.5,
    "Volkswagen Up!": 14,
    "Chevrolet Cruze": 13.5,
    "Honda HR-V": 12.5,
    "Toyota Etios": 13
};

// Função para calcular o consumo de gasolina entre dois pontos (A e B) com um determinado modelo de carro
function calcularConsumoGasolina(modeloCarro, distanciaViagem) {
    // Verifica se o modelo de carro está presente no objeto de consumo de gasolina
    if (modeloCarro in consumoGasolina) {
        // Calcula o consumo de gasolina em litros
        const consumoLitros = distanciaViagem / consumoGasolina[modeloCarro];
        return consumoLitros;
    } else {
        return "Modelo de carro não encontrado.";
    }
}

// Exemplo de uso da função
const modeloCarro = "Chevrolet Onix";
const distanciaViagem = 300; // Em quilômetros

const consumoGasolinaTotal = calcularConsumoGasolina(modeloCarro, distanciaViagem);
console.log(`Para uma viagem de ${distanciaViagem} km com um ${modeloCarro}, você irá consumir ${consumoGasolinaTotal.toFixed(2)} litros de gasolina.`);
