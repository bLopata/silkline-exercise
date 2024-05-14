export const configurations = [
    {
        name: 'Standard',
        lights: {
            red: { position: 1, color: 'red' },
            yellow: { position: 2, color: 'yellow' },
            green: { position: 3, color: 'green' }
        },
        sequence: [
            { colors: ['green'], duration: 3000 },
            { colors: ['yellow'], duration: 1000 },
            { colors: ['red'], duration: 2000 }
        ]
    },
    {
        name: 'Emergency',
        lights: {
            red: { position: 1, color: 'red' },
            yellow: { position: 2, color: 'yellow' },
            green: { position: 3, color: 'green' }
        },
        sequence: [
            { colors: ['red'], duration: 1000 },
            { colors: [], duration: 500 }
        ]
    },
    {
        name: 'Protected Turn',
        lights: {
            red: { position: 1, color: 'red' },
            yellow: { position: 2, color: 'yellow' },
            green: { position: 3, color: 'green' },
            turn: { position: 4, color: 'mint' }
        },
        sequence: [
            { colors: ['turn'], duration: 1000 },
            { colors: ['green'], duration: 1000 },
            { colors: ['yellow'], duration: 1000 },
            { colors: ['red'], duration: 2000 }
        ]
    },
    {
        name: 'Party Time',
        lights: {
            red: { position: 1, color: 'red' },
            purple: { position: 2, color: 'purple' },
            green: { position: 3, color: 'green' },
            orange: { position: 4, color: 'orange' }
        },
        sequence: [
            { colors: ["red", "orange"], duration: 500 },
            { colors: ["purple", "green"], duration: 500 },
            { colors: ["purple", "orange", "green"], duration: 500 },
            { colors: ["purple", "orange", "green", "red"], duration: 500 },

        ]
    }
];