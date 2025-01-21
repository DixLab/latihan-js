var s = '';

for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}

for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 30; j++) {
        s += '='
    }
    s += '\n';
}

for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}

for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 30; j++) {
        s += '=';
    }
    s += '\n';
}

for (var i = 0; i < 10; i++) {
    for (var j = 9; j > i; j--) {
        s += ' ';
    }
    for (var k = 0; k <= i; k++) {
        s += '*';
    }
    s += '\n';
}

for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 30; j++) {
        s += '=';
    }
    s += '\n';
}

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i; j++) {
        s += ' ';
    }
    for (var k = 10; k > i; k--) {
        s += '*';
    }
    s += '\n';
}

for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 30; j++) {
        s += '=';
    }
    s += '\n';
}

for (var i = 0; i < 10; i++) {
    for (var j = 9; j > i; j--) {
        s += ' ';
    }
    for (var k = 0; k <= i; k++) {
        s += '*'
    }
    for (var l = 0; l < i; l++) {
        s += '*'
    }
    s += '\n'
}

for (var i = 0; i < 9; i++) {
    for (var j = 0; j <= i; j++) {
        s += ' ';
    } 
    for (var k = 9; k > i; k--) {
        s += '*';
    }
    for (var l = 8; l > i; l--) {
        s += '*';
    }
    s += '\n';
}

for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 30; j++) {
        s += '=';
    }
    s+= '\n';
}

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 19; j++) {
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                s += ' ';
            } else {
                s += '#';
            }
        } else {
            if (j % 2 === 0) {
                s += '#';
            } else {
                s += ' '
            }
        }
    }
    s += '\n';
}

console.log(s);