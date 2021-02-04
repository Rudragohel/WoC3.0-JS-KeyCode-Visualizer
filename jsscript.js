const keyCodes = {
    0: 'That key has no keycode',
    3: 'break',
    8: 'Backspace',
    9: 'Tab',
    12: 'clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'pause/break',
    20: 'CapsLock',
    21: 'hangul',
    25: 'hanja',
    27: 'Escape',
    28: 'conversion',
    29: 'non-conversion',
    32: 'Space',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    41: 'select',
    42: 'print',
    43: 'execute',
    44: 'Print Screen',
    45: 'Insert',
    46: 'Delete',
    47: 'help',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    58: ':',
    59: 'semicolon (firefox), equals',
    60: '<',
    61: 'equals (firefox)',
    63: 'ß',
    64: '@ (firefox)',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    91: 'Windows Key / Left ⌘ / Chromebook Search key',
    92: 'right window key',
    93: 'Windows Menu / Right ⌘',
    95: 'sleep',
    96: 'numpad 0',
    97: 'numpad 1',
    98: 'numpad 2',
    99: 'numpad 3',
    100: 'numpad 4',
    101: 'numpad 5',
    102: 'numpad 6',
    103: 'numpad 7',
    104: 'numpad 8',
    105: 'numpad 9',
    106: 'multiply',
    107: '+',
    108: 'numpad period (firefox)',
    109: 'subtract',
    110: 'decimal point',
    111: '/',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    124: 'F13',
    125: 'F14',
    126: 'F15',
    127: 'F16',
    128: 'F17',
    129: 'F18',
    130: 'F19',
    131: 'F20',
    132: 'F21',
    133: 'F22',
    134: 'F23',
    135: 'F24',
    136: 'F25',
    137: 'F26',
    138: 'F27',
    139: 'F28',
    140: 'F29',
    141: 'F30',
    142: 'F31',
    143: 'F32',
    144: 'NumLock',
    145: 'scroll lock',
    151: 'airplane mode',
    160: '^',
    161: '!',
    162: '؛ (arabic semicolon)',
    163: '#',
    164: '$',
    165: 'ù',
    166: 'page backward',
    167: 'page forward',
    168: 'refresh',
    169: 'closing paren (AZERTY)',
    170: '*',
    171: '~ + * key',
    172: 'home key',
    173: '-',
    174: 'AudioVolumeDown',
    175: 'AudioVolumeUp',
    176: 'next',
    177: 'previous',
    178: 'stop',
    179: 'play/pause',
    180: 'e-mail',
    181: 'mute/unmute (firefox)',
    182: 'decrease volume level (firefox)',
    183: 'increase volume level (firefox)',
    186: 'semi-colon / ñ',
    187: 'equal sign',
    188: ',',
    189: 'dash',
    190: 'period',
    191: 'forward slash / ç',
    192: 'grave accent / ñ / æ / ö',
    193: '?, / or °',
    194: 'numpad period (chrome)',
    219: 'open bracket',
    220: 'back slash',
    221: 'close bracket / å',
    222: 'single quote / ø / ä',
    223: '`',
    224: 'left or right ⌘ key (firefox)',
    225: 'altgr',
    226: '< /git >, left back slash',
    230: 'GNOME Compose Key',
    231: 'ç',
    233: 'XF86Forward',
    234: 'XF86Back',
    235: 'non-conversion',
    240: 'alphanumeric',
    242: 'hiragana/katakana',
    243: 'half-width/full-width',
    244: 'kanji',
    251: 'unlock trackpad (Chrome/Edge)',
    255: 'toggle touchpad',
    
};
    var table=document.getElementById("myTable");
    var ttable=document.getElementById("titletable");
    var itable=document.getElementById("indTable");
    var titleitable=document.getElementById("titable");

for(const key in keyCodes){
    
    var row_l=table.row_length;
    var row = table.insertRow(row_l);
    
    var cell1 = row.insertCell(0);
    
    var cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = keyCodes[key];
    
}

var rl=0;

document.addEventListener('keydown', (event) => {
    
    titletable.style.display="none";
    table.style.display="none";
    itable.style.display="";
    titleitable.style.display="";

    let { code, key, number, location, shiftKey, metaKey, altKey, ctrlKey } = event;
    console.log(event.code);
    var rl = itable.rows.length;

    if(rl>0){
        itable.deleteRow(0);
    }
                    
    
   for(const key in keyCodes){

            if(event.key==keyCodes[key]){
                var row_l=itable.row_length;
                var row = itable.insertRow(row_l);
    
                var cell1 = row.insertCell(0);
    
                var cell2 = row.insertCell(1);
                cell1.innerHTML = key;
                cell2.innerHTML = keyCodes[key];
            }

        
    }
});


function showtable(){
    titletable.style.display="";
    table.style.display="";
    itable.style.display="none";
    titleitable.style.display="none";
}