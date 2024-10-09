const sum = require("./sum");

test("Somar os dois números positivos", () => {
    expect(sum(1, 2)).toBe(3);
})

//2
test('dois mais dois é quatro', () => {
    expect(2 + 2).toBe (4);
    });
    test('atribuição de objeto', () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2});
        });

//3
test('adicionando números positivos não é zero', () => {
    for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) { 
        expect(a + b).not.toBe(0);
            }
        }
    });

//4


test('nulo', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
    });
    test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
    });
   

 //5
test('dois mais dois', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect (value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    // toße e toEqual são equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
    });


//6
test('adicionando números de ponto flutuante', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); Isso não vai funcionar por causa de um erro de arredondamento
    expect(value).toBeCloseTo(0.3); // Isso funciona.
    });


//7
test('não existe I em team', () => { 
    expect('team').not.toMatch(/1/);
 });
test('mas existe "stop" em Christoph', () => {
 expect('Christoph').toMatch(/stop/);
});


//8
const shoppingList = [
    'fraldas',
    'kleenex',
    'sacos de lixo',
    'papel toalha',
    'leite',
    ];
    test('a lista de compras tem leite nela', () => {
    expect(shoppingList).toContain ('leite');
    expect(new Set (shoppingList)).toContain ('leite');
    });