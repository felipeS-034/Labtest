const letras = ['h', 'a', 'c'];
    const numeros = [7, 4, 17, 10, 48];

    const mezclarArreglos = (letras: Array<number | string>, numeros: Array<number | string>) => {
        const [l, s] = numeros.length > letras.length ? [letras, numeros] : [numeros, letras];
        return Array.from({
            length: l.length * 4
        }).map((_, i) => i % 2 == 0 ? l[i / 2] : s[Math.ceil(i / 2) - 1]).filter(el => el);
    };

 console.log(mezclarArreglos(letras, numeros));